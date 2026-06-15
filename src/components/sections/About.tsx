import { LinkedInIcon, XIcon, InstagramIcon, MailIcon } from "@/components/icons/SocialIcons";
import { profile, socialLinks } from "@/lib/data/profile";

const iconMap = {
  LinkedIn: LinkedInIcon,
  X: XIcon,
  Instagram: InstagramIcon,
  Email: MailIcon,
};

export function About() {
  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
        About
      </h2>

      <div className="flex flex-col gap-4 text-base leading-relaxed text-foreground/80 sm:text-lg">
        {profile.about.map((para, i) => (
          <p key={i} className={para.bold ? "font-semibold text-foreground" : undefined}>
            {para.text}
          </p>
        ))}
      </div>

      <div className="mt-10 flex items-center gap-5 border-t border-border pt-6">
        {socialLinks.map((link) => {
          const Icon = iconMap[link.label as keyof typeof iconMap];
          return (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              className="text-foreground/70 transition-colors hover:text-foreground"
            >
              <Icon className="h-5 w-5" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
