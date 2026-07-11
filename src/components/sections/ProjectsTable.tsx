import Image from "next/image";
import Link from "next/link";
import { projects, accentSoft } from "@/lib/data/projects";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const columns = "sm:grid-cols-[3rem_5rem_1fr] lg:grid-cols-[3rem_5rem_1fr_18rem]";

export function ProjectsTable() {
  return (
    <div>
      <div className={`hidden border-b border-border pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted sm:grid ${columns} sm:gap-6`}>
        <span>ID</span>
        <span>Preview</span>
        <span>Project / Scope</span>
        <span className="hidden lg:block">Context Tags</span>
      </div>

      <div className="divide-y divide-border">
        {projects.map((project) => (
          <RevealOnScroll key={project.id}>
            <Link
              href={`/projects/${project.id}`}
              className={`group flex flex-col gap-5 py-8 transition-colors hover:bg-foreground/[0.03] sm:grid sm:items-center sm:gap-6 sm:py-6 ${columns}`}
            >
              <div
                className="relative order-1 flex h-36 w-full items-center justify-center overflow-hidden rounded-xl text-sm font-semibold text-foreground/60 sm:order-none sm:h-16 sm:w-16 sm:rounded-lg sm:text-xs"
                style={{ background: accentSoft[project.accent] }}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="(max-width: 639px) 100vw, 64px"
                    className="object-cover"
                  />
                ) : (
                  project.id
                )}
              </div>

              <span className="order-2 font-mono text-sm text-muted sm:order-none">{project.id}</span>

              <div className="order-3 sm:order-none">
                <h3 className="text-lg font-semibold transition-colors group-hover:text-foreground/70">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-foreground/70">
                  {project.role} &mdash; {project.description}
                </p>
              </div>

              <div className="order-4 flex flex-wrap gap-2 sm:order-none lg:justify-end">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-[0.1em] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
