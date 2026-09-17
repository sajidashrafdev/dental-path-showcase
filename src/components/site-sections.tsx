import type { LucideIcon } from "lucide-react";
import { ArrowRight, Check, GraduationCap, HeartHandshake, Stethoscope, UsersRound } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import trainingHero from "@/assets/dental-training-hero.jpg";

export const benefits = [
  { title: "Hands-On Learning", text: "Develop practical familiarity through guided training experiences.", icon: Stethoscope },
  { title: "Experienced Instruction", text: "Learn in an environment shaped by dental professionals.", icon: GraduationCap },
  { title: "Career-Focused Training", text: "Build knowledge relevant to working in a dental care setting.", icon: UsersRound },
  { title: "Supportive Environment", text: "Practice, ask questions, and learn alongside your peers.", icon: HeartHandshake },
];

export const learningTopics = [
  ["Dental Assisting Fundamentals", "Explore the foundational role and responsibilities of dental assisting."],
  ["Patient Care", "Build an understanding of thoughtful, professional patient support."],
  ["Dental Office Procedures", "Learn about the day-to-day flow of a professional dental setting."],
  ["Infection Control", "Review general principles that support a clean clinical environment."],
  ["Instruments & Equipment", "Become familiar with commonly encountered dental tools and equipment."],
  ["Clinical Skills", "Practice introductory techniques in a guided learning environment."],
  ["Professional Communication", "Develop clear communication for patients and dental teams."],
];

export function SectionHeading({ eyebrow, title, text, centered = false }: { eyebrow?: string; title: string; text?: string; centered?: boolean }) {
  return <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2 className="mt-3 font-display text-3xl leading-tight text-foreground md:text-5xl">{title}</h2>{text && <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">{text}</p>}</div>;
}

export function PageHero({ eyebrow = "Advanced Dental Assisting", title, text }: { eyebrow?: string; title: string; text: string }) {
  return (
    <section className="relative overflow-hidden bg-hero text-hero-foreground">
      <img src={trainingHero} alt="Dental assisting students practicing in a modern training lab" width={1600} height={1104} className="absolute inset-0 h-full w-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="site-container relative py-20 md:py-28 lg:py-32"><p className="eyebrow text-hero-accent">{eyebrow}</p><h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.05] md:text-6xl lg:text-7xl">{title}</h1><p className="mt-6 max-w-2xl text-base leading-8 text-hero-muted md:text-xl">{text}</p></div>
    </section>
  );
}

export function BenefitGrid({ items = benefits }: { items?: { title: string; text: string; icon: LucideIcon }[] }) {
  return <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-4">{items.map(({ title, text, icon: Icon }, index) => <article key={title} className="group bg-card p-7 transition-colors hover:bg-secondary/70"><div className="flex items-start justify-between"><span className="grid size-11 place-items-center rounded-md bg-accent text-accent-foreground"><Icon className="size-5" /></span><span className="text-xs font-bold text-muted-foreground">0{index + 1}</span></div><h3 className="mt-8 text-lg font-bold text-card-foreground">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div>;
}

export function CTABanner({ title = "Ready to Learn More About Dental Assisting?", text = "Tell us a little about yourself and your interest in the program." }: { title?: string; text?: string }) {
  return <section className="bg-primary text-primary-foreground"><div className="site-container grid gap-8 py-14 md:grid-cols-[minmax(0,1fr)_auto] md:items-center lg:py-20"><div className="min-w-0"><p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-soft">Your next step</p><h2 className="mt-3 max-w-3xl font-display text-3xl leading-tight md:text-5xl">{title}</h2><p className="mt-4 max-w-2xl text-primary-soft">{text}</p></div><div className="flex shrink-0 flex-col gap-3 sm:flex-row"><Button asChild variant="light" size="lg"><Link to="/interest">I&apos;m Interested <ArrowRight /></Link></Button><Button asChild variant="heroOutline" size="lg"><Link to="/contact">Contact Us</Link></Button></div></div></section>;
}

export function PlaceholderPortrait({ name }: { name: string }) {
  const initials = name.split(" ").map((part) => part[0]).join("");
  return <div className="grid aspect-[4/5] w-full place-items-center bg-secondary" role="img" aria-label={`${name} photo placeholder`}><div className="text-center"><span className="mx-auto grid size-24 place-items-center rounded-full border border-primary/25 bg-background font-display text-3xl text-primary">{initials}</span><p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Existing team photo</p></div></div>;
}

export function Checklist({ items }: { items: string[] }) {
  return <ul className="mt-6 grid gap-4">{items.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground"><Check className="size-3" /></span>{item}</li>)}</ul>;
}