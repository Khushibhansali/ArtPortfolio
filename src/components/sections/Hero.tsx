import { profile } from "@/lib/data/profile";

export function Hero() {
  const [first, last] = profile.name.split(" ");

  return (
    <section className="relative overflow-hidden pb-16 pt-10 sm:pb-24">
      {/* Animated gradient blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute left-[-10%] top-[-15%] h-[60vw] w-[60vw] rounded-full opacity-70 blur-[90px]"
          style={{
            background: "var(--blob-green)",
            animation: "blob-drift-1 24s ease-in-out infinite",
          }}
        />
        <div
          className="absolute left-[20%] top-[-25%] h-[50vw] w-[50vw] rounded-full opacity-60 blur-[100px]"
          style={{
            background: "var(--blob-yellow)",
            animation: "blob-drift-2 28s ease-in-out infinite",
          }}
        />
        <div
          className="absolute left-[5%] top-[15%] h-[45vw] w-[45vw] rounded-full opacity-50 blur-[100px]"
          style={{
            background: "var(--blob-blue)",
            animation: "blob-drift-3 32s ease-in-out infinite",
          }}
        />
        <div
          className="absolute left-[35%] top-[5%] h-[35vw] w-[35vw] rounded-full opacity-50 blur-[90px]"
          style={{
            background: "var(--blob-orange)",
            animation: "blob-drift-4 26s ease-in-out infinite",
          }}
        />
      </div>

      <div className="px-6 sm:px-10">
        <h1 className="select-none font-sans text-[16vw] font-black uppercase leading-[0.9] tracking-tight sm:text-[clamp(4rem,13vw,12rem)]">
          {first} {last}
        </h1>
      </div>
    </section>
  );
}
