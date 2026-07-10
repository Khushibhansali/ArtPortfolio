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
    <header className="sticky top-0 z-30 border-b border-border bg-background/90 py-4 backdrop-blur-md">
      <Container className="flex flex-wrap items-center justify-between gap-6">
        <Link href="/" className="group">
        <p className="text-[12vw] font-black uppercase leading-none sm:text-[clamp(2rem,5vw,2rem)]">
            {profile.name}
          </p>
        </Link>
        <nav className="flex items-center gap-1 rounded-full border border-border p-1 text-xs font-medium uppercase tracking-[0.15em]">
          {navLinks.map((link) => {
            const isActive = link.label === "Projects" && pathname.startsWith("/projects");
            const classes = cn(
              "rounded-full px-4 py-2 transition-colors hover:bg-foreground/5",
              isActive ? "bg-foreground text-background hover:bg-foreground" : "text-foreground/80",
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
