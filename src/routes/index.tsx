import { useRef, useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  Globe2,
  GraduationCap,
  Handshake,
  HeartPulse,
  MapPin,
  ShieldCheck,
  Sparkles,
  UploadCloud,
  UsersRound,
  UtensilsCrossed,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import warehouseHero from "@/assets/foods-valley-warehouse.jpg";
import teamImage from "@/assets/foods-valley-team.jpg";

const jobs = [
  { title: "B2B Sales Executive", location: "Riyadh, Saudi Arabia", type: "Full-time", area: "Commercial" },
  { title: "Cold Chain Logistics Coordinator", location: "Riyadh, Saudi Arabia", type: "Full-time", area: "Operations" },
  { title: "Warehouse & Quality Assurance Supervisor", location: "Jeddah / Riyadh", type: "Full-time", area: "Quality" },
  { title: "Key Account Manager — Foodservice", location: "Riyadh, Saudi Arabia", type: "Full-time", area: "Commercial" },
] as const;

const benefits = [
  { icon: Globe2, title: "Global Exposure", text: "Work with leading international food brands and suppliers." },
  { icon: GraduationCap, title: "Growth & Development", text: "Keep learning and advance your career in Saudi Arabia’s growing food sector." },
  { icon: UsersRound, title: "Collaborative Culture", text: "Join a passionate, inclusive, and performance-driven work environment." },
  { icon: HeartPulse, title: "Competitive Benefits", text: "Receive an attractive compensation package and health benefits." },
] as const;

const values = [
  { icon: ShieldCheck, title: "Integrity", text: "We act with honesty, accountability, and respect in every partnership." },
  { icon: Handshake, title: "Teamwork", text: "We achieve more by sharing expertise and supporting one another." },
  { icon: CheckCircle2, title: "Food Safety", text: "Quality and responsible handling guide every step of our operation." },
  { icon: Sparkles, title: "Customer Satisfaction", text: "We stay responsive and focused on the success of every customer." },
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Careers at Foods Valley Trading Co. | Riyadh" },
      { name: "description", content: "Explore careers at Foods Valley Trading Co. and join a growing food import, distribution, and foodservice team in Saudi Arabia." },
      { property: "og:title", content: "Build Your Career with Foods Valley" },
      { property: "og:description", content: "View open roles and join the Foods Valley team in Saudi Arabia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  const [position, setPosition] = useState("");

  const selectPosition = (title: string) => {
    setPosition(title);
    window.setTimeout(() => document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  return (
    <>
      <section className="relative flex min-h-[calc(100svh-5rem)] items-end overflow-hidden bg-hero text-hero-foreground">
        <img src={warehouseHero} alt="Foods Valley logistics professionals working in a modern food distribution warehouse" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover object-[64%_center]" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="site-container relative pb-16 pt-28 md:pb-24 md:pt-36">
          <div className="animate-rise max-w-3xl">
            <p className="eyebrow text-hero-accent">Careers at Foods Valley</p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[1.05] md:text-7xl">Build Your Career with Foods Valley</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-hero-muted md:text-xl">Join a dynamic, fast-growing team driving foodservice excellence and bringing global food solutions to Saudi Arabia.</p>
            <Button asChild variant="light" size="lg" className="mt-9">
              <a href="#open-positions">View Open Positions <ArrowDown /></a>
            </Button>
          </div>
          <div className="mt-14 grid max-w-3xl gap-4 border-t border-hero-foreground/20 pt-6 text-sm font-semibold text-hero-muted sm:grid-cols-3">
            <span>Riyadh, Saudi Arabia</span><span>Foodservice Excellence</span><span>Global Partnerships</span>
          </div>
        </div>
      </section>

      <section id="why-join" className="scroll-mt-20 bg-background py-20 lg:py-28">
        <div className="site-container">
          <SectionIntro eyebrow="Why join us?" title="Grow with a business that moves food forward" text="Build meaningful experience at the intersection of global sourcing, responsible distribution, and customer partnership." />
          <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className="group bg-card p-7 transition-colors hover:bg-secondary">
                <div className="flex items-start justify-between"><span className="grid size-12 place-items-center rounded-md bg-accent text-accent-foreground"><Icon className="size-5" /></span><span className="text-xs font-bold text-muted-foreground">0{index + 1}</span></div>
                <h2 className="mt-8 text-lg font-bold text-card-foreground">{title}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="open-positions" className="scroll-mt-20 bg-muted py-20 lg:py-28">
        <div className="site-container">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <SectionIntro eyebrow="Current opportunities" title="Find your place at Foods Valley" text="Explore open roles across our commercial, logistics, warehouse, and quality teams." />
            <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground"><BriefcaseBusiness className="size-4 text-primary" /> 4 open positions</div>
          </div>
          <div className="mt-12 grid gap-4">
            {jobs.map((job) => (
              <article key={job.title} className="group grid gap-6 border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary/45 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:p-8">
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary">{job.area}</p>
                  <h3 className="mt-2 text-xl font-bold text-card-foreground md:text-2xl">{job.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground"><span className="flex items-center gap-2"><MapPin className="size-4 text-primary" />{job.location}</span><span className="flex items-center gap-2"><BriefcaseBusiness className="size-4 text-primary" />{job.type}</span></div>
                </div>
                <Button variant="outline" size="lg" onClick={() => selectPosition(job.title)}>Apply Now <ArrowRight /></Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="culture" className="scroll-mt-20 bg-hero text-hero-foreground">
        <div className="grid lg:grid-cols-2">
          <img src={teamImage} alt="Foods Valley team collaborating on food quality and distribution" loading="lazy" width={1408} height={1056} className="h-full min-h-[28rem] w-full object-cover" />
          <div className="flex items-center px-6 py-16 md:px-12 lg:px-16 lg:py-24">
            <div className="max-w-2xl">
              <p className="eyebrow text-hero-accent">Life at Foods Valley</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">Built on standards that matter</h2>
              <p className="mt-5 max-w-xl leading-7 text-hero-muted">Our values shape how we work together, safeguard the products entrusted to us, and serve foodservice partners across the Kingdom.</p>
              <div className="mt-10 grid gap-7 sm:grid-cols-2">
                {values.map(({ icon: Icon, title, text }) => <div key={title}><Icon className="size-5 text-hero-accent" /><h3 className="mt-3 font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-hero-muted">{text}</p></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="apply" className="scroll-mt-20 bg-background py-20 lg:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <SectionIntro eyebrow="Join our talent network" title="Your next opportunity could start here" text="Tell us where you would like to contribute. Our team will review your application and contact shortlisted candidates." />
            <div className="mt-8 border-l-2 border-gold pl-5"><p className="text-sm font-bold text-foreground">Before you submit</p><p className="mt-2 text-sm leading-6 text-muted-foreground">Prepare a PDF, DOC, or DOCX résumé up to 5 MB. Fields marked with an asterisk are required.</p></div>
          </div>
          <ApplicationForm position={position} setPosition={setPosition} />
        </div>
      </section>
    </>
  );
}

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <div className="max-w-2xl"><p className="eyebrow">{eyebrow}</p><h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-foreground md:text-5xl">{title}</h2><p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">{text}</p></div>;
}

function ApplicationForm({ position, setPosition }: { position: string; setPosition: (value: string) => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileError, setFileError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const validateFile = (file?: File) => {
    if (!file) { setFileError("Please upload your CV or résumé."); return false; }
    const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!allowed.includes(file.type)) { setFileError("Upload a PDF, DOC, or DOCX file."); return false; }
    if (file.size > 5 * 1024 * 1024) { setFileError("Your file must be 5 MB or smaller."); return false; }
    setFileError(""); setFileName(file.name); return true;
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const selectedFile = fileRef.current?.files?.[0];
    if (!position) { form.querySelector<HTMLElement>("[data-position-trigger]")?.focus(); return; }
    if (!validateFile(selectedFile)) return;
    setSubmitted(true);
  };

  if (submitted) return (
    <div className="grid min-h-[28rem] place-items-center border border-border bg-card p-8 text-center shadow-card md:p-12">
      <div><span className="mx-auto grid size-16 place-items-center rounded-full bg-accent text-accent-foreground"><Check className="size-7" /></span><h2 className="mt-6 font-display text-3xl font-semibold">Application received</h2><p className="mx-auto mt-3 max-w-md leading-7 text-muted-foreground">Thank you for your interest in Foods Valley. This careers mockup does not send or store your information.</p><Button variant="outline" className="mt-7" onClick={() => { setSubmitted(false); setFileName(""); }}>Submit another application</Button></div>
    </div>
  );

  return (
    <form onSubmit={submit} className="grid gap-6 border border-border bg-card p-6 shadow-card md:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="full-name" label="Full Name *"><Input id="full-name" name="fullName" required maxLength={100} autoComplete="name" className="h-12" /></FormField>
        <FormField id="email" label="Email Address *"><Input id="email" name="email" type="email" required maxLength={255} autoComplete="email" className="h-12" /></FormField>
      </div>
      <FormField id="phone" label="Phone Number *"><Input id="phone" name="phone" type="tel" required maxLength={24} autoComplete="tel" placeholder="+966" className="h-12" /></FormField>
      <FormField id="position" label="Position Applied For *">
        <Select value={position} onValueChange={setPosition} required><SelectTrigger id="position" data-position-trigger className="h-12"><SelectValue placeholder="Select a position" /></SelectTrigger><SelectContent>{jobs.map((job) => <SelectItem key={job.title} value={job.title}>{job.title}</SelectItem>)}</SelectContent></Select>
      </FormField>
      <div className="grid gap-2">
        <Label htmlFor="cv">Upload CV / Résumé *</Label>
        <label htmlFor="cv" className="flex min-h-28 cursor-pointer flex-col items-center justify-center border border-dashed border-input bg-muted/55 px-4 py-5 text-center transition-colors hover:border-primary hover:bg-secondary">
          <UploadCloud className="size-6 text-primary" /><span className="mt-2 text-sm font-bold text-foreground">{fileName || "Choose your résumé"}</span><span className="mt-1 text-xs text-muted-foreground">PDF, DOC, or DOCX · Maximum 5 MB</span>
        </label>
        <input ref={fileRef} id="cv" name="cv" type="file" required accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" className="sr-only" onChange={(event) => validateFile(event.target.files?.[0])} />
        {fileError && <p className="text-sm font-semibold text-destructive" role="alert">{fileError}</p>}
      </div>
      <FormField id="cover-letter" label="Cover Letter / Message"><Textarea id="cover-letter" name="coverLetter" maxLength={2000} rows={6} placeholder="Tell us about your experience and interest in Foods Valley." /></FormField>
      <Button type="submit" size="lg" className="w-full sm:w-fit">Submit Application <ArrowRight /></Button>
      <p className="text-xs leading-5 text-muted-foreground">This frontend mockup does not transmit or store personal information.</p>
    </form>
  );
}

function FormField({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return <div className="grid gap-2"><Label htmlFor={id}>{label}</Label>{children}</div>;
}