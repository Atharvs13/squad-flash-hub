import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Instagram, MessageCircle, Send, Youtube, X, Play, ChevronLeft, ChevronRight } from "lucide-react";
import classPhoto from "@/assets/class-photo.jpg.asset.json";
import { Reveal } from "@/components/Reveal";
import classBanner from "../assets/class-banner.jpeg";
import classBanner2 from "../assets/class-banner-2.jpg";
import classBanner3 from "../assets/class-banner-3.jpeg";
import classBanner4 from "../assets/class-banner-4.jpeg";
import classBanner5 from "../assets/class-banner-5.jpeg";
import classBanner6 from "../assets/class-banner-6.jpeg";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Our CYBERWALEE | Class Page" },
      {
        name: "description",
        content:
          "Photos, reels, memories and attendance struggles from our CYBERWALEE class — one page for all the chaos.",
      },
      { property: "og:title", content: "Our CYBERWALEE | Class Page" },
      {
        property: "og:description",
        content: "Assignments, memories, reels, chaos, and attendance struggles — all in one place.",
      },
    ],
  }),
  component: Index,
});

// 🔧 Replace these links anytime
const LINKS = {
  instagram: "https://instagram.com/cyberwalee",
};

// 🔧 Swap src with new asset URLs or imports as you upload more photos
const PHOTOS = [
  { id: 0, src: classPhoto.url, caption: "Before viva 😬" },
  { id: 1, src: classBanner2, caption: "After viva 💀" },
  { id: 2, src: classBanner3, caption: "Lab legends 🧪" },
  { id: 3, src: classBanner4, caption: "Proxy attendance squad 🤫" },
  { id: 4, src: classBanner5, caption: "Canteen council meeting ☕" },
  { id: 5, src: classBanner6, caption: "Last bench chronicles 📚" },
  { id: 6, src: classPhoto.url, caption: "Submission night 🌙" },
  { id: 7, src: classPhoto.url, caption: "Fest day energy 🔥" },
  { id: 8, src: classPhoto.url, caption: "Group project ft. 1 person 😭" },
  { id: 9, src: classBanner, caption: "Sunset trip 🏔️" },
];

const REELS = [
  { title: "After Exam is Over", views: "12.4K views", url: "https://www.instagram.com/reel/Db5zthfNB_a/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==&igsi=MzRlODBiNWFlZA==" },
  { title: "Kass Niyogan", views: "8.1K views", url: "https://www.instagram.com/reel/DbwxcdQz6Ah/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==&igsi=MzRlODBiNWFlZA==" },
  { title: "आमच  Department", views: "21.7K views", url: "https://www.instagram.com/reel/DVQ0YisDQ3G/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==&igsi=MzRlODBiNWFlZA==" },
  { title: "Trip dump 2026", views: "5.3K views", url: "https://www.instagram.com/reel/DVVVqX2jWTE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==&igsi=MzRlODBiNWFlZA=="},
];

const QUOTES = [
  { text: "Attendance is temporary, memories are forever.", author: "— every backbencher" },
  { text: "One more assignment won't hurt… right?", author: "— famous last words" },
  { text: "We came for the degree, stayed for the friends.", author: "— the whole squad" },
];

