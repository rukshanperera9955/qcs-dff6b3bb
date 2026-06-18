import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Serves the /api/send-email handler during `npm run dev` so the contact form
// works with a single command. The same handler in /api is deployed by Vercel
// as a serverless function in production.
function devApiPlugin(): Plugin {
  return {
    name: "dev-api",
    configureServer(server) {
      server.middlewares.use("/api/send-email", (req, res) => {
        const chunks: Buffer[] = [];
        req.on("data", (chunk: Buffer) => chunks.push(chunk));
        req.on("end", async () => {
          const raw = Buffer.concat(chunks).toString("utf-8");
          // Adapt Node's raw req/res to the Vercel-style handler API.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const request = req as any;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const response = res as any;
          try {
            request.body = raw ? JSON.parse(raw) : {};
          } catch {
            request.body = {};
          }
          response.status = (code: number) => {
            response.statusCode = code;
            return response;
          };
          response.json = (data: unknown) => {
            response.setHeader("Content-Type", "application/json");
            response.end(JSON.stringify(data));
            return response;
          };
          const handlerPath = "./api/send-email.js";
          const { default: handler } = await import(handlerPath);
          await handler(request, response);
        });
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Expose .env (incl. non-VITE_ vars like RESEND_API_KEY) to the dev API handler.
  const env = loadEnv(mode, process.cwd(), "");
  const resendApiKey = env.RESEND_API_KEY || env.VITE_RESEND_API_KEY;
  if (resendApiKey) {
    process.env.RESEND_API_KEY = resendApiKey;
  }

  return {
    base: "/",

    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react(),
      devApiPlugin(),
      mode === "development" && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
