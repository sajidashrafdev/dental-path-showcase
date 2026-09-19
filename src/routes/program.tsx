import { createFileRoute } from "@tanstack/react-router";
import { ProgramPage } from "@/components/program-page";

export const Route = createFileRoute("/program")({
  head: () => ({ meta: [
    { title: "Dental Assistant Program | Advanced Dental Assisting Academy" },
    { name: "description", content: "Discover ADA's five-week dental assistant training program, flexible schedule, clinical experience, and career support." },
    { property: "og:title", content: "Advanced Dental Assisting Academy Program" },
    { property: "og:description", content: "Focused dental assistant training designed to fit around work, college, and life." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ProgramPage,
});