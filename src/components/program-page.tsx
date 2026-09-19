import { Link } from "@tanstack/react-router";
import {
  ArrowDown, ArrowRight, BadgeCheck, BookOpen, BriefcaseBusiness, CalendarDays,
  Check, Clock3, GraduationCap, HeartHandshake, Microscope, School, Sparkles,
  Stethoscope, Target, UserRoundCheck, UsersRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site-sections";
import trainingHero from "@/assets/dental-training-hero.jpg";
import handsOn from "@/assets/hands-on-training.jpg";

const weeks = ["Dental Foundations", "Clinical Skills", "Dental Office Experience", "Hands-On Training", "Career Preparation"];
const advantages = [
  [UsersRound, "Small Class Sizes", "Average 4–5 students per class, allowing for more personalized instruction and support."],
  [Stethoscope, "Hands-On Training", "Gain practical experience in a dental office and work with real-life patients."],
  [BookOpen, "Clear & Concise Curriculum", "Learn essential dental knowledge and skills through a focused dental assistant curriculum."],
  [CalendarDays, "Flexible Schedule", "The program is delivered on weekends from 10:00 AM–2:00 PM, while clinical scheduling is created by students."],
  [BriefcaseBusiness, "Job Placement Support", "Receive resume workshops and mock interview preparation to help you enter the workforce with confidence."],
  [GraduationCap, "Career Advancement", "Receive support with dental school and dental hygiene applications, including personal statements, shadowing hours, letters of recommendation, and mock interviews."],
  [Sparkles, "Continuing Education", "Scholarships are available to support continuing education and future career growth."],
] as const;
const audiences = [
  [School, "High School Graduates", "Start building your professional path in the dental field."],
  [GraduationCap, "Pre-Dental / Pre-Hygiene Students", "Gain practical dental experience and foundational knowledge while exploring your future career."],
  [Target, "Career Changers", "Build new skills and transition into the dental profession through focused, hands-on training."],
] as const;
const specialties = [
  ["General Dentistry", "Learn the foundational concepts and day-to-day workflow of a general dental practice."],
  ["Pediatric Dentistry", "Explore the basics of working with children and supporting pediatric dental care."],
  ["Orthodontics", "Understand the fundamentals of orthodontic offices and how dental assistants support treatment."],
  ["Oral Surgery", "Learn the basic concepts of surgical dental procedures and the assistant’s role in supporting the dental team."],
  ["Periodontics", "Gain foundational knowledge about gum health and periodontal treatments."],
  ["Endodontics", "Explore the basics of root canal treatment and endodontic procedures."],
  ["Prosthodontics", "Understand the fundamentals of restorative and replacement dentistry, including crowns, bridges, and dentures."],
] as const;
const gains = [
  [BookOpen, "Dental Knowledge"], [Stethoscope, "Hands-On Experience"], [BadgeCheck, "Clinical Confidence"],
  [HeartHandshake, "Professional Skills"], [BriefcaseBusiness, "Career Preparation"],
] as const;
const support = ["Resume Workshops", "Mock Interviews", "Job Placement Support", "Dental School Applications", "Dental Hygiene Applications", "Personal Statement Support", "Shadowing Hours", "Letters of Recommendation"];

export function ProgramPage() {
  return <>
    <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-hero text-hero-foreground">
      <img src={trainingHero} alt="Dental assisting students receiving clinical training" className="absolute inset-0 h-full w-full object-cover" width={1600} height={1104} />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="site-container relative flex min-h-[calc(100svh-5rem)] items-center py-16 md:py-24">
        <div className="max-w-3xl animate-rise">
          <p className="inline-flex items-center gap-2 rounded-full border border-hero-accent/35 bg-hero/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-hero-accent"><Sparkles className="size-4" />5-Week Dental Assistant Training Program</p>
          <h1 className="mt-6 font-display text-5xl leading-[1.02] md:text-7xl lg:text-8xl">Change Your Life in Only 5 Weeks</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-hero-muted md:text-xl">Our 5-Week Dental Assistant Training Program provides students with the education, practical experience, and foundational dental knowledge needed to begin a career in the dental profession.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button asChild size="lg" variant="light"><a href="#program-curriculum">Learn About the Program <ArrowDown /></a></Button><Button asChild size="lg" variant="heroOutline"><a href="#career-paths">Explore Dental Career Paths <ArrowDown /></a></Button></div>
          <p className="mt-7 flex items-center gap-2 text-sm font-semibold text-hero-muted"><Check className="size-4 text-hero-accent" />Train for your future without putting your life on hold.</p>
        </div>
      </div>
    </section>

    <section id="program-curriculum" className="scroll-mt-20 py-20 lg:py-28"><div className="site-container"><SectionHeading eyebrow="Five focused weeks" title="Our Program" text="Before a dental assistant can work with a dentist, foundational dental knowledge is essential. Our program equips students with the education and practical hands-on experience needed to thrive in a dental setting." /><div className="mt-12 grid gap-4 md:grid-cols-5">{weeks.map((week, index) => <article key={week} className="group border-t-4 border-primary bg-card p-6 shadow-card transition-transform hover:-translate-y-1"><span className="text-xs font-bold uppercase text-primary">Week {index + 1}</span><h3 className="mt-8 text-lg font-bold leading-6">{week}</h3><div className="mt-6 h-1 w-10 bg-accent transition-all group-hover:w-full" /></article>)}</div></div></section>

    <section className="bg-muted py-20 lg:py-28"><div className="site-container"><SectionHeading eyebrow="Why choose ADA" title="Our Advantages" text="A focused program built around personal instruction, practical learning, flexibility, and continued career support." /><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{advantages.map(([Icon, title, text], index) => <article key={title} className={`border border-border bg-card p-7 shadow-card ${index === 6 ? "lg:col-span-3 lg:grid lg:grid-cols-[auto_1fr] lg:gap-7" : ""}`}><span className="grid size-12 place-items-center rounded-md bg-accent text-accent-foreground"><Icon className="size-6" /></span><div><h3 className="mt-7 text-lg font-bold lg:mt-0">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p></div></article>)}</div></div></section>

    <section className="bg-hero text-hero-foreground"><div className="site-container grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24"><div><p className="eyebrow text-hero-accent">Designed around your life</p><h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">Don’t Put Your Life on HOLD.</h2><p className="mt-6 text-xl font-semibold">Students enrolled in our program are still able to work full time and attend college full time.</p><p className="mt-4 max-w-2xl leading-7 text-hero-muted">Our main goal is to allow students to pursue dental assistant training without having to sacrifice work, school, or their existing commitments.</p><Button asChild variant="light" size="lg" className="mt-8"><a href="#program-curriculum">Explore the Program <ArrowRight /></a></Button></div><div className="grid gap-3">{["WORK FULL TIME", "ATTEND COLLEGE FULL TIME", "TRAIN FOR YOUR FUTURE"].map((item, i) => <div key={item} className="flex items-center gap-5 border border-hero-foreground/15 bg-hero-foreground/5 p-5"><span className="grid size-10 place-items-center rounded-full bg-accent font-bold text-accent-foreground">0{i + 1}</span><span className="font-bold">{item}</span></div>)}</div></div></section>

    <section className="py-20 lg:py-28"><div className="site-container grid gap-12 lg:grid-cols-[1fr_0.8fr]"><div><SectionHeading eyebrow="Weekend program" title="Flexible Training That Fits Your Life" text="Clinical scheduling is created by students, allowing them to coordinate hands-on experience around their existing responsibilities." /><div className="mt-10 inline-flex items-center gap-5 border-l-4 border-primary bg-secondary px-6 py-5"><Clock3 className="size-8 text-primary" /><div><p className="text-xs font-bold uppercase text-muted-foreground">Weekend Program</p><p className="mt-1 text-2xl font-bold text-primary">10:00 AM – 2:00 PM</p></div></div></div><article className="border border-border bg-card p-7 shadow-card"><h3 className="font-display text-2xl">Opening Hours</h3><div className="mt-6 divide-y divide-border">{[["Monday – Friday", "8:30 AM – 6:30 PM"], ["Saturday", "10:00 AM – 4:00 PM"], ["Sunday", "Closed"]].map(([day, hours]) => <div key={day} className="flex items-center justify-between gap-4 py-4 text-sm"><span className="font-semibold">{day}</span><span className="text-muted-foreground">{hours}</span></div>)}</div></article></div></section>

    <section className="bg-secondary py-20 lg:py-28"><div className="site-container"><SectionHeading centered eyebrow="A practical first step" title="Is This Program Right for You?" /><div className="mt-12 grid gap-5 md:grid-cols-3">{audiences.map(([Icon, title, text]) => <article key={title} className="bg-card p-8 text-center shadow-card"><span className="mx-auto grid size-14 place-items-center rounded-full bg-accent text-accent-foreground"><Icon className="size-7" /></span><h3 className="mt-7 text-xl font-bold">{title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{text}</p></article>)}</div></div></section>

    <section id="career-paths" className="scroll-mt-20 py-20 lg:py-28"><div className="site-container"><SectionHeading eyebrow="Explore the profession" title="Learn About Dental Career Paths" text="A dental assistant can work in a variety of dental specialties. Our program provides students with foundational knowledge across different areas of dentistry, helping them understand the environments, procedures, and roles they may encounter throughout their dental career." /><div className="mt-6 max-w-3xl border-l-4 border-primary bg-accent/55 px-5 py-4 text-sm font-semibold text-accent-foreground">This broad introduction builds basic awareness across dental environments; it does not qualify students as dental specialists.</div><div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">{specialties.map(([title, text], index) => <article key={title} className={`bg-card p-7 ${index === 6 ? "lg:col-span-3" : ""}`}><div className="flex items-center justify-between"><Microscope className="size-5 text-primary" /><span className="text-xs font-bold text-muted-foreground">0{index + 1}</span></div><h3 className="mt-7 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p></article>)}</div><Button asChild size="lg" className="mt-10"><Link to="/interest">Learn About Dental Career Paths <ArrowRight /></Link></Button></div></section>

    <section className="bg-muted py-20 lg:py-28"><div className="site-container"><SectionHeading centered eyebrow="A strong foundation" title="What You’ll Gain in 5 Weeks" text="Our program combines foundational dental education, hands-on experience, and career preparation to help students take their first step into the dental profession." /><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{gains.map(([Icon, title]) => <article key={title} className="bg-card p-6 text-center shadow-card"><Icon className="mx-auto size-7 text-primary" /><h3 className="mt-5 font-bold">{title}</h3></article>)}</div></div></section>

    <section className="py-20 lg:py-28"><div className="site-container grid gap-12 lg:grid-cols-[0.7fr_1.3fr]"><SectionHeading eyebrow="Career support" title="More Than Just Training" text="The academy supports students beyond classroom instruction with practical guidance for entering the workforce and preparing for future educational opportunities." /><div className="grid gap-3 sm:grid-cols-2">{support.map((item) => <div key={item} className="flex items-center gap-3 border border-border bg-card p-4"><UserRoundCheck className="size-5 shrink-0 text-primary" /><span className="text-sm font-bold">{item}</span></div>)}</div></div></section>

    <section className="overflow-hidden bg-secondary"><div className="site-container grid lg:grid-cols-2 lg:items-center"><img src={handsOn} alt="Instructor supporting a dental assisting student during training" loading="lazy" className="h-full min-h-80 w-full object-cover" width={1312} height={1008} /><div className="px-2 py-14 md:px-10 lg:p-16"><SectionHeading eyebrow="Continuing education" title="Keep Growing After Graduation" text="Scholarships are available for continuing education, helping students continue developing their skills and pursuing future opportunities in dentistry." /><Button asChild size="lg" className="mt-7"><Link to="/interest">Learn More <ArrowRight /></Link></Button></div></div></section>

    <section className="bg-primary text-primary-foreground"><div className="site-container py-16 text-center lg:py-24"><h2 className="font-display text-4xl md:text-6xl">Your Future in Dentistry Starts Here.</h2><p className="mx-auto mt-5 max-w-2xl leading-7 text-primary-soft">Take the first step toward a career in dental assisting with focused training, hands-on experience, and support every step of the way.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Button asChild variant="light" size="lg"><Link to="/interest">Learn About the Program <ArrowRight /></Link></Button><Button asChild variant="heroOutline" size="lg"><a href="#career-paths">Explore Dental Career Paths</a></Button></div></div></section>
  </>;
}