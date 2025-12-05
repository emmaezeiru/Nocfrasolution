export default function ServicesOverviewPage() {
  return (
    <main className="section">
      <div className="container-responsive">
        <h1 className="section-heading font-bold">Our Services</h1>
        <div className="mt-2 h-1 w-24 bg-nocfra-primary" />
        <p className="mt-6 max-w-3xl text-lg text-zinc-700">
          Our uniquely tailored services have been designed to help our clients optimise their
          businesses, not only meeting but also exceeding their goals and targets. Our service
          offerings encompass a range of services, including the below:
        </p>
        <ul className="mt-6 grid list-disc gap-2 pl-6 text-zinc-700 md:max-w-2xl">
          <li>Consulting</li>
          <li>Project Management Training</li>
          <li>Resource Outsourcing</li>
          <li>Coaching & Mentoring</li>
          <li>Book Editing & Proof‑reading</li>
        </ul>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <a href="/services/consulting" className="card border-l-4 border-nocfra-primary">
            <h2 className="font-heading text-2xl font-bold text-nocfra-dark">Consulting Services</h2>
            <p className="mt-2 text-zinc-700">Implementation, PMO setup & enhancement, methodology implementation, review & recovery.</p>
          </a>
          <a href="/services/training" className="card border-l-4 border-nocfra-primary">
            <h2 className="font-heading text-2xl font-bold text-nocfra-dark">Training Services</h2>
            <p className="mt-2 text-zinc-700">PMP, practical PM training, fundamentals, and software testing.</p>
          </a>
          <a href="/services/outsourcing" className="card border-l-4 border-nocfra-primary">
            <h2 className="font-heading text-2xl font-bold text-nocfra-dark">Resource Outsourcing</h2>
            <p className="mt-2 text-zinc-700">Project personnel across PM, coordination, administration, BA, and testing.</p>
          </a>
          <a href="/services/book-editing" className="card border-l-4 border-nocfra-primary">
            <h2 className="font-heading text-2xl font-bold text-nocfra-dark">Book Editing & Proof‑reading</h2>
            <p className="mt-2 text-zinc-700">Editing, proofreading, and ghost‑writing across genres.</p>
          </a>
          <a href="/services/coaching-mentoring" className="card border-l-4 border-nocfra-primary">
            <h2 className="font-heading text-2xl font-bold text-nocfra-dark">Coaching & Mentoring</h2>
            <p className="mt-2 text-zinc-700">Targeted support for project leaders and teams to uplift capability.</p>
          </a>
        </div>
      </div>
    </main>
  )
}

