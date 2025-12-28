import Image from "next/image";
import Link from "next/link";

function ServiceCardpage({
  title,
  items,
  icon,
  href,
}: {
  title: string;
  items: string[];
  icon?: any;
  href?: string;
}) {
  const cardContent = (
    <div className="card h-full border-l-4 border-nocfra-primary flex flex-col items-center md:items-start cursor-pointer transition-all hover:shadow-lg">
      {icon && (
        <Image
          src={icon}
          alt={`${title.split(" ")[0].toLowerCase()} icon`}
          width={60}
          height={60}
          className="self-center"
        ></Image>
      )}
      <h3 className="font-heading text-2xl font-bold text-nocfra-primary">
        {title}
      </h3>
      <ul className="mt-4 space-y-2 text-zinc-700">
        {items.map((item) => (
          <li key={item} className="leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}

export default function ServiceCard() {
  return (
    <section id="services" className="section bg-white">
      <div className="container-responsive">
        <h2 className="section-heading">Our Services</h2>
        <div className="mt-2 h-1 w-24 bg-nocfra-primary" />
        <p className="mt-4 max-w-3xl text-lg text-zinc-700">
          Our uniquely tailored services have been designed to help our clients
          optimise their businesses, not only meeting but also exceeding their
          goals and targets. Our service offerings encompass a range of
          services, including the below:
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <ServiceCardpage
            title="Consulting Services"
            items={[
              "Project Implementation",
              "PMO setup, operation & enhancement",
              "Project Management Methodology Implementation",
              "Review & Recovery of troubled projects",
            ]}
            icon="/icons/consulting.svg"
            href="/services/consulting"
          />
          <ServiceCardpage
            title="Training Services"
            items={[
              "PMI Project Management Professional (PMP) Training",
              "Practical Project Management Training",
              "Project Management Fundamentals for Professionals",
              "Software Testing Training",
            ]}
            icon="/icons/training.svg"
            href="/services/training"
          />
          <ServiceCardpage
            title="Resource Outsourcing"
            items={[
              "Project Managers",
              "Project Coordinators",
              "Project Administrators",
              "Business Analysts",
              "Software Testers",
            ]}
            icon="/icons/outsourcing.svg"
            href="/services/outsourcing"
          />
          <ServiceCardpage
            title="Book Editing & Proof‑reading"
            items={[
              "Editing & proofreading across genres",
              "Ghost‑writing services",
            ]}
            icon="/icons/proofreading.svg"
            href="/services/book-editing"
          />
          <ServiceCardpage
            title="Coaching & Mentoring"
            items={[
              "Project management coaching and mentoring for our trained delegates and anyone ready to grow their capability.",
            ]}
            href="/services/coaching-mentoring"
          />
        </div>

        

        
      </div>
    </section>
  );
}
