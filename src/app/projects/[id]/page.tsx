import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { projects, accentCssVar, accentSoft } from "@/lib/data/projects";
import { KoiPondSketch } from "@/components/sketches/KoiPondSketch";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <>
      <Header />
      <main className="relative animate-page-fade-in">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-40 -z-10 h-[40vw] w-[40vw] rounded-full opacity-30 blur-[100px]"
          style={{ background: accentCssVar[project.accent] }}
        />

        <Container className="py-12 sm:py-16">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] transition-colors hover:bg-foreground/5"
          >
            ← Back to Home
          </Link>

          <div className="mt-10 sm:mt-16">
            <p className="font-mono text-sm text-muted">{project.id}</p>
            <h1 className="mt-2 text-[12vw] font-black uppercase leading-[0.95] tracking-tight sm:text-[clamp(2.5rem,7vw,6rem)]">
              {project.title}
            </h1>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {project.role}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-[0.1em] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-background transition-opacity hover:opacity-90"
              >
                View Project ↗
              </a>
            )}
          </div>

          {project.sketch === "koipond" ? (
            <KoiPondSketch />
          ) : project.video ? (
            <video
              key={project.video}
              src={project.video}
              poster={project.image}
              controls
              playsInline
              preload="none"
              className="mt-12 aspect-[16/9] w-full rounded-2xl bg-foreground/5 object-cover sm:mt-20"
            />
          ) : (
            <div
              className="mt-12 flex aspect-[16/9] items-center justify-center rounded-2xl sm:mt-20"
              style={{ background: accentSoft[project.accent] }}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
                Project Image
              </span>
            </div>
          )}

          <div className="mt-4">
            {project.sections.map((section, i) => (
              <RevealOnScroll
                key={section.label}
                className="grid grid-cols-1 gap-6 border-t border-border py-10 sm:grid-cols-[1fr_2.5fr] sm:gap-12 sm:py-16"
              >
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                  {String(i + 1).padStart(2, "0")} / {section.label}
                </h2>
                <div className="flex flex-col gap-6 text-base leading-relaxed text-foreground/80 sm:text-lg">
                  {section.paragraphs.map((paragraph, j) => (
                    <p key={j}>
                      {paragraph.map((segment, k) =>
                        segment.bold ? (
                          <strong key={k} className="font-semibold text-foreground">
                            {segment.text}
                          </strong>
                        ) : (
                          <span key={k}>{segment.text}</span>
                        ),
                      )}
                    </p>
                  ))}
                  {section.video && (
                    <video
                      src={section.video}
                      controls
                      playsInline
                      preload="none"
                      className="aspect-video w-full rounded-2xl bg-foreground/5 object-cover"
                    />
                  )}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
