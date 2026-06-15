"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { profile } from "@/lib/data/profile";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: profile.cvHref, label: "CV ↓", external: true },
  { href: `mailto:${profile.email}`, label: "Contact", external: true },
  { href: "/#projects", label: "Projects", external: false },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="relative z-20 pt-8">
      <Container className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/70">
          {profile.tagline}
        </p>
        <nav className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.15em]">
          {navLinks.map((link) => {
            const isActive = link.label === "Projects" && pathname.startsWith("/projects");
            const classes = cn(
              "rounded-full border border-border px-4 py-2 transition-colors hover:border-foreground/40 hover:bg-foreground/5",
              isActive && "border-foreground/40 bg-foreground/5",
            );
            return link.external ? (
              <a key={link.label} href={link.href} className={classes}>
                {link.label}
              </a>
            ) : (
              <Link key={link.label} href={link.href} className={classes}>
                {link.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
