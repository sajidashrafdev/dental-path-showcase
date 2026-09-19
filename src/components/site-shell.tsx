import { useEffect, useState } from "react";
import { ArrowUpRight, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Why Foods Valley", href: "/#why-join" },
  { label: "Open Positions", href: "/#open-positions" },
  { label: "Our Values", href: "/#culture" },
] as const;

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return <Link to="/" aria-label="Foods Valley careers home" className="flex min-w-0 items-center gap-3"><span className={`grid size-11 shrink-0 place-items-center rounded-md border font-extrabold ${inverse ? "border-footer-accent text-footer-accent" : "border-primary text-primary"}`}>FV</span><span className="leading-none"><span className={`block font-display text-lg font-bold ${inverse ? "text-footer-foreground" : "text-foreground"}`}>FOODS VALLEY</span><span className={`mt-1 block text-[0.62rem] font-bold uppercase tracking-[0.14em] ${inverse ? "text-footer-muted" : "text-muted-foreground"}`}>Trading Co.</span></span></Link>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  useEffect(() => { const onScroll = () => setCompact(window.scrollY > 24); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return <header className={`fixed inset-x-0 top-0 z-50 border-b border-border/65 bg-background/95 backdrop-blur transition-all ${compact ? "shadow-header" : ""}`}>
    <div className={`site-container grid grid-cols-[minmax(0,1fr)_auto] items-center transition-all lg:grid-cols-[auto_minmax(0,1fr)_auto] ${compact ? "h-16" : "h-20"}`}>
      <Logo />
      <nav className="hidden items-center justify-center gap-8 lg:flex" aria-label="Main navigation">{navItems.map((item) => <a key={item.href} href={item.href} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">{item.label}</a>)}</nav>
      <Button asChild className="hidden lg:inline-flex"><a href="/#apply">Apply Now <ArrowUpRight /></a></Button>
      <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(true)} aria-label="Open navigation"><Menu /></Button>
    </div>
    {open && <div className="fixed inset-0 z-50 min-h-screen bg-background lg:hidden"><div className="site-container grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center border-b border-border"><Logo /><Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close navigation"><X /></Button></div><nav className="site-container flex flex-col py-8" aria-label="Mobile navigation">{navItems.map((item, index) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-border py-5 text-lg font-semibold"><span>{item.label}</span><span className="text-sm text-muted-foreground">0{index + 1}</span></a>)}<Button asChild size="lg" className="mt-8 w-full"><a href="/#apply" onClick={() => setOpen(false)}>Apply Now <ArrowUpRight /></a></Button></nav></div>}
  </header>;
}

export function Footer() {
  return <footer className="bg-footer text-footer-foreground"><div className="site-container grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr] lg:py-20"><div><Logo inverse /><p className="mt-5 max-w-sm text-sm leading-7 text-footer-muted">A premium food importer, distributor, and foodservice partner based in Riyadh, Saudi Arabia.</p></div><div><h2 className="text-xs font-bold uppercase tracking-[0.14em] text-footer-muted">Careers</h2><nav className="mt-5 grid gap-3 text-sm">{navItems.map((item) => <a key={item.href} href={item.href} className="w-fit hover:text-footer-accent">{item.label}</a>)}<a href="/#apply" className="w-fit hover:text-footer-accent">Apply Now</a></nav></div><div><h2 className="text-xs font-bold uppercase tracking-[0.14em] text-footer-muted">Contact</h2><div className="mt-5 grid gap-4 text-sm"><a href="mailto:info@foodsvalley.sa" className="flex items-center gap-3 hover:text-footer-accent"><Mail className="size-4" />info@foodsvalley.sa</a><a href="tel:+966545467885" className="flex items-center gap-3 hover:text-footer-accent"><Phone className="size-4" />+966 54 546 7885</a><span className="flex items-center gap-3 text-footer-muted"><MapPin className="size-4" />Riyadh, Saudi Arabia</span></div></div></div><div className="border-t border-footer-border"><div className="site-container flex flex-col gap-2 py-5 text-xs text-footer-muted sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Foods Valley Trading Co. All rights reserved.</span><span>Careers in foodservice excellence</span></div></div></footer>;
}

export function SiteShell({ children }: { children: React.ReactNode }) { return <><Header /><main className="pt-20">{children}</main><Footer /></>; }