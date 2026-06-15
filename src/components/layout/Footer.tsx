import { Container } from "@/components/ui/Container";
import { profile } from "@/lib/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col items-center justify-between gap-2 text-xs uppercase tracking-[0.15em] text-muted sm:flex-row">
        <p>&copy; {year} {profile.name}</p>
        <p>{profile.tagline}</p>
      </Container>
    </footer>
  );
}
