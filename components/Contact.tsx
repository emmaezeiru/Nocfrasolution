"use client"
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('Sending...')
    const formData = new FormData(event.currentTarget)
    const payload = Object.fromEntries(formData.entries())
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed to send message')
      setStatus('Message sent. We will reach out soon!')
      event.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="section bg-orange-50/40">
      <div className="container-responsive">
        <h2 className="section-heading">Contact Us</h2>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div className="card">
            <p className="text-zinc-700">
              Address: 5, Olope Street, Divine Estate, Ago Palace Way, Okota.
            </p>
            <p className="mt-2 text-zinc-700">Contact Numbers: +2348032001111, +2347078089668</p>
            <p className="mt-2 text-zinc-700">Email: Innocent.Ezeiru@gmail.com</p>
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

