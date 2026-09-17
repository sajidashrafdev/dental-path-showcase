import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return <div className="grid gap-2"><Label htmlFor={id}>{label}</Label>{children}</div>;
}

export function InterestForm() {
  const [submitted, setSubmitted] = useState(false);
  const submit = (event: FormEvent) => { event.preventDefault(); setSubmitted(true); };
  if (submitted) return <div className="rounded-lg border border-accent bg-accent/35 p-8 text-center md:p-12"><CheckCircle2 className="mx-auto size-12 text-primary" /><h2 className="mt-5 font-display text-3xl">Thank you for your interest.</h2><p className="mx-auto mt-3 max-w-lg text-muted-foreground">We&apos;ll be in touch with more information.</p><Button variant="outline" className="mt-7" onClick={() => setSubmitted(false)}>Submit another response</Button></div>;
  return <form onSubmit={submit} className="grid gap-6 rounded-lg border border-border bg-card p-6 shadow-card md:p-10"><div className="grid gap-5 sm:grid-cols-2"><Field id="first-name" label="First Name"><Input id="first-name" required autoComplete="given-name" /></Field><Field id="last-name" label="Last Name"><Input id="last-name" required autoComplete="family-name" /></Field></div><div className="grid gap-5 sm:grid-cols-2"><Field id="email" label="Email"><Input id="email" type="email" required autoComplete="email" /></Field><Field id="phone" label="Phone"><Input id="phone" type="tel" autoComplete="tel" /></Field></div><Field id="contact-method" label="Preferred Contact Method"><Select required><SelectTrigger id="contact-method"><SelectValue placeholder="Choose a contact method" /></SelectTrigger><SelectContent><SelectItem value="email">Email</SelectItem><SelectItem value="phone">Phone</SelectItem><SelectItem value="either">Either</SelectItem></SelectContent></Select></Field><Field id="interest-area" label="What are you interested in learning about?"><Input id="interest-area" placeholder="Course topics, schedule, learning experience…" /></Field><Field id="message" label="Message / Questions"><Textarea id="message" rows={5} /></Field><Button type="submit" size="lg" className="w-full sm:w-fit">Submit My Interest <Send /></Button></form>;
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const submit = (event: FormEvent) => { event.preventDefault(); setSubmitted(true); };
  if (submitted) return <div className="rounded-lg border border-accent bg-accent/35 p-8 text-center"><CheckCircle2 className="mx-auto size-11 text-primary" /><h2 className="mt-4 font-display text-3xl">Message ready.</h2><p className="mt-3 text-muted-foreground">This prototype does not send information. The final website can connect this form to your preferred service.</p><Button variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>Return to form</Button></div>;
  return <form onSubmit={submit} className="grid gap-5 rounded-lg border border-border bg-card p-6 shadow-card md:p-9"><Field id="name" label="Name"><Input id="name" required autoComplete="name" /></Field><Field id="contact-email" label="Email"><Input id="contact-email" type="email" required autoComplete="email" /></Field><Field id="contact-phone" label="Phone"><Input id="contact-phone" type="tel" autoComplete="tel" /></Field><Field id="contact-message" label="Message"><Textarea id="contact-message" rows={6} required /></Field><Button type="submit" size="lg" className="w-full sm:w-fit">Send Message <Send /></Button></form>;
}