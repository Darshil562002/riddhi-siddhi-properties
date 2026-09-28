import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import type { Project } from "@/types";
import { CONFIG } from "@/lib/constants";

interface ProjectCardProps {
  project: Project;
  titleTag?: "h2" | "h3";
  /** "dark" = glassmorphism for dark bg (homepage hero), "light" = card for light bg (projects listing) */
  variant?: "dark" | "light";
}

export default function ProjectCard({
  project,
  titleTag: Tag = "h3",
  variant = "light",
}: ProjectCardProps) {
  const statusStyles: Record<string, { bg: string; color: string; border: string }> = {
    upcoming: { bg: "rgba(156,90,60,0.13)", color: "#9C5A3C", border: "rgba(156,90,60,0.30)" },
    ready:    { bg: "rgba(26,141,122,0.12)", color: "#147265", border: "rgba(26,141,122,0.28)" },
    ongoing:  { bg: "rgba(59,95,191,0.12)", color: "#3A5FBF", border: "rgba(59,95,191,0.28)" },
  };

  const darkStatusStyles: Record<string, { bg: string; color: string; border: string }> = {
    upcoming: { bg: "rgba(156,90,60,0.18)", color: "#E8A270", border: "rgba(232,162,112,0.20)" },
    ready:    { bg: "rgba(26,141,122,0.18)", color: "#3ABFAA", border: "rgba(58,191,170,0.20)" },
    ongoing:  { bg: "rgba(59,95,191,0.18)", color: "#7B9AE8", border: "rgba(123,154,232,0.20)" },
  };

  const styleMap = variant === "dark" ? darkStatusStyles : statusStyles;
  const badge = styleMap[project.status] || styleMap.ready;

  if (variant === "dark") {
    // Original glassmorphism card (for dark hero sections)
    return (
      <article
        className="group relative overflow-hidden rounded-2xl transition-all duration-400"
        style={{
          background: "rgba(255,253,246,0.04)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(245,179,1,0.12)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.20)",
        }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none z-10"
          style={{ background: "linear-gradient(135deg, rgba(245,179,1,0.06) 0%, transparent 60%)" }}
        />
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.heroImage}
            alt={`${project.name} — ${project.type} in ${project.location}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-600"
            style={{ transition: "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,13,18,0.55) 0%, transparent 50%)" }} />
          <div className="absolute top-3 left-3 flex flex-col gap-2 items-start z-20 pr-3">
            <span className="px-3 py-1 rounded-full text-[0.72rem] font-semibold uppercase tracking-wider backdrop-blur-sm"
              style={{ background: badge.bg, color: badge.color, border: `1px solid ${badge.border}` }}>
              {project.statusLabel}
            </span>
            <span className="px-2.5 py-1 rounded-full text-[0.68rem] font-semibold uppercase tracking-wider backdrop-blur-sm"
              style={{ background: "rgba(14,18,24,0.65)", color: "rgba(245,179,1,0.90)", border: "1px solid rgba(245,179,1,0.18)" }}>
              {project.type}
            </span>
          </div>
        </div>
        <div className="p-5">
          <Tag className="text-[1.15rem] mb-1.5 font-serif font-bold leading-snug" style={{ color: "#FFFDF6" }}>
            <Link href={`/projects/${project.slug}`} className="no-underline transition-colors hover:text-[#F5B301]" style={{ color: "#FFFDF6" }}>
              {project.name}
            </Link>
          </Tag>
          <div className="flex items-center gap-1.5 text-[0.82rem] mb-3" style={{ color: "rgba(255,253,246,0.55)" }}>
            <MapPin size={12} style={{ color: "rgba(245,179,1,0.60)" }} />
            {project.location}
          </div>
          <p className="text-[0.85rem] leading-relaxed mb-3 line-clamp-2" style={{ color: "rgba(255,253,246,0.50)" }}>
            {project.description}
          </p>
          {project.price && (
            <div className="font-serif text-[1.35rem] font-bold mb-2" style={{ color: "#F5B301" }}>
              {project.price}
            </div>
          )}
          <div className="text-[0.75rem]" style={{ color: "rgba(255,253,246,0.35)" }}>
            Developer: {project.developer}
            {project.reraNumber && project.reraNumber !== "Application Pending — RERA Number to be updated upon registration"
              ? ` | RERA: ${project.reraNumber}`
              : project.rera ? ` | RERA: ${project.rera}` : ""}
          </div>
        </div>
        <div className="flex items-center gap-3 px-5 py-3.5" style={{ borderTop: "1px solid rgba(245,179,1,0.10)" }}>
          <Link href={`/projects/${project.slug}`} className="btn btn-outline-white btn-sm flex-1 justify-center" style={{ borderRadius: "100px" }}>
            View Details
          </Link>
          <a href={CONFIG.callLink} className="btn btn-gold btn-sm flex-1 justify-center" style={{ borderRadius: "100px" }}>
            <Phone size={13} /> Call Now
          </a>
        </div>
      </article>
    );
  }

  // ── Light variant — for projects listing page ──
  return (
    <article
      className="group relative overflow-hidden rounded-2xl flex flex-col"
      style={{
        background: "#FFFFFF",
        border: "1px solid rgba(224,213,184,0.80)",
        boxShadow: "0 2px 12px rgba(31,41,51,0.07)",
        transition: "transform 350ms cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 350ms ease, border-color 350ms ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(31,41,51,0.13), 0 0 0 1px rgba(245,179,1,0.25)";
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,179,1,0.40)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(31,41,51,0.07)";
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(224,213,184,0.80)";
      }}
    >
      {/* Gold shimmer on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none z-10 rounded-2xl"
        style={{
          background: "linear-gradient(135deg, rgba(245,179,1,0.04) 0%, transparent 55%)",
          transition: "opacity 350ms ease",
        }}
      />

      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden flex-shrink-0">
        <Image
          src={project.heroImage}
          alt={`${project.name} — ${project.type} in ${project.location}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          style={{ transition: "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.05)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
        />
        {/* Subtle bottom gradient */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(10,13,18,0.35) 0%, transparent 45%)" }}
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start z-20">
          <span
            className="px-3 py-1 rounded-full text-[0.70rem] font-semibold uppercase tracking-wider"
            style={{
              background: badge.bg,
              color: badge.color,
              border: `1px solid ${badge.border}`,
              backdropFilter: "blur(8px)",
            }}
          >
            {project.statusLabel}
          </span>
          <span
            className="px-2.5 py-0.5 rounded-full text-[0.65rem] font-semibold uppercase tracking-wider"
            style={{
              background: "rgba(14,18,24,0.70)",
              color: "rgba(245,179,1,0.95)",
              border: "1px solid rgba(245,179,1,0.20)",
              backdropFilter: "blur(8px)",
            }}
          >
            {project.type}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Title */}
        <Tag
          className="font-serif font-bold leading-snug mb-1"
          style={{ color: "#0E1218", fontSize: "1.1rem" }}
        >
          <Link
            href={`/projects/${project.slug}`}
            className="no-underline transition-colors"
            style={{ color: "#0E1218" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#C89100"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#0E1218"; }}
          >
            {project.name}
          </Link>
        </Tag>

        {/* Location */}
        <div
          className="flex items-center gap-1.5 text-[0.80rem] mb-3"
          style={{ color: "#6A6A6A" }}
        >
          <MapPin size={12} style={{ color: "#F5B301", flexShrink: 0 }} />
          <span>{project.location}</span>
        </div>

        {/* Description */}
        <p
          className="text-[0.84rem] leading-relaxed line-clamp-2 mb-4 flex-1"
          style={{ color: "#5A5A5A" }}
        >
          {project.description}
        </p>

        {/* Price */}
        {project.price && (
          <div
            className="font-serif font-bold mb-1"
            style={{ color: "#0E1218", fontSize: "1.3rem" }}
          >
            {project.price}
            {project.priceNote && (
              <span
                className="ml-2 font-sans font-normal text-[0.72rem]"
                style={{ color: "#6A6A6A" }}
              >
                {project.priceNote}
              </span>
            )}
          </div>
        )}

        {/* Developer & RERA */}
        <div
          className="text-[0.72rem] mb-5"
          style={{ color: "#9A9A9A" }}
        >
          Developer: {project.developer}
          {project.reraNumber &&
          project.reraNumber !== "Application Pending — RERA Number to be updated upon registration"
            ? ` · RERA: ${project.reraNumber}`
            : project.rera
            ? ` · RERA: ${project.rera}`
            : ""}
        </div>

        {/* Footer buttons */}
        <div
          className="flex items-center gap-3 pt-4"
          style={{ borderTop: "1px solid rgba(224,213,184,0.70)" }}
        >
          <Link
            href={`/projects/${project.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 font-sans font-600 text-[0.82rem] rounded-full transition-all"
            style={{
              padding: "0.5rem 1rem",
              border: "1.5px solid rgba(14,18,24,0.20)",
              color: "#0E1218",
              background: "transparent",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 220ms ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#0E1218";
              (e.currentTarget as HTMLElement).style.background = "rgba(14,18,24,0.04)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(14,18,24,0.20)";
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            View Details <ArrowRight size={13} />
          </Link>
          <a
            href={CONFIG.callLink}
            className="flex-1 btn btn-primary btn-sm justify-center"
            style={{ borderRadius: "100px" }}
          >
            <Phone size={13} /> Call Now
          </a>
        </div>
      </div>
    </article>
  );
}
