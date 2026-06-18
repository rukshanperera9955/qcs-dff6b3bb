import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sendEmail from "../api/send-email.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Reuse the same handler that Vercel serves at /api/send-email in production,
// so local dev and production share one implementation.
app.post("/api/send-email", sendEmail);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
