import { skillCategories } from "@/lib/data/skills";

export function CoreSkills() {
  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
        Core Skills
      </h2>

      <div className="flex flex-col gap-8">
        {skillCategories.map((category) => (
          <div key={category.label}>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-muted">
              {category.label}
            </h3>
            <p className="text-sm leading-relaxed text-foreground/80 sm:text-base">
              {category.items.join(" • ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
