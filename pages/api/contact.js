const nodemailer = require('nodemailer')

export default async function sendMail(req, res) {
    // Define mail
    const mail = {
        from: req.body.email,
        to: 'kangoo@thekecha.com',
        subject: `Rent-my-Kangoo from ${req.body.name}`,
        text: `New message from: ${req.body.name} (${req.body.email}) | ${req.body.message} | --- Sent using the website's contact form`,
        html: `<p>New message from: <strong>${req.body.name}</strong> (${req.body.email})</p><div>${req.body.message}</div><br/><p>--- Sent using the website's contact form</p>`,
    }
    try {
        // Send mail
        const results = await nodemailer
            .createTransport({
                port: 465,
                host: 'smtp.gmail.com',
                auth: {
                    user: process.env.NEXT_PUBLIC_GMAIL_USERNAME,
                    pass: process.env.NEXT_PUBLIC_GMAIL_PASSWORD,
                },
                secure: true,
                tls: {
                    rejectUnauthorized: false, // Do not fail on invalid certs
                },
            })
            .sendMail(mail)
        console.log(results)
        res.status(201).end()
    } catch (err) {
        console.error(err)
        res.status(500).end()
    }
}
