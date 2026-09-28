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
  // ── Status badge colours ──
  const lightStatus: Record<string, { bg: string; color: string; border: string }> = {
    upcoming: { bg: "rgba(156,90,60,0.10)", color: "#8B4513", border: "rgba(156,90,60,0.25)" },
    ready:    { bg: "rgba(26,141,122,0.10)", color: "#147265", border: "rgba(26,141,122,0.25)" },
    ongoing:  { bg: "rgba(59,95,191,0.10)", color: "#3A5FBF", border: "rgba(59,95,191,0.25)" },
  };

  const darkStatus: Record<string, { bg: string; color: string; border: string }> = {
    upcoming: { bg: "rgba(156,90,60,0.18)", color: "#E8A270", border: "rgba(232,162,112,0.22)" },
    ready:    { bg: "rgba(26,141,122,0.18)", color: "#3ABFAA", border: "rgba(58,191,170,0.22)" },
    ongoing:  { bg: "rgba(59,95,191,0.18)", color: "#7B9AE8", border: "rgba(123,154,232,0.22)" },
  };

  const statusMap = variant === "dark" ? darkStatus : lightStatus;
  const badge = statusMap[project.status] || statusMap.ready;

  // ── RERA display helper ──
  const reraDisplay =
    project.reraNumber &&
    project.reraNumber !== "Application Pending — RERA Number to be updated upon registration"
      ? `RERA: ${project.reraNumber}`
      : project.rera
      ? `RERA: ${project.rera}`
      : null;

  // ════════════════════════════════════════════
  // DARK variant — glassmorphism (homepage hero)
  // ════════════════════════════════════════════
  if (variant === "dark") {
    return (
      <article
        className="group relative overflow-hidden rounded-2xl transition-all duration-400"
        style={{
          background: "rgba(255,253,246,0.04)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(245,179,1,0.12)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.22)",
        }}
      >
        {/* Hover shimmer */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none z-10"
          style={{ background: "linear-gradient(135deg, rgba(245,179,1,0.07) 0%, transparent 60%)" }}
        />

        {/* Image */}
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
          <div className="absolute top-3 left-3 flex flex-col gap-2 items-start z-20">
            <span className="px-3 py-1 rounded-full text-[0.70rem] font-semibold uppercase tracking-wider"
              style={{ background: badge.bg, color: badge.color, border: `1px solid ${badge.border}`, backdropFilter: "blur(8px)" }}>
              {project.statusLabel}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[0.65rem] font-semibold uppercase tracking-wider"
              style={{ background: "rgba(14,18,24,0.70)", color: "rgba(245,179,1,0.95)", border: "1px solid rgba(245,179,1,0.20)", backdropFilter: "blur(8px)" }}>
              {project.type}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-5">
          <Tag style={{ fontSize: "1.1rem", marginBottom: "0.35rem" }}>
            <Link href={`/projects/${project.slug}`}
              style={{ color: "#FFFDF6", fontFamily: "var(--font-serif)", fontWeight: 700, textDecoration: "none" }}
              className="hover:text-[#F5B301] transition-colors">
              {project.name}
            </Link>
          </Tag>
          <div className="flex items-center gap-1.5 text-[0.82rem] mb-3" style={{ color: "rgba(255,253,246,0.55)" }}>
            <MapPin size={12} style={{ color: "rgba(245,179,1,0.65)", flexShrink: 0 }} />
            {project.location}
          </div>
          <p className="text-[0.85rem] leading-relaxed mb-3 line-clamp-2" style={{ color: "rgba(255,253,246,0.50)" }}>
            {project.description}
          </p>
          {project.price && (
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", fontWeight: 700, color: "#F5B301", marginBottom: "0.2rem" }}>
              {project.price}
            </div>
          )}
          <div style={{ fontSize: "0.73rem", color: "rgba(255,253,246,0.35)" }}>
            Developer: {project.developer}{reraDisplay ? ` · ${reraDisplay}` : ""}
          </div>
        </div>

        {/* Footer */}
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

  // ════════════════════════════════════════════
  // LIGHT variant — white card (projects listing)
  // ════════════════════════════════════════════
  return (
    <article className="project-card-light">
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
        <Image
          src={project.heroImage}
          alt={`${project.name} — ${project.type} in ${project.location}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        {/* Subtle gradient at bottom of image */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,13,18,0.30) 0%, transparent 45%)" }} />

        {/* Status + type badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start z-10">
          <span
            className="px-2.5 py-0.5 rounded-full text-[0.68rem] font-semibold uppercase tracking-wider"
            style={{ background: badge.bg, color: badge.color, border: `1px solid ${badge.border}`, backdropFilter: "blur(6px)" }}
          >
            {project.statusLabel}
          </span>
          <span
            className="px-2.5 py-0.5 rounded-full text-[0.62rem] font-semibold uppercase tracking-wider"
            style={{ background: "rgba(14,18,24,0.68)", color: "rgba(245,179,1,0.95)", border: "1px solid rgba(245,179,1,0.22)", backdropFilter: "blur(6px)" }}
          >
            {project.type}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Title */}
        <p className="card-title">
          <Link href={`/projects/${project.slug}`}>
            {project.name}
          </Link>
        </p>

        {/* Location */}
        <p className="card-location">
          <MapPin size={12} style={{ color: "#F5B301", flexShrink: 0 }} />
          {project.location}
        </p>

        {/* Description */}
        <p className="card-description">{project.description}</p>

        {/* Price */}
        {project.price && (
          <p className="card-price">
            {project.price}
            {project.priceNote && (
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 400, color: "#7A7A7A", marginLeft: "0.4rem" }}>
                {project.priceNote}
              </span>
            )}
          </p>
        )}

        {/* Developer + RERA */}
        <p className="card-meta">
          {project.developer}{reraDisplay ? ` · ${reraDisplay}` : ""}
        </p>

        {/* Footer buttons */}
        <div className="card-footer">
          <Link href={`/projects/${project.slug}`} className="btn-view-details">
            View Details <ArrowRight size={13} />
          </Link>
          <a href={CONFIG.callLink} className="btn btn-primary btn-sm flex-1 justify-center" style={{ borderRadius: "100px" }}>
            <Phone size={13} /> Call Now
          </a>
        </div>
      </div>
    </article>
  );
}
