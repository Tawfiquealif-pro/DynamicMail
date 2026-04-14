require('dotenv').config();
const express = require('express');
const cors = require('cors');
// Import the new BrevoClient
const { BrevoClient } = require('@getbrevo/brevo');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// --- THE NEW SIMPLE INITIALIZATION ---
const client = new BrevoClient({ 
    apiKey: process.env.BREVO_API_KEY
});

console.log("Checking API Key loading...");
if (!process.env.BREVO_API_KEY) {
    console.log("❌ ERROR: BREVO_API_KEY is undefined. Check your .env file!");
} else {
    console.log("✅ Key found! Length:", process.env.BREVO_API_KEY.length);
}

app.post('/api/register', async (req, res) => {
    const { name, email, id, roll, phone, trnxID, paidAmount, paymentMethod } = req.body;
    const templates = require('./templates');

    try {
        // In v5, you access transactional emails through client.transactionalEmails
        const result = await client.transactionalEmails.sendTransacEmail({
            subject: "Registration Confirmation - Next Steps",
            htmlContent: templates.webflowStyle({ name, id, roll, phone, trnxID, paidAmount, paymentMethod }),
            sender: { 
                name: "Management Team", 
                email: "alifnew225@gmail.com" // MUST be verified in Brevo
            },
            to: [{ email: email, name: name }]
        });

        console.log('Email sent successfully:', result);
        res.status(200).json({ message: "Registration successful! Email sent." });
        
    } catch (error) {
        console.error('Brevo Error:', error);
        res.status(500).json({ message: "Failed to send email." });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));