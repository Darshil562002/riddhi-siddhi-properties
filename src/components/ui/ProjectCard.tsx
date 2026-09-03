import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import type { Project } from "@/types";
import { CONFIG } from "@/lib/constants";

interface ProjectCardProps {
  project: Project;
  titleTag?: "h2" | "h3";
}

export default function ProjectCard({ project, titleTag: Tag = "h3" }: ProjectCardProps) {
  const statusStyles: Record<string, { bg: string; color: string }> = {
    upcoming: { bg: "rgba(156,90,60,0.18)", color: "#E8A270" },
    ready:    { bg: "rgba(26,141,122,0.18)", color: "#3ABFAA" },
    ongoing:  { bg: "rgba(59,95,191,0.18)", color: "#7B9AE8" },
  };

  const badge = statusStyles[project.status] || statusStyles.ready;

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
      {/* Hover shimmer overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none z-10"
        style={{
          background: "linear-gradient(135deg, rgba(245,179,1,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.heroImage}
          alt={`${project.name} — ${project.type} in ${project.location}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-108 transition-transform duration-600"
          style={{ transition: "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)" }}
        />
        {/* Gradient overlay on image bottom */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(10,13,18,0.55) 0%, transparent 50%)",
          }}
        />
        {/* Status badge */}
        <span
          className="absolute top-3 left-3 px-3 py-1 rounded-full text-[0.72rem] font-semibold uppercase tracking-wider backdrop-blur-sm"
          style={{
            background: badge.bg,
            color: badge.color,
            border: `1px solid ${badge.color}33`,
          }}
        >
          {project.statusLabel}
        </span>
        {/* Type badge top right */}
        <span
          className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[0.68rem] font-semibold uppercase tracking-wider backdrop-blur-sm"
          style={{
            background: "rgba(14,18,24,0.65)",
            color: "rgba(245,179,1,0.90)",
            border: "1px solid rgba(245,179,1,0.18)",
          }}
        >
          {project.type}
        </span>
      </div>

      {/* Body */}
      <div className="p-5">
        <Tag className="text-[1.15rem] mb-1.5 font-serif font-bold leading-snug" style={{ color: "#FFFDF6" }}>
          <Link
            href={`/projects/${project.slug}`}
            className="no-underline transition-colors hover:text-[#F5B301]"
            style={{ color: "#FFFDF6" }}
          >
            {project.name}
          </Link>
        </Tag>
        <div
          className="flex items-center gap-1.5 text-[0.82rem] mb-3"
          style={{ color: "rgba(255,253,246,0.55)" }}
        >
          <MapPin size={12} style={{ color: "rgba(245,179,1,0.60)" }} />
          {project.location}
        </div>
        <p
          className="text-[0.85rem] leading-relaxed mb-3 line-clamp-2"
          style={{ color: "rgba(255,253,246,0.50)" }}
        >
          {project.description}
        </p>
        {project.price && (
          <div
            className="font-serif text-[1.35rem] font-bold mb-2"
            style={{ color: "#F5B301" }}
          >
            {project.price}
          </div>
        )}
        <div
          className="text-[0.75rem]"
          style={{ color: "rgba(255,253,246,0.35)" }}
        >
          Developer: {project.developer}
          {project.reraNumber &&
          project.reraNumber !==
            "Application Pending — RERA Number to be updated upon registration"
            ? ` | RERA: ${project.reraNumber}`
            : project.rera
            ? ` | RERA: ${project.rera}`
            : ""}
        </div>
      </div>

      {/* Footer */}
      <div
        className="flex items-center gap-3 px-5 py-3.5"
        style={{ borderTop: "1px solid rgba(245,179,1,0.10)" }}
      >
        <Link
          href={`/projects/${project.slug}`}
          className="btn btn-outline-white btn-sm flex-1 justify-center"
          style={{ borderRadius: "100px" }}
        >
          View Details
        </Link>
        <a
          href={CONFIG.callLink}
          className="btn btn-gold btn-sm flex-1 justify-center"
          style={{ borderRadius: "100px" }}
        >
          <Phone size={13} />
          Call Now
        </a>
      </div>
    </article>
  );
}
