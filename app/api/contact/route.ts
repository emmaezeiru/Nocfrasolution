import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json()

    // Create a transporter using environment variables (placeholder setup)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const mailOptions = {
      from: process.env.MAIL_FROM || 'no-reply@nocfra.example.com',
      to: process.env.MAIL_TO || 'contact@nocfra.example.com',
      subject: `New message from Nocfra site – ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
    }

    if (process.env.SMTP_HOST) {
      await transporter.sendMail(mailOptions)
    } else {
      console.log('MAIL (dev log):', mailOptions)
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (err) {
    return new Response(JSON.stringify({ ok: false }), { status: 500 })
  }
}

