import type { NextApiRequest, NextApiResponse } from 'next';
import * as nodemailer from 'nodemailer';

interface EmailPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

   console.log('Received request:', req.method, req.body) 
    // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
    
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body as EmailPayload;

    console.log('Processing request from:', email)
    
    const info = await transporter.sendMail({
      from: `"Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    console.log("Message sent: %s", info.messageId);
    return res.status(200).json({ success: true, messageId: info.messageId });
    
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ 
      error: 'Error sending email',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
