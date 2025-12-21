import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="section relative overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 h-1 bg-nocfra-primary" />
      <div className="container-responsive">
        <div className="grid items-start gap-10 w-full md:grid-cols-2 md:bg-[url('/nocfra-banner.jpg')] bg-no-repeat bg-right bg-contain lg:bg-size-[50%_auto]">
          <div>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500 md:text-base">
        Project Management Consulting • Training • Outsourcing
      </p>
      <h1 className="mt-3 font-heading text-4xl font-bold leading-tight text-nocfra-dark md:text-5xl lg:text-6xl">
        Nocfra Solutions
      </h1>
      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-zinc-600 md:text-base">
        Right Intervention, <span className="text-nocfra-primary">Boundless Results</span>
      </p>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-700">
              We help organizations in Nigeria and across Africa deliver change
              reliably—through expert project delivery, mature PMO capabilities
              and practical training.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#contact" className="btn-primary">
                Get in Touch
              </a>
              <a
                href="/#services"
                className="inline-flex items-center rounded-md border border-nocfra-primary px-6 py-3 text-nocfra-primary transition-colors hover:bg-nocfra-primary hover:text-white"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="card">
            <p className="font-bold text-nocfra-dark">Vision</p>
            <p className="mt-2 text-zinc-700">
            To be the preferred choice in the provision of Project management Consulting, Training, and Project management services in Nigeria and the African continent.
            </p>
          </div>
          <div className="card">
            <p className="font-bold text-nocfra-dark">Mission</p>
            <p className="mt-2 text-zinc-700">
            To meet our clients’ unique requests with the best quality services and solutions, and to ensure optimized human capacity development that will help to build outstanding delivery capabilities in organizations both in Nigeria and on the African continent.
            </p>
          </div>
          <div className="card">
            <p className="font-bold text-nocfra-dark">Core Values</p>
            <p className="mt-2 text-zinc-700">
            We are committed to conscious, continuous improvement, honesty, integrity, and forthrightness in a collaborative effort to continue to deliver quality services to our customers.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:mt-2">
          <div className="card border-l-4 border-nocfra-primary p-6">
            <h3 className="font-heading text-2xl font-bold text-nocfra-dark">
              For Companies
            </h3>
            <p className="mt-2 text-zinc-700">
              Staffing gaps or key initiatives to deliver? We provide
              hand‑picked, certified experts for project delivery, PMO uplift
              and recovery.
            </p>
            <a
              href="/services#consulting"
              className="mt-4 inline-block text-sm font-semibold text-nocfra-primary hover:underline"
            >
              Find expertise →
            </a>
          </div>
          <div className="card border-l-4 border-nocfra-primary/60 p-6">
            <h3 className="font-heading text-2xl font-bold text-nocfra-dark">
              For Professionals
            </h3>
            <p className="mt-2 text-zinc-700">
              Grow your capabilities with practical training—PMP exam prep,
              fundamentals, and software testing with real‑world scenarios.
            </p>
            <a
              href="/services#training"
              className="mt-4 inline-block text-sm font-semibold text-nocfra-primary hover:underline"
            >
              Explore trainings →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
