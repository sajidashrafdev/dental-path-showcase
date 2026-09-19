import { createFileRoute } from "@tanstack/react-router";
import { ProgramPage } from "@/components/program-page";

export const Route = createFileRoute("/our-program")({
  head: () => ({ meta: [
    { title: "Our 5-Week Program | Advanced Dental Assisting Academy" },
    { name: "description", content: "Explore ADA's flexible five-week dental assistant training program, hands-on learning, career paths, and student support." },
    { property: "og:title", content: "Our 5-Week Dental Assistant Training Program" },
    { property: "og:description", content: "Build foundational dental knowledge, practical experience, and career confidence in five focused weeks." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ProgramPage,
});