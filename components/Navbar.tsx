"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="container-responsive flex h-16 items-center justify-between">
        <Link href="#home" className="flex items-center gap-3">
          <Image src="/nocfra-logo.jpg" alt="Nocfra Solutions" width={40} height={40} />
          <span className="font-heading text-xl text-nocfra-dark">Nocfra Solutions</span>
        </Link>

        <nav className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-zinc-700 transition-colors hover:text-nocfra-primary">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary ml-2">Get in Touch</a>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="i-heroicons-bars-3 text-2xl">☰</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden">
          <div className="container-responsive grid gap-4 pb-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary">Get in Touch</a>
          </div>
        </div>
      )}
    </header>
  )
}

