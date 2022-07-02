import nodemailer from 'nodemailer'

export default async function sendMail(req, res) {
    const mail = {
        from: req.body.email,
        to: process.env.NEXT_PUBLIC_GMAIL_TARGET,
        subject: `Rent-my-Kangoo from ${req.body.name}`,
        text: `New message from: ${req.body.name} (${req.body.email}) | ${req.body.message} | --- Sent using the website's contact form`,
        html: `<p>New message from: <strong>${req.body.name}</strong> (${req.body.email})</p><div>${req.body.message}</div><br/><p>--- Sent using the website's contact form</p>`,
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NEXT_PUBLIC_GMAIL_USERNAME,
            pass: process.env.NEXT_PUBLIC_GMAIL_PASSWORD,
        },
    })

    return transporter
        .sendMail({ ...mail, from: `Kévin Renier <${process.env.NEXT_PUBLIC_GMAIL_USERNAME}>` })
        .then(_ => res.status(201).end())
        .catch(e => {
            console.error(e)
            res.status(500).end()
        })
}
