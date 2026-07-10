import Image from "next/image";
import Link from "next/link";
import { projects, accentSoft } from "@/lib/data/projects";

const columns = "grid-cols-1 sm:grid-cols-[3rem_5rem_1fr] lg:grid-cols-[3rem_5rem_1fr_18rem]";

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
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className={`group grid items-start gap-4 py-6 transition-colors hover:bg-foreground/[0.03] sm:items-center sm:gap-6 ${columns}`}
          >
            <span className="font-mono text-sm text-muted">{project.id}</span>

            <div
              className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg text-xs font-semibold text-foreground/60"
              style={{ background: accentSoft[project.accent] }}
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              ) : (
                project.id
              )}
            </div>

            <div>
              <h3 className="text-lg font-semibold transition-colors group-hover:text-foreground/70">
                {project.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-foreground/70">
                {project.role} &mdash; {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 lg:justify-end">
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
        ))}
      </div>
    </div>
  );
}
