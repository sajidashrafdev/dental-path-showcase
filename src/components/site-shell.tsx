import { useEffect, useState } from "react";
import { ArrowRight, Mail, Menu, Phone, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Our Program", to: "/our-program" },
  { label: "Course Information", to: "/course-information" },
  { label: "About", to: "/about" },
  { label: "Meet the Team", to: "/team" },
  { label: "Contact", to: "/contact" },
] as const;

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return <Link to="/" aria-label="Advanced Dental Assisting Academy home" className="flex min-w-0 items-center gap-3"><span className={`grid size-11 shrink-0 place-items-center rounded-md border font-extrabold ${inverse ? "border-footer-accent text-footer-accent" : "border-primary text-primary"}`}>ADA</span><span className="min-w-0 leading-none"><span className={`block truncate font-display text-lg ${inverse ? "text-footer-foreground" : "text-foreground"}`}>Advanced Dental Assisting</span><span className={`mt-1 block text-[0.62rem] font-bold uppercase tracking-[0.14em] ${inverse ? "text-footer-muted" : "text-muted-foreground"}`}>Academy</span></span></Link>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  useEffect(() => { const onScroll = () => setCompact(window.scrollY > 24); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return <header className={`fixed inset-x-0 top-0 z-50 border-b border-border/65 bg-background/95 backdrop-blur transition-all ${compact ? "shadow-header" : ""}`}>
    <div className={`site-container grid grid-cols-[minmax(0,1fr)_auto] items-center transition-all lg:grid-cols-[auto_minmax(0,1fr)_auto] ${compact ? "h-16" : "h-20"}`}>
      <Logo />
       <nav className="hidden items-center justify-center gap-6 lg:flex" aria-label="Main navigation">{navItems.map((item) => <Link key={item.to} to={item.to} activeProps={{ className: "text-primary" }} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">{item.label}</Link>)}</nav>
       <Button asChild className="hidden lg:inline-flex"><Link to="/interest">I&apos;m Interested <ArrowRight /></Link></Button>
      <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(true)} aria-label="Open navigation"><Menu /></Button>
    </div>
     {open && <div className="fixed inset-0 z-50 min-h-screen overflow-y-auto bg-background lg:hidden"><div className="site-container grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center border-b border-border"><Logo /><Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close navigation"><X /></Button></div><nav className="site-container flex flex-col py-6" aria-label="Mobile navigation">{navItems.map((item, index) => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-border py-4 text-lg font-semibold"><span>{item.label}</span><span className="text-sm text-muted-foreground">0{index + 1}</span></Link>)}<Button asChild size="lg" className="mt-7 w-full"><Link to="/interest" onClick={() => setOpen(false)}>I&apos;m Interested <ArrowRight /></Link></Button></nav></div>}
  </header>;
}

export function Footer() {
  return <footer className="bg-footer text-footer-foreground"><div className="site-container grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr] lg:py-20"><div><Logo inverse /><p className="mt-5 max-w-sm text-sm leading-7 text-footer-muted">Focused dental assistant education, practical experience, and career preparation in a supportive learning environment.</p></div><div><h2 className="text-xs font-bold uppercase tracking-[0.14em] text-footer-muted">Explore</h2><nav className="mt-5 grid gap-3 text-sm">{navItems.map((item) => <Link key={item.to} to={item.to} className="w-fit hover:text-footer-accent">{item.label}</Link>)}<Link to="/interest" className="w-fit hover:text-footer-accent">I&apos;m Interested</Link></nav></div><div><h2 className="text-xs font-bold uppercase tracking-[0.14em] text-footer-muted">Contact</h2><div className="mt-5 grid gap-4 text-sm"><a href="mailto:advanceddentalassistant@gmail.com" className="flex min-w-0 items-center gap-3 hover:text-footer-accent"><Mail className="size-4 shrink-0" /><span className="break-all">advanceddentalassistant@gmail.com</span></a><a href="tel:614-619-7763" className="flex items-center gap-3 hover:text-footer-accent"><Phone className="size-4" />614-619-7763</a></div></div></div><div className="border-t border-footer-border"><div className="site-container flex flex-col gap-2 py-5 text-xs text-footer-muted sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Advanced Dental Assisting Academy. All rights reserved.</span><span>Training for your future in dentistry</span></div></div></footer>;
}

export function SiteShell({ children }: { children: React.ReactNode }) { return <><Header /><main className="pt-20">{children}</main><Footer /></>; }