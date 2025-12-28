import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ServiceCard from "@/components/servicecard";

export default function Page() {
  return (
    <>
      <main>
        <Hero />
        <ServiceCard />
        <Contact />
      </main>
    </>
  );
}