function Index() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => ((i ?? 0) + 1) % PHOTOS.length);
      if (e.key === "ArrowLeft") setLightbox((i) => ((i ?? 0) - 1 + PHOTOS.length) % PHOTOS.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
    <img
  src={classBanner}
  alt="Our college class posing together on the rocks at sunset"
  className="absolute inset-0 h-full w-full object-cover"
/>
        <div className="absolute inset-0 bg-background/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <span className="sticker absolute left-[6%] top-[18%] hidden rotate-[-8deg] rounded-full border border-accent/60 bg-card/70 px-4 py-2 text-sm font-semibold backdrop-blur sm:block">
          75% attendance? 😅
        </span>
        <span
          className="sticker absolute right-[7%] top-[26%] hidden rounded-full border border-primary/60 bg-card/70 px-4 py-2 text-sm font-semibold backdrop-blur sm:block"
          style={{ ["--tilt" as string]: "9deg", animationDelay: "1.2s" }}
        >
          submission tomorrow 🚀
        </span>

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="mb-4 inline-block rounded-full border border-accent/50 bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Est. first year · still surviving
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
              Welcome to Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">CYBERWALEE</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              Assignments, memories, reels, chaos, and attendance struggles — all in one place.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setLightbox(0)}
                className="squad-gradient rounded-full px-7 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:shadow-accent/40"
              >
                📸 View More Photos
              </button>
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full border border-foreground/25 bg-card/60 px-7 py-3 text-sm font-semibold backdrop-blur transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:text-accent"
              >
                Follow Our Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <Reveal>
          <h2 className="text-center text-3xl font-bold sm:text-4xl">About the chaos 🔥</h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-muted-foreground">
            We are a bunch of students trying to survive lectures, practicals, internal exams, and
            group projects while somehow making reels in between.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            { k: "60+", v: "classmates" },
            { k: "∞", v: "group project excuses" },
            { k: "35.1%", v: "average attendance" },
          ].map((s, i) => (
            <Reveal key={s.v} delay={i * 120}>
              <div className="rounded-2xl border border-foreground/10 bg-card p-6 text-center transition-transform duration-200 hover:-translate-y-1 hover:border-accent/50">
                <p className="text-3xl font-extrabold text-accent">{s.k}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl">Photo dump 📸</h2>
          <p className="mt-2 text-muted-foreground">Tap any photo to open the gallery.</p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {PHOTOS.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 90}>
              <button
                onClick={() => setLightbox(i)}
                className="group relative block aspect-square w-full overflow-hidden rounded-2xl border border-foreground/10"
              >
                <img
                  src={p.src}
                  alt={p.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-3 text-left text-xs font-semibold sm:text-sm">
                  {p.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* REELS */}
      <section className="border-y border-foreground/10 bg-card/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-3xl font-bold sm:text-4xl">Latest Reels 🎬</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {REELS.map((r, i) => (
              <Reveal key={r.title} delay={i * 100}>
                <article className="overflow-hidden rounded-3xl border border-foreground/10 bg-card transition-all duration-300 hover:-translate-y-2 hover:border-accent/60">
                  <div className="relative aspect-[9/14] overflow-hidden">
                    <img
                      src={classPhoto.url}
                      alt={r.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-background/35" />
                    <span className="absolute inset-0 grid place-items-center">
                      <Play className="h-12 w-12 fill-foreground/80 text-foreground/80" />
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold">{r.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{r.views}</p>
                    <a
                      href={r.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="squad-gradient mt-4 block rounded-full py-2 text-center text-xs font-semibold text-primary-foreground"
                    >
                      Watch Reel
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIALS */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl">Find the squad 🚀</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { icon: Instagram, label: "Instagram", url: LINKS.instagram },
            ].map(({ icon: Icon, label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 rounded-full border border-foreground/15 bg-card px-5 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4 shrink-0" />
                {label}
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {/* MEMORY WALL */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl">Memory wall 💬</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <Reveal key={q.text} delay={i * 120}>
              <blockquote
                className="h-full rounded-3xl border border-foreground/10 bg-card p-6 transition-transform duration-300 hover:-translate-y-2"
                style={{ transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)` }}
              >
                <p className="text-lg font-semibold leading-snug">“{q.text}”</p>
                <footer className="mt-4 text-sm text-accent">{q.author}</footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-foreground/10 py-10 text-center text-sm text-muted-foreground">
        <p>Made with caffeine, deadlines, and friendship. ☕</p>
        <p className="mt-1">© 2026 Our College Class Page</p>
      </footer>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-background/95 p-4 backdrop-blur"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Close gallery"
            className="absolute right-4 top-4 rounded-full border border-foreground/20 p-2 hover:text-accent"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={PHOTOS[lightbox]!.src}
              alt={PHOTOS[lightbox]!.caption}
              className="max-h-[75vh] w-full rounded-2xl object-contain"
            />
            <p className="mt-4 text-center font-semibold">{PHOTOS[lightbox]!.caption}</p>
            <p className="mt-1 text-center text-xs text-muted-foreground">
              {lightbox + 1} / {PHOTOS.length}
            </p>
            <button
              aria-label="Previous photo"
              onClick={() => setLightbox((i) => ((i ?? 0) - 1 + PHOTOS.length) % PHOTOS.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-card/80 p-3 hover:text-accent"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Next photo"
              onClick={() => setLightbox((i) => ((i ?? 0) + 1) % PHOTOS.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-card/80 p-3 hover:text-accent"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
