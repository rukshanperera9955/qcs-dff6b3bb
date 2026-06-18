import { Resend } from "resend";

/**
 * Email handler shared by the Vercel serverless deployment (this file is
 * auto-exposed at /api/send-email in production) and the local Express dev
 * server (server/index.js mounts it on the same path).
 *
 * The Resend client is created inside the handler so process.env is read at
 * request time — in local dev that's after dotenv.config() has run.
 */
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, service, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const apiKey = process.env.RESEND_API_KEY || process.env.VITE_RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return res.status(500).json({ error: "Email service is not configured" });
  }

  const resend = new Resend(apiKey);

  // Where submissions are delivered, and the verified sender they come from.
  // IMPORTANT: to deliver to an external inbox like wneranga@hotmail.com, the
  // FROM address must be on a domain verified at resend.com/domains (here:
  // qcs.lk). Resend's shared "onboarding@resend.dev" sender can only deliver
  // to your own Resend account email. Both are overridable via env vars.
  const toEmail = process.env.CONTACT_TO_EMAIL || "wneranga@hotmail.com";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL || "QCS Website <noreply@qcs.lk>";

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Service Interest:</strong> ${service || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (data.error) {
      console.error("Resend Error:", data.error);
      return res.status(500).json({ error: data.error.message });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Server Error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
