import { Link } from "@tanstack/react-router";
import { Menu, Phone, Mail, Instagram, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", to: "/" as const },
  { label: "About the Program", to: "/about" as const },
  { label: "Course Information", to: "/course-information" as const },
  { label: "Meet the Team", to: "/team" as const },
  { label: "Interest / Apply", to: "/interest" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Advanced Dental Assisting home">
      <span className={`grid size-10 shrink-0 place-items-center rounded-full border-2 ${inverse ? "border-footer-foreground" : "border-primary"}`}>
        <span className={`text-sm font-extrabold ${inverse ? "text-footer-foreground" : "text-primary"}`}>ADA</span>
      </span>
      <span className="min-w-0 leading-tight">
        <span className={`block truncate font-display text-lg ${inverse ? "text-footer-foreground" : "text-foreground"}`}>Advanced Dental</span>
        <span className={`block text-[0.68rem] font-bold uppercase tracking-[0.18em] ${inverse ? "text-footer-muted" : "text-muted-foreground"}`}>Assisting</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur transition-all ${compact ? "shadow-header" : ""}`}>
      <div className={`site-container grid grid-cols-[minmax(0,1fr)_auto] items-center transition-all lg:grid-cols-[auto_minmax(0,1fr)_auto] ${compact ? "h-16" : "h-20"}`}>
        <Logo />
        <nav className="hidden items-center justify-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-md px-3 py-2 text-[0.82rem] font-semibold text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary bg-secondary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button asChild variant="default" size="lg" className="hidden lg:inline-flex">
          <Link to="/interest">I&apos;m Interested <ArrowUpRight /></Link>
        </Button>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(true)} aria-label="Open navigation">
          <Menu className="size-5" />
        </Button>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 min-h-screen bg-background lg:hidden">
          <div className="site-container grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center border-b border-border">
            <Logo />
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close navigation"><X /></Button>
          </div>
          <nav className="site-container flex flex-col py-8" aria-label="Mobile navigation">
            {navItems.map((item, index) => (
              <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-border py-4 text-lg font-semibold text-foreground">
                <span>{item.label}</span><span className="text-sm text-muted-foreground">0{index + 1}</span>
              </Link>
            ))}
            <Button asChild size="lg" className="mt-8 w-full"><Link to="/interest" onClick={() => setOpen(false)}>I&apos;m Interested <ArrowUpRight /></Link></Button>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="site-container grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr] lg:py-20">
        <div><Logo inverse /><p className="mt-5 max-w-sm text-sm leading-7 text-footer-muted">Professional dental assisting education and training.</p></div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-footer-muted">Explore</h2>
          <nav className="mt-5 grid gap-3 text-sm">
            {navItems.map((item) => <Link key={item.to} to={item.to} className="w-fit transition-colors hover:text-footer-accent">{item.label}</Link>)}
          </nav>
        </div>
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-footer-muted">Connect</h2>
          <div className="mt-5 grid gap-4 text-sm">
            <a href="tel:614-619-7763" className="flex items-center gap-3 hover:text-footer-accent"><Phone className="size-4" />614-619-7763</a>
            <a href="mailto:advanceddentalassistant@gmail.com" className="flex min-w-0 items-center gap-3 hover:text-footer-accent"><Mail className="size-4 shrink-0" /><span className="break-all">advanceddentalassistant@gmail.com</span></a>
            <a href="#instagram-placeholder" aria-label="Instagram link placeholder" className="flex items-center gap-3 hover:text-footer-accent"><Instagram className="size-4" />Follow Us on Instagram</a>
          </div>
        </div>
      </div>
      <div className="border-t border-footer-border"><div className="site-container py-5 text-xs text-footer-muted">© Advanced Dental Assisting. All rights reserved.</div></div>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return <><Header /><main className="pt-20">{children}</main><Footer /></>;
}