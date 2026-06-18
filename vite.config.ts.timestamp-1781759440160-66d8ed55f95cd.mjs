// vite.config.ts
import { defineConfig } from "file:///D:/Projects/qcs/qcs-dff6b3bb/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Projects/qcs/qcs-dff6b3bb/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///D:/Projects/qcs/qcs-dff6b3bb/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_dirname = "D:\\Projects\\qcs\\qcs-dff6b3bb";
var vite_config_default = defineConfig(({ mode }) => ({
  // ADD THIS LINE:
  // If we are in production (GitHub Pages), use the repo name.
  // For local dev or Vercel, it stays as'/'
  base: "/",
  server: {
    host: "::",
    port: 8080,
    proxy: {
      // In dev, forward API calls to the local Express server (npm run server).
      // In production the same "/api/*" path is served by Vercel serverless
      // functions (see /api), so the frontend fetch can stay relative.
      "/api": "http://localhost:5000"
    }
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9qZWN0c1xcXFxxY3NcXFxccWNzLWRmZjZiM2JiXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxQcm9qZWN0c1xcXFxxY3NcXFxccWNzLWRmZjZiM2JiXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Qcm9qZWN0cy9xY3MvcWNzLWRmZjZiM2JiL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2NcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHsgY29tcG9uZW50VGFnZ2VyIH0gZnJvbSBcImxvdmFibGUtdGFnZ2VyXCI7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiAoe1xyXG4gIC8vIEFERCBUSElTIExJTkU6XHJcbiAgLy8gSWYgd2UgYXJlIGluIHByb2R1Y3Rpb24gKEdpdEh1YiBQYWdlcyksIHVzZSB0aGUgcmVwbyBuYW1lLlxyXG4gIC8vIEZvciBsb2NhbCBkZXYgb3IgVmVyY2VsLCBpdCBzdGF5cyBhcycvJ1xyXG4gIGJhc2U6IFwiL1wiLFxyXG5cclxuICBzZXJ2ZXI6IHtcclxuICAgIGhvc3Q6IFwiOjpcIixcclxuICAgIHBvcnQ6IDgwODAsXHJcbiAgICBwcm94eToge1xyXG4gICAgICAvLyBJbiBkZXYsIGZvcndhcmQgQVBJIGNhbGxzIHRvIHRoZSBsb2NhbCBFeHByZXNzIHNlcnZlciAobnBtIHJ1biBzZXJ2ZXIpLlxyXG4gICAgICAvLyBJbiBwcm9kdWN0aW9uIHRoZSBzYW1lIFwiL2FwaS8qXCIgcGF0aCBpcyBzZXJ2ZWQgYnkgVmVyY2VsIHNlcnZlcmxlc3NcclxuICAgICAgLy8gZnVuY3Rpb25zIChzZWUgL2FwaSksIHNvIHRoZSBmcm9udGVuZCBmZXRjaCBjYW4gc3RheSByZWxhdGl2ZS5cclxuICAgICAgXCIvYXBpXCI6IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW3JlYWN0KCksIG1vZGUgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiBjb21wb25lbnRUYWdnZXIoKV0uZmlsdGVyKFxyXG4gICAgQm9vbGVhblxyXG4gICksXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4USxTQUFTLG9CQUFvQjtBQUMzUyxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsdUJBQXVCO0FBSGhDLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFJekMsTUFBTTtBQUFBLEVBRU4sUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSUwsUUFBUTtBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTLENBQUMsTUFBTSxHQUFHLFNBQVMsaUJBQWlCLGdCQUFnQixDQUFDLEVBQUU7QUFBQSxJQUM5RDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFDRixFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=
