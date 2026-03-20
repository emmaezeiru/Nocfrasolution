"use client"
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null)

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const message = formData.get('message') as string

    const subject = encodeURIComponent(`Contact Form Submission from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}`
    )
    
    const mailtoLink = `mailto:info@nocfrasolutions.com?subject=${subject}&body=${body}`
    
    window.location.href = mailtoLink
    setStatus('Opening your email client...')
    event.currentTarget.reset()
  }

  return (
    <section id="contact" className="section bg-orange-50/40">
      <div className="container-responsive">
        <h2 className="section-heading">Contact Us</h2>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div className="card">
            <p className="mt-2 text-zinc-700">Contact Numbers: +2348032005474, +2347078089668</p>
            <p className="mt-2 text-zinc-700">Email: info@nocfrasolutions.com</p>
            <p className="mt-4 text-sm text-zinc-600">We typically respond within one business day.</p>
          </div>

          <form onSubmit={onSubmit} className="card">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-zinc-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 focus:border-nocfra-primary focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 focus:border-nocfra-primary focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700">Phone Number</label>
                <input name="phone" className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 focus:border-nocfra-primary focus:outline-none" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-zinc-700">Message</label>
                <textarea name="message" required className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 focus:border-nocfra-primary focus:outline-none" rows={4} defaultValue="I would like to know if you offer practical project management training." />
              </div>
            </div>
            <button className="btn-primary mt-4" type="submit">Send Message</button>
            {status && <p className="mt-3 text-sm text-zinc-700">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

