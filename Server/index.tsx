const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const nodemailer = require('nodemailer');


const app = express()
app.use(cors())
app.use(express.jon())

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: process.env.GMAIL_PORT,
    secure: true,
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {

    const mailOptions = {
        from: `"Contact Form" <${process.env.GMAIL_USER}>`, // Your Gmail as sender
        to: process.env.GMAIL_USER, // Send to yourself
        replyTo: `${formData.name} <${formData.email}>`, // User's email for replies
        subject: `New message from ${formData.name}`,
        text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    };




    app.post('/send', async (req, res) => {
        try {
            const { name, email, subject, message } = req.body;

            const mailOptions = {
                from: `"Contact Form" <${process.env.GMAIL_USER}>`, // Your Gmail as sender
                to: process.env.GMAIL_USER, // Send to yourself
                subject: `New Message from ${name}`,
                text: `Name: ${name} Email: ${email} Subject:${subject} Message: ${message} `
            };

            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error sending email' });
        }
    });






    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);