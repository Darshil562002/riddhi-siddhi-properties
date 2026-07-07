import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  titleTag?: "h2" | "h3";
}

export default function ProjectCard({ project, titleTag: Tag = "h3" }: ProjectCardProps) {
  // Badge styling per status
  const statusStyles: Record<string, { bg: string; color: string }> = {
    upcoming: { bg: "#FFF7D1", color: "#9C5A3C" },  // brick brown — pre-launch
    ready:    { bg: "#E4F5F2", color: "#1A8D7A" },  // teal — ready to move
    ongoing:  { bg: "#EEF4FF", color: "#3B5FBF" },  // blue — ongoing
  };

  const badge = statusStyles[project.status] || statusStyles.ready;

  return (
    <article className="card group">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.heroImage}
          alt={`${project.name} — ${project.type} in ${project.location}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span
          className="absolute top-3 left-3 px-3 py-1 rounded-full text-[0.72rem] font-semibold uppercase tracking-wider"
          style={{ background: badge.bg, color: badge.color }}
        >
          {project.statusLabel}
        </span>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="text-[0.72rem] font-semibold uppercase tracking-wider mb-1" style={{ color: "#9C5A3C" }}>
          {project.type}
        </div>
        <Tag className="text-[1.2rem] mb-1 !font-serif !font-semibold">
          <Link
            href={`/projects/${project.slug}`}
            className="no-underline transition-colors"
            style={{ color: "#1F2933" }}
          >
            {project.name}
          </Link>
        </Tag>
        <div className="flex items-center gap-1.5 text-[0.82rem] mb-3" style={{ color: "#6A6A6A" }}>
          <MapPin size={12} />
          {project.location}
        </div>
        <p className="text-[0.85rem] leading-relaxed mb-3 line-clamp-2" style={{ color: "#6A6A6A" }}>
          {project.description}
        </p>
        {project.price && (
          <div className="font-serif text-[1.3rem] font-bold mb-2" style={{ color: "#1F2933" }}>
            {project.price}
          </div>
        )}
        <div className="text-[0.78rem]" style={{ color: "#9C5A3C" }}>
          Developer: {project.developer}
          {project.rera && ` | ${project.rera}`}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-3 px-5 py-3" style={{ borderTop: "1px solid #E0D5B8", background: "#FFF7D1" }}>
        <Link
          href={`/projects/${project.slug}`}
          className="btn btn-outline btn-sm flex-1 justify-center"
        >
          View Details
        </Link>
        <a
          href="tel:+919619422555"
          className="btn btn-primary btn-sm flex-1 justify-center"
        >
          <Phone size={13} />
          Call Now
        </a>
      </div>
    </article>
  );
}
