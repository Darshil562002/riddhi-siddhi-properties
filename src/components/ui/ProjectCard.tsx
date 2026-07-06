import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  titleTag?: "h2" | "h3";
}

export default function ProjectCard({ project, titleTag: Tag = "h3" }: ProjectCardProps) {
  const statusColors: Record<string, string> = {
    upcoming: "bg-amber-100 text-amber-800",
    ready: "bg-green-pale text-forest",
    ongoing: "bg-blue-100 text-blue-800",
  };

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
          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[0.72rem] font-semibold uppercase tracking-wider ${
            statusColors[project.status] || statusColors.ready
          }`}
        >
          {project.statusLabel}
        </span>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="text-[0.72rem] font-semibold uppercase tracking-wider text-text-light mb-1">
          {project.type}
        </div>
        <Tag className="text-[1.2rem] mb-1 !font-serif !font-semibold">
          <Link
            href={`/projects/${project.slug}`}
            className="text-dark hover:text-forest transition-colors no-underline"
          >
            {project.name}
          </Link>
        </Tag>
        <div className="flex items-center gap-1.5 text-[0.82rem] text-text-mid mb-3">
          <MapPin size={12} />
          {project.location}
        </div>
        <p className="text-[0.85rem] text-text-mid leading-relaxed mb-3 line-clamp-2">
          {project.description}
        </p>
        {project.price && (
          <div className="font-serif text-[1.3rem] font-semibold text-forest mb-2">
            {project.price}
          </div>
        )}
        <div className="text-[0.78rem] text-text-light">
          Developer: {project.developer}
          {project.rera && ` | ${project.rera}`}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-3 px-5 py-3 border-t border-border-lt bg-warm-white/50">
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
