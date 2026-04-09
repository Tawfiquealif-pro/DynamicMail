require('dotenv').config();
const templates = require('./template')
console.log("Full Env Object:", process.env.PORT);
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Allows your frontend to talk to this API
app.use(express.json()); // Parses incoming JSON data

// --- Simple Authentication Middleware ---
const authenticateAPI = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey && apiKey === process.env.MY_SECRET_API_KEY) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized: Invalid API Key" });
  }
};

// --- Email Sending Logic ---
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  family: 4,
  tls: {
    // This helps if the hosting network has strict security rules
    rejectUnauthorized: false,
    minVersion: 'TLSv1.2'
  },
  connectionTimeout: 15000, // Wait 10 seconds before giving up
  greetingTimeout: 15000
}
);

// --- API Endpoint ---
app.post('/api/register', authenticateAPI, async (req, res) => {
  const { name, email, id, roll, phone, trnxID, paidAmount, paymentMethod } = req.body;

  const mailOptions = {
    from: `"Management Team" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Registration Confirmation',
    html: templates.webflowStyle({ name, id, trnxID, paidAmount, paymentMethod, phone, roll, email })
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Registration successful and email sent!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));