// emailService.js
const nodemailer = require('nodemailer');
require('dotenv').config();

// Function to send confirmation email
const sendConfirmationEmail = async (email, firstname) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail', // or another email service
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Samyak2024 Registration Successful',
        text: `Hello ${firstname},\n\nThank you for registering in Samyak Event! We're excited to have you on board.\n\nBest regards,\nYour Team`,
    };

    await transporter.sendMail(mailOptions);
};

module.exports = { sendConfirmationEmail };
