export type Accent = "green" | "yellow" | "blue" | "orange";

export type TextSegment = { text: string; bold?: boolean };

export type CaseStudySection = {
  label: string;
  paragraphs: TextSegment[][];
};

export type Project = {
  id: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  accent: Accent;
  sections: CaseStudySection[];
};

// Animated hero blobs (no text inside) reference these CSS custom properties directly.
export const accentCssVar: Record<Accent, string> = {
  green: "var(--blob-green)",
  yellow: "var(--blob-yellow)",
  blue: "var(--blob-blue)",
  orange: "var(--blob-orange)",
};

// Swatches that contain text use a translucent rgba so the content stays readable.
export const accentSoft: Record<Accent, string> = {
  green: "rgba(139, 212, 80, 0.3)",
  yellow: "rgba(255, 209, 102, 0.3)",
  blue: "rgba(110, 198, 255, 0.3)",
  orange: "rgba(255, 179, 122, 0.3)",
};

function placeholderSections(num: string): CaseStudySection[] {
  return [
    {
      label: "The Problem",
      paragraphs: [
        [
          { text: `Placeholder for project ${num} — describe the problem space, who it affected, and why it mattered. ` },
          { text: "Call out the key pain point here.", bold: true },
        ],
        [
          { text: "Add any supporting context, research, or data that motivated the work." },
        ],
      ],
    },
    {
      label: "Approach",
      paragraphs: [
        [
          { text: "Describe your approach and process — " },
          { text: "the key decisions and trade-offs you made.", bold: true },
        ],
      ],
    },
    {
      label: "System Design",
      paragraphs: [
        [
          { text: "Outline the architecture, tools, and workflows behind this project — " },
          { text: "call out the core technical or creative system.", bold: true },
        ],
      ],
    },
    {
      label: "Results / Metrics",
      paragraphs: [
        [
          { text: "Share the outcomes — " },
          { text: "quantify the impact with metrics where possible.", bold: true },
          { text: " Close with what you learned." },
        ],
      ],
    },
  ];
}

// TODO: replace these placeholders with your ~10 real projects.
export const projects: Project[] = Array.from({ length: 10 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  const accents: Accent[] = ["green", "yellow", "blue", "orange"];
  return {
    id: num,
    title: `Project Title ${num}`,
    role: "Role — Scope",
    description:
      "Placeholder description — replace with a short summary of this project's scope, your role, and the outcome.",
    tags: ["#TAG_ONE", "#TAG_TWO"],
    accent: accents[i % accents.length],
    sections: placeholderSections(num),
  };
});
