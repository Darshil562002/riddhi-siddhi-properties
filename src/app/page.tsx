import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, CheckCircle, Home, Calculator, FileText, Shield, MapPin } from "lucide-react";
import { getFeaturedProjects } from "@/lib/projects";
import { CONFIG } from "@/lib/constants";
import ProjectCard from "@/components/ui/ProjectCard";
import { WhatsAppIcon } from "@/components/ui/Icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Riddhi Siddhi Properties — Trusted Real Estate Experts | Shahapur–Asangaon, Thane",
  description:
    "Riddhi Siddhi Properties helps families find their dream home in Shahapur–Asangaon, Thane. Expert guidance on residential projects, PM Awas Yojana, home loans, and legal verification. Contact Keval Gala today.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featuredProjects = getFeaturedProjects(3);

  return (
    <main>
      {/* ── HERO ── */}
      <section
        className="relative min-h-[88vh] flex items-center overflow-hidden"
        style={{ background: "#FFF7D1" }}
        aria-label="Hero"
      >
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #F5B301 1px, transparent 0)", backgroundSize: "44px 44px", opacity: 0.10 }} />

        <div className="container relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              {/* Trust chip */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[0.75rem] font-semibold tracking-widest uppercase mb-8" style={{ background: "#E4F5F2", color: "#1A8D7A", border: "1px solid rgba(26,141,122,0.25)" }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#1A8D7A" }} />
                Trusted by families across Shahapur–Asangaon
              </div>

              <h1 className="text-[clamp(2.2rem,5vw,3.5rem)] font-serif font-bold leading-[1.15] mb-6" style={{ color: "#1F2933" }}>
                Find Your Perfect<br />
                <span style={{ color: "#F5B301" }}>Home</span> With<br />
                Confidence
              </h1>
              <p className="text-[1.05rem] leading-relaxed mb-8 max-w-lg" style={{ color: "#4A4A4A" }}>
                Riddhi Siddhi Properties brings you verified residential projects,
                honest guidance, and end-to-end support — from site visit to keys in hand.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/projects" className="btn btn-gold btn-lg" id="hero-explore-btn">
                  <Home size={18} />
                  Explore Projects
                </Link>
                <Link href="/contact#site-visit" className="btn btn-outline btn-lg" id="hero-visit-btn">
                  Book a Site Visit
                </Link>
              </div>

              <div className="flex flex-wrap gap-5">
                {["Local Market Expertise", "Transparent Guidance", "Verified Projects"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-[0.85rem]" style={{ color: "#4A4A4A" }}>
                    <CheckCircle size={15} style={{ color: "#1A8D7A", flexShrink: 0 }} />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats card */}
            <div className="hidden lg:flex justify-center">
              <div className="rounded-2xl p-8 w-full max-w-sm" style={{ background: "#FFFDF6", border: "1px solid #E0D5B8", boxShadow: "0 8px 40px rgba(31,41,51,0.10)" }}>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {[
                    { num: "500+", label: "Families Served" },
                    { num: "10+",  label: "Years Experience" },
                    { num: "100%", label: "Honest Guidance" },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="font-serif text-3xl font-bold mb-1" style={{ color: "#F5B301" }}>{s.num}</div>
                      <div className="text-[0.72rem] uppercase tracking-wider" style={{ color: "#6A6A6A" }}>{s.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3 pt-6" style={{ borderTop: "1px solid #E0D5B8" }}>
                  <a href={CONFIG.callLink} className="btn btn-gold btn-sm justify-center">
                    <Phone size={14} /> {CONFIG.phoneDisplay}
                  </a>
                  <a href={CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-sm justify-center">
                    <WhatsAppIcon size={14} /> WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div style={{ background: "#1F2933" }} className="py-4 overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {[
              "Deep Local Knowledge",
              "Honest Property Guidance",
              "Home Loan Assistance",
              "Legal Verification Support",
              "Zero Brokerage Surprises",
            ].map((t) => (
              <div key={t} className="flex items-center gap-2 text-[0.82rem] font-medium whitespace-nowrap" style={{ color: "rgba(255,253,246,0.75)" }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#F5B301" }} />
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FEATURED PROJECTS ── */}
      <section className="py-20" style={{ background: "#FFF7D1" }} id="featured-projects" aria-labelledby="projects-heading">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Featured Listings</span>
            <h2 id="projects-heading" className="mt-2 mb-2">Handpicked Projects For You</h2>
            <div className="divider-gold" />
            <p>Carefully curated residential projects with full guidance — from site visit to possession.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} titleTag="h3" />
            ))}
          </div>
          <div className="text-center mt-14">
            <Link href="/projects" className="btn btn-outline btn-lg" id="view-all-projects-btn">
              View All Projects
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-16" style={{ background: "#1F2933" }} aria-label="Key statistics">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "500+", label: "Families Served" },
              { num: "50+",  label: "Projects Listed" },
              { num: "10+",  label: "Years of Experience" },
              { num: "100%", label: "Transparent Guidance" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold leading-none mb-2" style={{ color: "#F5B301" }}>{s.num}</div>
                <div className="text-[0.8rem] uppercase tracking-wider" style={{ color: "rgba(255,253,246,0.60)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20" style={{ background: "#FFFDF6" }} id="why-choose" aria-labelledby="why-heading">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Promise</span>
            <h2 id="why-heading" className="mt-2 mb-2">Why Families Trust Riddhi Siddhi Properties</h2>
            <div className="divider-gold" />
            <p>We go beyond just showing properties — we guide you through every step of your home buying journey.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <MapPin size={22} style={{ color: "#1A8D7A" }} />, title: "Deep Local Knowledge", desc: "We know every neighbourhood, lane, and upcoming development in Shahapur–Asangaon. Our ground-level expertise helps you choose the right location." },
              { icon: <Shield size={22} style={{ color: "#1A8D7A" }} />, title: "Honest & Transparent Guidance", desc: "No hidden charges, no pressure tactics. We give you the complete picture — pros, cons, and everything in between — so you can decide confidently." },
              { icon: <Phone size={22} style={{ color: "#1A8D7A" }} />, title: "Professional & Dedicated Support", desc: "From the first call to possession, Keval Gala personally oversees your property journey. You always have a trusted advisor at your side." },
              { icon: <Calculator size={22} style={{ color: "#1A8D7A" }} />, title: "Home Loan & Finance Assistance", desc: "We connect you with the best bank loan options, help with documentation, and guide you through PM Awas Yojana subsidy eligibility." },
              { icon: <CheckCircle size={22} style={{ color: "#1A8D7A" }} />, title: "Legal Verification & Checklist", desc: "We help you verify project approvals, title documents, RERA status, and ensure your investment is legally sound before you commit." },
              { icon: <Home size={22} style={{ color: "#1A8D7A" }} />, title: "End-to-End Buyer Assistance", desc: "Site visits, floor plan selection, price negotiation, documentation, registration — we stay with you from first visit to final handover." },
            ].map((f) => (
              <div key={f.title} className="rounded-xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300" style={{ background: "#FFF7D1", border: "1px solid #E0D5B8" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "#E4F5F2" }}>
                  {f.icon}
                </div>
                <h4 className="mb-2">{f.title}</h4>
                <p className="text-[0.88rem] leading-relaxed" style={{ color: "#6A6A6A" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUYER HELP SHORTCUTS ── */}
      <section className="py-20" style={{ background: "#FFF7D1" }} id="buyer-help-shortcuts" aria-labelledby="buyer-help-heading">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Buyer Resources</span>
            <h2 id="buyer-help-heading" className="mt-2 mb-2">Tools &amp; Guidance for Smart Home Buyers</h2>
            <div className="divider-gold" />
            <p>We help you understand loans, schemes, legalities, and paperwork — not just find a property.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/buyer-help/pm-awas-yojana",       icon: <Home size={24} style={{ color: "#1A8D7A" }} />, title: "PM Awas Yojana",           desc: "Get up to ₹2.67 lakh government subsidy on your home loan. Check eligibility, documents, and how to apply.",        cta: "Learn More",     id: "shortcut-pmay" },
              { href: "/buyer-help/emi-calculator",        icon: <Calculator size={24} style={{ color: "#1A8D7A" }} />, title: "EMI Calculator",     desc: "Plan your monthly payments with our free offline calculator. See total interest, tenure breakdowns, and loan comparisons.", cta: "Calculate EMI", id: "shortcut-emi" },
              { href: "/buyer-help/home-loan-documents",   icon: <FileText size={24} style={{ color: "#1A8D7A" }} />, title: "Home Loan Documents", desc: "Complete document checklist for salaried and self-employed buyers. Be prepared when you visit the bank.",               cta: "View Checklist", id: "shortcut-docs" },
              { href: "/buyer-help/legal-title-check",     icon: <Shield size={24} style={{ color: "#1A8D7A" }} />, title: "Legal & Title Verification", desc: "How to check if a project is legally approved, title clear, and safe to buy. Essential reading before you invest.", cta: "Read Guide",    id: "shortcut-legal" },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 no-underline block"
                style={{ background: "#FFFDF6", border: "1px solid #E0D5B8" }}
                id={card.id}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300" style={{ background: "#E4F5F2" }}>
                  {card.icon}
                </div>
                <h3 className="text-[1.1rem] mb-2" style={{ color: "#1F2933" }}>{card.title}</h3>
                <p className="text-[0.85rem] leading-relaxed mb-4" style={{ color: "#6A6A6A" }}>{card.desc}</p>
                <span className="flex items-center gap-1.5 font-semibold text-[0.85rem] group-hover:gap-2.5 transition-all" style={{ color: "#1A8D7A" }}>
                  {card.cta} <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20" style={{ background: "#E4F5F2" }} id="testimonials" aria-labelledby="testimonials-heading">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Client Stories</span>
            <h2 id="testimonials-heading" className="mt-2 mb-2">What Our Buyers Say</h2>
            <div className="divider-gold" />
            <p>Real experiences from families who found their homes with our guidance.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { initial: "R", name: "Rajesh P. — Shahapur",  project: "Symphonee Greens, 2025", text: "Keval bhai guided us through the entire process. From shortlisting the right flat to getting our loan approved — everything was handled professionally. We are very happy with our new home!" },
              { initial: "S", name: "Sunita M. — Asangaon",  project: "La Luxuria, 2024",        text: "I was confused about PM Awas Yojana and eligibility. Riddhi Siddhi team explained everything clearly and helped me save ₹1.80 lakhs on my home loan. Very honest and helpful team." },
              { initial: "P", name: "Prakash K. — Thane",    project: "Royal City, 2024",         text: "We were first-time buyers and felt very lost. Keval sir was patient, never pushy, and showed us exactly what suited our budget. The legal checklist he shared saved us from a risky deal." },
            ].map((t) => (
              <div key={t.name} className="rounded-xl p-6 shadow-sm" style={{ background: "#FFFDF6", border: "1px solid #E0D5B8" }}>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="star" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-5xl font-serif leading-none" style={{ color: "rgba(245,179,1,0.35)" }}>&ldquo;</span>
                <p className="text-[0.9rem] leading-relaxed -mt-4 mb-5" style={{ color: "#4A4A4A" }}>{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-serif font-bold text-lg" style={{ background: "#1A8D7A" }}>
                    {t.initial}
                  </div>
                  <div>
                    <div className="font-semibold text-[0.9rem]" style={{ color: "#1F2933" }}>{t.name}</div>
                    <div className="text-[0.75rem]" style={{ color: "#6A6A6A" }}>Purchased: {t.project}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20" style={{ background: "#FFF7D1" }} aria-label="Call to action">
        <div className="container">
          <div className="rounded-2xl p-10 md:p-14 text-center" style={{ background: "#1F2933" }}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[0.72rem] font-semibold tracking-widest uppercase mb-5" style={{ background: "rgba(245,179,1,0.15)", border: "1px solid rgba(245,179,1,0.30)", color: "#F5B301" }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#F5B301" }} />
              Free Consultation Available
            </div>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] mb-3" style={{ color: "#FFFDF6" }}>Ready to Find Your Dream Home?</h2>
            <p className="text-[1rem] max-w-lg mx-auto mb-8" style={{ color: "rgba(255,253,246,0.70)" }}>
              Connect with Keval Gala today for a free consultation, site visit, or expert property advice.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href={CONFIG.callLink} className="btn btn-gold btn-lg" id="cta-call-btn">
                <Phone size={18} /> Call {CONFIG.phoneDisplay}
              </a>
              <Link href="/contact#site-visit" className="btn btn-outline-white btn-lg" id="cta-visit-btn">
                Book a Site Visit
              </Link>
              <a href={CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg" id="cta-whatsapp-btn">
                <WhatsAppIcon size={18} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
