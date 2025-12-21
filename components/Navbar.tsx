"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="container-responsive flex h-20 items-center justify-between md:h-24">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/nocfra-logo.jpg"
            alt="Nocfra Solutions"
            width={56}
            height={56}
          />
          <span className="font-heading text-2xl font-bold text-nocfra-dark md:text-3xl">
            Nocfra Solutions
          </span>
        </Link>

        <nav className="relative hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-base font-semibold text-zinc-700 transition-colors hover:text-nocfra-primary"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-base font-semibold text-zinc-700 transition-colors hover:text-nocfra-primary"
          >
            About
          </Link>
          <div className="group relative">
            <Link
              href="/services"
              className="text-base font-semibold text-zinc-700 transition-colors hover:text-nocfra-primary"
            >
              Services ▾
            </Link>
            <div className="invisible absolute left-0 top-full z-50 mt-2 w-64 rounded-lg border border-black/5 bg-white p-2 opacity-0 shadow-md transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <a
                className="block rounded-md px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50"
                href="/#consulting"
              >
                Consulting Services
              </a>
              <a
                className="block rounded-md px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50"
                href="/#training"
              >
                Training Services
              </a>
              <a
                className="block rounded-md px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50"
                href="/#outsourcing"
              >
                Resource Outsourcing
              </a>
              <a
                className="block rounded-md px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50"
                href="/#book-editing"
              >
                Book Editing & Proof‑reading
              </a>
              <a
                className="block rounded-md px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50"
                href="/#coaching-mentoring"
              >
                Coaching & Mentoring
              </a>
            </div>
          </div>
          <Link
            href="/contact"
            className="text-base font-semibold text-zinc-700 transition-colors hover:text-nocfra-primary"
          >
            Contact
          </Link>
          <Link href="/contact" className="btn-primary ml-2">
            Get in Touch
          </Link>
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
          <div className="container-responsive grid gap-2 pb-6">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-base font-semibold text-zinc-700 hover:bg-zinc-50"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-base font-semibold text-zinc-700 hover:bg-zinc-50"
            >
              About
            </Link>
            <details className="rounded-md px-3 py-2">
              <summary className="cursor-pointer text-base font-bold text-zinc-700">
                Services
              </summary>
              <div className="mt-2 grid gap-1">
                <Link
                  className="rounded-md px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50"
                  href="/services"
                  onClick={() => setOpen(false)}
                >
                  All Services
                </Link>
                <a
                  className="rounded-md px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50"
                  href="/#consulting"
                  onClick={() => setOpen(false)}
                >
                  Consulting Services
                </a>
                <a
                  className="rounded-md px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50"
                  href="/#training"
                  onClick={() => setOpen(false)}
                >
                  Training Services
                </a>
                <a
                  className="rounded-md px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50"
                  href="/#outsourcing"
                  onClick={() => setOpen(false)}
                >
                  Resource Outsourcing
                </a>
                <a
                  className="rounded-md px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50"
                  href="/#book-editing"
                  onClick={() => setOpen(false)}
                >
                  Book Editing & Proof‑reading
                </a>
                <a
                  className="rounded-md px-3 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50"
                  href="/#coaching-mentoring"
                  onClick={() => setOpen(false)}
                >
                  Coaching & Mentoring
                </a>
              </div>
            </details>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-base font-semibold text-zinc-700 hover:bg-zinc-50"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-1"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
