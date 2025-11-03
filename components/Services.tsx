function ServiceCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="card h-full border-l-4 border-nocfra-primary">
      <h3 className="font-heading text-xl text-nocfra-dark">{title}</h3>
      <ul className="mt-4 space-y-2 text-zinc-700">
        {items.map((item) => (
          <li key={item} className="leading-relaxed">{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="section bg-white">
      <div className="container-responsive">
        <h2 className="section-heading">Our Services</h2>
        <div className="mt-2 h-1 w-24 bg-nocfra-primary" />
        <p className="mt-4 max-w-3xl text-lg text-zinc-700">
          Our uniquely tailored services help our clients optimize their businesses, exceed their goals, and strengthen their project management capacity.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="Consulting Services"
            items={[
              'Project Implementation',
              'PMO setup, operation & enhancement',
              'Project Management Methodology Implementation',
              'Review & Recovery of troubled projects',
            ]}
          />
          <ServiceCard
            title="Training Services"
            items={[
              'PMI Project Management Professional (PMP) Training',
              'Practical Project Management Training',
              'Project Management Fundamentals for Professionals',
              'Software Testing Training',
            ]}
          />
          <ServiceCard
            title="Resource Outsourcing"
            items={[
              'Project Managers',
              'Project Coordinators',
              'Project Administrators',
              'Business Analysts',
              'Software Testers',
            ]}
          />
          <ServiceCard
            title="Coaching & Mentoring Services"
            items={[
              'Tailored coaching for project leaders',
              'PMO capability uplift and mentoring',
            ]}
          />
          <ServiceCard
            title="Book Editing & Proofreading"
            items={[
              'Editing & proofreading of motivational, self-help, novels, professional, and Christian literature.',
              'Ghost-writing services.',
            ]}
          />
        </div>
      </div>
    </section>
  )
}

