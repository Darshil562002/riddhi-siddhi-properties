import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Download, ExternalLink, CheckCircle, Play, Shield } from "lucide-react";
import { getProjectBySlug, getAllProjectSlugs, PROJECTS } from "@/lib/projects";
import ProjectEnquiryForm from "@/components/forms/ProjectEnquiryForm";
import ProjectCard from "@/components/ui/ProjectCard";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.name} — ${project.type} in ${project.location} | Riddhi Siddhi Properties`,
    description: `${project.name} by ${project.developer} in ${project.location}. ${project.description} Contact Riddhi Siddhi Properties for site visits and expert guidance.`,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: `${project.name} — ${project.type}`,
      description: project.description,
      images: [{ url: project.heroImage, alt: project.name }],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const relatedProjects = PROJECTS.filter((p) => p.id !== project.id).slice(0, 3);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: project.name,
    description: project.description,
    url: `${CONFIG.siteUrl}/projects/${project.slug}`,
    offers: project.price
      ? { "@type": "Offer", price: project.price, priceCurrency: "INR", availability: "https://schema.org/InStock" }
      : undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: project.location,
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
  };

  return (
    <main>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Breadcrumb */}
      <nav className="breadcrumb-bar" aria-label="Breadcrumb">
        <div className="container">
          <ol className="breadcrumb-list">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li className="active">{project.name}</li>
          </ol>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="relative aspect-[21/9] max-h-[520px] overflow-hidden bg-cream">
        <Image
          src={project.heroImage}
          alt={`${project.name} — ${project.type} in ${project.location}`}
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <span className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-[0.75rem] font-semibold uppercase tracking-wider ${
          project.status === "upcoming" ? "bg-amber-100 text-amber-800" : "bg-green-pale text-forest"
        }`}>{project.statusLabel}</span>
      </div>

      {project.underConstruction && (
        <div className="bg-amber-50 border-b border-amber-200">
          <div className="container py-3">
            <div className="flex items-center gap-2 text-amber-800 text-[0.9rem]">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse flex-shrink-0" />
              <strong>Under Construction:</strong> This project is currently in the pre-launch/construction phase. Details may be subject to change.
            </div>
          </div>
        </div>
      )}

      {/* Sticky Meta Strip */}
      <div className="bg-white border-b border-border-lt sticky top-[72px] z-20 shadow-sm">
        <div className="container py-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 flex-wrap">
            <div className="flex flex-wrap items-center gap-6">
              <div>
                <div className="text-[0.7rem] text-text-light font-semibold uppercase tracking-wider">Location</div>
                <div className="font-semibold text-dark flex items-center gap-1.5"><MapPin size={14} className="text-forest" /> {project.location}</div>
              </div>
              <div className="w-px h-8 bg-border hidden md:block" />
              <div>
                <div className="text-[0.7rem] text-text-light font-semibold uppercase tracking-wider">Type</div>
                <div className="font-semibold text-dark">{project.type}</div>
              </div>
              <div className="w-px h-8 bg-border hidden md:block" />
              <div>
                <div className="text-[0.7rem] text-text-light font-semibold uppercase tracking-wider">Developer</div>
                <div className="font-semibold text-dark">{project.developer}</div>
              </div>
              {project.possessionDate && <>
                <div className="w-px h-8 bg-border hidden md:block" />
                <div>
                  <div className="text-[0.7rem] text-text-light font-semibold uppercase tracking-wider">Possession</div>
                  <div className="font-semibold text-dark">{project.possessionDate}</div>
                </div>
              </>}
            </div>
            {project.price && (
              <div className="text-right">
                <div className="text-[0.7rem] text-text-light font-semibold uppercase tracking-wider">Starting From</div>
                <div className="font-serif text-2xl font-bold text-forest">{project.price}</div>
                {project.priceNote && <div className="text-[0.72rem] text-text-light">{project.priceNote}</div>}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-ivory">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left: Details */}
            <div className="lg:col-span-2 space-y-10">

              {/* About */}
              <div>
                <h1 className="text-[clamp(1.8rem,3.5vw,2.4rem)] mb-2">{project.name}</h1>
                <p className="text-text-mid flex items-center gap-1.5 mb-5"><MapPin size={14} />{project.location}</p>
                <p className="text-[1rem] text-text-mid leading-[1.85]">{project.longDescription}</p>
              </div>

              {/* Configurations */}
              <div>
                <h2 className="text-[1.4rem] mb-5">Configurations &amp; Pricing</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border border-border-lt rounded-xl overflow-hidden text-[0.9rem]">
                    <thead>
                      <tr className="bg-forest text-white">
                        <th className="text-left px-4 py-3 font-semibold">Unit Type</th>
                        <th className="text-left px-4 py-3 font-semibold">Carpet Area</th>
                        <th className="text-left px-4 py-3 font-semibold">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {project.configurations.map((c, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-warm-white"}>
                          <td className="px-4 py-3 font-semibold text-dark">{c.type}</td>
                          <td className="px-4 py-3 text-text-mid">{c.area}</td>
                          <td className="px-4 py-3 font-semibold text-forest">{c.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Specifications & RERA */}
              <div>
                <h2 className="text-[1.4rem] mb-5">Project Specifications &amp; Legal</h2>
                <div className="grid sm:grid-cols-2 gap-0 border border-border-lt rounded-xl overflow-hidden mb-5">
                  {project.specifications.map((s, i) => (
                    <div key={i} className={`flex items-start gap-3 px-5 py-4 ${i % 2 === 0 ? "bg-white" : "bg-warm-white"} border-b border-border-lt last:border-0`}>
                      <div className="text-[0.75rem] font-semibold uppercase tracking-wider text-text-light min-w-[120px] pt-0.5">{s.label}</div>
                      <div className="font-semibold text-dark text-[0.9rem]">{s.value}</div>
                    </div>
                  ))}
                </div>
                
                {/* RERA Section */}
                <div className="bg-green-pale/30 border border-forest/20 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield size={18} className="text-forest" />
                    <h3 className="text-[1.1rem] text-dark">RERA Registration</h3>
                  </div>
                  <p className="text-[0.88rem] text-text-mid mb-3">
                    This project is registered under MahaRERA and its details can be verified on the official website under the registration number:
                  </p>
                  <div className="flex items-center flex-wrap gap-4">
                    <span className="inline-block px-4 py-2 bg-white border border-forest/30 rounded-lg font-mono font-semibold text-forest text-[0.95rem]">
                      {project.reraNumber || "Number Pending"}
                    </span>
                    {project.reraUrl && (
                      <a 
                        href={project.reraUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[0.85rem] text-forest font-semibold hover:underline flex items-center gap-1"
                      >
                        Verify on MahaRERA <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="text-[1.4rem] mb-5">Amenities</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {project.amenities.map((a) => (
                    <div key={a} className="flex items-center gap-2.5 bg-white border border-border-lt rounded-lg px-4 py-2.5 text-[0.85rem] text-text-mid">
                      <CheckCircle size={15} className="text-forest flex-shrink-0" />
                      {a}
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Advantages */}
              <div>
                <h2 className="text-[1.4rem] mb-5">Location Advantages</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.locationAdvantages.map((l) => (
                    <div key={l} className="flex items-start gap-2.5 text-[0.88rem] text-text-mid">
                      <MapPin size={14} className="text-forest flex-shrink-0 mt-0.5" />{l}
                    </div>
                  ))}
                </div>
              </div>

              {/* Nearby Infrastructure */}
              <div>
                <h2 className="text-[1.4rem] mb-5">Nearby Infrastructure</h2>
                <div className="grid sm:grid-cols-2 gap-2">
                  {project.nearbyInfra.map((n) => (
                    <div key={n} className="flex items-center gap-2 bg-green-pale rounded-lg px-4 py-2.5 text-[0.85rem] text-forest font-medium">
                      <CheckCircle size={13} />{n}
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Gallery */}
              {project.images.length > 1 && (
                <div>
                  <h2 className="text-[1.4rem] mb-5">Project Gallery</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {project.images.map((img, i) => (
                      <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden">
                        <Image src={img.src} alt={img.alt} fill sizes="(max-width: 640px) 50vw, 33vw" className="object-cover hover:scale-105 transition-transform duration-500" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Video */}
              {project.youtubeUrl && (
                <div>
                  <h2 className="text-[1.4rem] mb-5">Project Walkthrough Video</h2>
                  <a href={project.youtubeUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 bg-white border border-border-lt rounded-xl hover:shadow-md transition-all group no-underline">
                    <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-white flex-shrink-0">
                      <Play size={22} />
                    </div>
                    <div>
                      <div className="font-semibold text-dark group-hover:text-forest transition-colors">Watch Video Walkthrough</div>
                      <div className="text-[0.82rem] text-text-light">Opens on YouTube</div>
                    </div>
                    <ExternalLink size={16} className="ml-auto text-text-light" />
                  </a>
                </div>
              )}
            </div>

            {/* Right: Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="bg-white border border-border-lt rounded-xl p-6 shadow-sm sticky top-[150px]">
                <h3 className="text-[1.2rem] mb-1">Interested in {project.name}?</h3>
                <p className="text-text-mid text-[0.85rem] mb-5">Talk to Keval Gala for genuine guidance, pricing details, and to book a site visit.</p>

                <div className="flex flex-col gap-3 mb-6">
                  <a href={CONFIG.callLink} className="btn btn-primary justify-center" id={`detail-call-btn-${project.slug}`}>
                    <Phone size={15} /> Call Now
                  </a>
                  <a href={CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp justify-center" id={`detail-wa-btn-${project.slug}`}>
                    <WhatsAppIcon size={15} /> WhatsApp Enquiry
                  </a>
                  {project.brochureUrl && (
                    <a href={project.brochureUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline justify-center" id={`detail-brochure-btn-${project.slug}`}>
                      <Download size={15} /> Download Brochure
                    </a>
                  )}
                  {project.mapsUrl && (
                    <a href={project.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline justify-center" id={`detail-map-btn-${project.slug}`}>
                      <MapPin size={15} /> View on Google Maps
                    </a>
                  )}
                </div>

                <div className="border-t border-border-lt pt-5">
                  <h4 className="text-[0.95rem] mb-3">Send an Enquiry</h4>
                  <ProjectEnquiryForm projectName={project.name} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-warm-white border-t border-border-lt" aria-labelledby="related-heading">
          <div className="container">
            <h2 id="related-heading" className="text-center mb-10">You May Also Like</h2>
            <div className="grid md:grid-cols-3 gap-7">
              {relatedProjects.map((p) => <ProjectCard key={p.id} project={p} titleTag="h3" />)}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
