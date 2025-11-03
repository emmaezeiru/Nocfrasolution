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
        <p className="text-sm text-zinc-600">© {new Date().getFullYear()} Nocfra Solutions. All rights reserved.</p>
      </div>
    </footer>
  )
}

