import nodemailer from "nodemailer";

export const sendKycMail = async (req, res) => {
  const {
    fullName,
    email,
    phone,
    country,
    identityType,
    identityNumber,
    frontFile,
    backFile,
  } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Build attachments array safely
    const attachments = [];

    if (frontFile) {
      attachments.push({
        filename: frontFile.originalname || "frontFile.jpg",
        content: frontFile.buffer,
      });
    }

    if (backFile) {
      attachments.push({
        filename: backFile.originalname || "backFile.jpg",
        content: backFile.buffer,
      });
    }

    await transporter.sendMail({
      to: process.env.MAIL_USER,
      subject: "New KYC Submission - Reward Capital",
      html: `
        <h2>New KYC Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Document Type:</strong> ${identityType}</p>
        <p><strong>Identity Number:</strong> ${identityNumber}</p>
      `,
      attachments, // clean array
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("KYC Mail Error:", error);
    res.status(500).json({ success: false });
  }
};
