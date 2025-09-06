import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendMail(name, email, message) {
  try {
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: "hs0864857@gmail.com", // ✅ Your client's email
      subject: "New Contact Form Submission",
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${name} (${email})</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    });

    console.log("Email sent to client!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export default sendMail;
