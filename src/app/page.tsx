import { Container } from "@/components/ui/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { CoreSkills } from "@/components/sections/CoreSkills";
import { ProjectsTable } from "@/components/sections/ProjectsTable";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="border-t border-border">
          <Container className="grid grid-cols-1 gap-16 py-16 lg:grid-cols-[1.6fr_1fr] lg:gap-24 lg:py-24">
            <About />
            <CoreSkills />
          </Container>
        </section>
        <section id="projects" className="border-t border-border">
          <Container className="py-16 sm:py-24">
            <h2 className="mb-12 text-[12vw] font-black uppercase leading-none tracking-tight sm:text-[clamp(3rem,8vw,7rem)]">
              Projects
            </h2>
            <ProjectsTable />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
