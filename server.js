require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend'); // Import Resend
const templates = require('./template');

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY); // Initialize with API Key
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.post('/api/register', async (req, res) => {
    const { name, email, id, roll, phone, trnxID, paidAmount, paymentMethod } = req.body;

    try {
        const data = await resend.emails.send({
            // Note: On the free tier, you must send FROM 'onboarding@resend.dev' 
            // until you verify a custom domain.
            from: 'Acme <onboarding@resend.dev>',
            to: [email], // Use the user's email
            subject: 'Registration Confirmation - Next Steps',
            html: templates.webflowStyle({ name, id, roll, trnxID, paidAmount, paymentMethod, phone })
        });

        if (data.error) {
            console.error('Resend Error:', data.error);
            return res.status(400).json({ message: data.error.message });
        }

        res.status(200).json({ message: "Email sent successfully via Resend!" });
    } catch (error) {
        console.error('System Error:', error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));