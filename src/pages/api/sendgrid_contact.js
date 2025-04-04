// src/pages/api/sendgrid_contact.js

const sgMail = require('@sendgrid/mail');

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Alle Felder sind notwendig' });
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);



    const msg = {
        to: 'dm@spyglassventures.ch', // Replace with your recipient's email
        from: 'dm+DocDialog@spyglassventures.ch', // Replace with your verified sender email
        subject: `Neue Nachricht von ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nNachricht: ${message}`,
        html: `
      <strong>Name:</strong> ${name} <br>
      <strong>Email:</strong> ${email} <br>
      <strong>Nachricht:</strong> <p>${message}</p>
    `,
    };

    try {
        await sgMail.send(msg);
        return res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error("SendGrid error:", error.response?.body?.errors || error.message);
        return res.status(500).json({ message: 'Failed to send email. Please try again later.' });
    }
}
