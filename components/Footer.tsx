import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="container-responsive flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
        <div className="flex items-center gap-3">
          <Image src="/nocfra-logo.jpg" alt="Nocfra Solutions" width={36} height={36} />
          <div>
            <p className="font-heading text-lg text-nocfra-dark">Nocfra Solutions Limited</p>
            <p className="text-sm text-zinc-600">Right Intervention, Boundless Results</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-zinc-700">Follow us:</span>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="rounded-full p-2 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-nocfra-primary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M22 12.07C22 6.49 17.52 2 11.93 2 6.35 2 1.87 6.48 1.87 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.41V9.84c0-2.38 1.42-3.7 3.6-3.7 1.04 0 2.13.18 2.13.18v2.34h-1.2c-1.18 0-1.55.73-1.55 1.48v1.78h2.64l-.42 2.9h-2.22V22c4.78-.8 8.44-4.94 8.44-9.93Z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full p-2 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-nocfra-primary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18.34H5.67v-7.4h2.67Zm-1.33-8.45a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1ZM18.34 18.34h-2.66v-3.6c0-.86-.02-1.97-1.2-1.97-1.2 0-1.38.93-1.38 1.9v3.67h-2.66v-7.4h2.55v1h.04c.35-.66 1.2-1.36 2.48-1.36 2.65 0 3.14 1.74 3.14 4Z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="rounded-full p-2 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-nocfra-primary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm9.5 1.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 8.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5Zm0 2a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 12 10.5Z" />
            </svg>
          </a>
        </div>
        <p className="text-sm text-zinc-600">© {new Date().getFullYear()} Nocfra Solutions. All rights reserved.</p>
      </div>
    </footer>
  )
}

