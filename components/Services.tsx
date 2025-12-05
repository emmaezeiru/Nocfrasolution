import Image from "next/image";

function ServiceCard({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon?: any;
}) {
  return (
    <div className="card h-full border-l-4 border-nocfra-primary flex flex-col items-center md:items-start">
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
}

export default function Services() {
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
          <ServiceCard
            title="Consulting Services"
            items={[
              "Project Implementation",
              "PMO setup, operation & enhancement",
              "Project Management Methodology Implementation",
              "Review & Recovery of troubled projects",
            ]}
            icon="/icons/consulting.svg"
          />
          <ServiceCard
            title="Training Services"
            items={[
              "PMI Project Management Professional (PMP) Training",
              "Practical Project Management Training",
              "Project Management Fundamentals for Professionals",
              "Software Testing Training",
            ]}
            icon="/icons/training.svg"
          />
          <ServiceCard
            title="Resource Outsourcing"
            items={[
              "Project Managers",
              "Project Coordinators",
              "Project Administrators",
              "Business Analysts",
              "Software Testers",
            ]}
            icon="/icons/outsourcing.svg"
          />
          <ServiceCard
            title="Book Editing & Proof‑reading"
            items={[
              "Editing & proofreading across genres",
              "Ghost‑writing services",
            ]}
            icon="/icons/proofreading.svg"
          />
          <ServiceCard
            title="Coaching & Mentoring"
            items={[
              "Project management coaching and mentoring for our trained delegates and anyone ready to grow their capability.",
            ]}
          />
        </div>

        {/* Detailed subsections kept on the home page */}
        <section id="consulting" className="section">
          <h3 className="font-heading text-3xl font-bold text-nocfra-dark">
            Consulting Services
          </h3>
          <div className="mt-2 h-1 w-16 bg-nocfra-primary" />
          <div className="mt-6 space-y-6 text-zinc-700">
            <div className="card">
              <h4 className="font-heading text-xl font-bold text-nocfra-dark">
                Project Implementation
              </h4>
              <p className="mt-2">
                We work with clients on short, medium, and long contracts as
                Project managers or Project consultants, to perform Project
                management functions from project Initiation to close out.
              </p>
            </div>
            <div className="card">
              <h4 className="font-heading text-xl font-bold text-nocfra-dark">
                Project Management Office setup, Operation & Enhancement
              </h4>
              <p className="mt-2">
                We help clients who require the setup of a new Project
                Management Office (PMO) by creating a PMO and defining and
                documenting processes and procedures to guide efficient project
                delivery. We also help our clients operate their PMO or optimize
                and enhance an existing PMO to meet strategic objectives and
                business expectations.
              </p>
            </div>
            <div className="card">
              <h4 className="font-heading text-xl font-bold text-nocfra-dark">
                Project Management Methodology Implementation
              </h4>
              <p className="mt-2">
                We assist clients in evaluating the current state of their
                project management processes and application across the
                organization and then introduce principles, processes, and
                procedures to improve efficiency, enhance delivery quality,
                increase accountability, and support informed decision making.
              </p>
            </div>
            <div className="card">
              <h4 className="font-heading text-xl font-bold text-nocfra-dark">
                Review & Recovery of troubled projects
              </h4>
              <p className="mt-2">
                Organizations sometimes go through the pains of dealing with
                troubled projects that gulp a lot of funds and often get
                cancelled in the end. With our experience and expertise in
                dealing with various kinds of project issues and risks, we offer
                project review and recovery services, bringing back failing and
                troubled projects to normalcy at very convenient costs to our
                clients.
              </p>
            </div>
          </div>
        </section>

        <section id="training" className="section">
          <h3 className="font-heading text-3xl font-bold text-nocfra-dark">
            Training Services
          </h3>
          <div className="mt-2 h-1 w-16 bg-nocfra-primary" />
          <p className="mt-6 text-lg text-zinc-700">
            At Nocfra Solutions, we provide standard and bespoke Project
            Management and allied training to both corporate and individual
            clients. Below is a list of the training we offer.
          </p>
          <div className="mt-6 space-y-6">
            <div className="card">
              <h4 className="font-heading text-xl font-bold text-nocfra-dark">
                PMI Project Management Professional (PMP) training
              </h4>
              <p className="mt-2 text-zinc-700">
                The PMP® certification is the gold standard of project
                management certifications. It validates your competence to
                perform in the role of a Project manager, leading and directing
                projects and teams.
              </p>
            </div>
            <div className="card">
              <h4 className="font-heading text-xl font-bold text-nocfra-dark">
                Practical Project Management training (for the IT, Banking,
                Telecoms & Allied industries)
              </h4>
              <p className="mt-2 text-zinc-700">
                This highly practical training will fully prepare and equip you
                to take on a Project Manager role or function effectively in a
                project team.
              </p>
            </div>
            <div className="card">
              <h4 className="font-heading text-xl font-bold text-nocfra-dark">
                Project Management Fundamentals for Professionals
              </h4>
              <p className="mt-2 text-zinc-700">
                An introductory course where delegates are provided with a
                comprehensive overview of the project management process – how
                to initiate, plan, and execute projects that meet desired
                objectives and satisfy stakeholders.
              </p>
            </div>
            <div className="card">
              <h4 className="font-heading text-xl font-bold text-nocfra-dark">
                Software testing training
              </h4>
              <p className="mt-2 text-zinc-700">
                Get trained by our highly exposed and experienced software
                testing trainers and be able to quickly and effectively function
                as a software tester. Software testers are now highly
                sought‑after across the globe for on‑site and remote jobs.
              </p>
            </div>
          </div>
        </section>

        <section id="outsourcing" className="section">
          <h3 className="font-heading text-3xl font-bold text-nocfra-dark">
            Resource Outsourcing
          </h3>
          <div className="mt-2 h-1 w-16 bg-nocfra-primary" />
          <p className="mt-6 text-lg text-zinc-700">
            We provide trained and experienced project personnel of the desired
            skills level to organizations for a period ranging from 1 month to
            12 months (renewable). We currently provide below project resource
            types at different skill levels
          </p>
          <ul className="mt-6 grid list-disc gap-2 pl-6 text-zinc-700 md:max-w-2xl">
            <li>Project Managers</li>
            <li>Project Coordinators</li>
            <li>Project Administrators</li>
            <li>Business Analysts</li>
            <li>Software Testers</li>
          </ul>
        </section>

        <section id="book-editing" className="section">
          <h3 className="font-heading text-3xl font-bold text-nocfra-dark">
            Book Editing & Proof‑reading
          </h3>
          <div className="mt-2 h-1 w-16 bg-nocfra-primary" />
          <p className="mt-6 text-lg text-zinc-700">
            Below are a few of the professional Book Editing, Proofreading
            services, and related services that we offer.
          </p>
          <ul className="mt-6 grid list-disc gap-2 pl-6 text-zinc-700 md:max-w-2xl">
            <li>Book Editing & Proofreading of books of different genres.</li>
            <li>Motivational</li>
            <li>Self‑help</li>
            <li>Novels</li>
            <li>Professional books</li>
            <li>Christian literature</li>
            <li>Ghost‑writing services</li>
          </ul>
        </section>

        <section id="coaching-mentoring" className="section">
          <h3 className="font-heading text-3xl font-bold text-nocfra-dark">
            Coaching & Mentoring Services
          </h3>
          <div className="mt-2 h-1 w-16 bg-nocfra-primary" />
          <p className="mt-6 text-lg text-zinc-700">
            We offer project management coaching & mentoring services to our
            trained delegates and others who are ready and interested in these
            services.
          </p>
        </section>
      </div>
    </section>
  );
}
