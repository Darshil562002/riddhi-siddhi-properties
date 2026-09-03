import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, CheckCircle, Home, Calculator, FileText, Shield, MapPin } from "lucide-react";
import { getFeaturedProjects } from "@/lib/projects";
import { CONFIG } from "@/lib/constants";
import ProjectCard from "@/components/ui/ProjectCard";
import { WhatsAppIcon } from "@/components/ui/Icons";
import ScrollReveal from "@/components/ui/ScrollReveal";
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
        className="relative min-h-[100svh] flex items-start lg:items-center overflow-hidden"
        aria-label="Hero"
        style={{ marginTop: "-72px" }}
      >
        {/* Background image */}
        <Image
          src="/hero-bg.jpg"
          alt="Residential township nestled in green hills — Shahapur Asangaon"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Dark cinematic gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,13,18,0.88) 0%, rgba(10,13,18,0.65) 50%, rgba(10,13,18,0.80) 100%)",
          }}
        />

        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(245,179,1,0.10) 1px, transparent 0)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* Radial gold glow top-left */}
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 0% 0%, rgba(245,179,1,0.12) 0%, transparent 60%)",
          }}
        />

        <div 
          className="container relative z-10 pb-12 lg:py-24"
          style={{ paddingTop: "140px" }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              {/* Trust chip */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-[0.72rem] font-semibold tracking-widest uppercase mb-8"
                style={{
                  background: "rgba(26,141,122,0.15)",
                  color: "#3ABFAA",
                  border: "1px solid rgba(26,141,122,0.30)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full pulse-dot"
                  style={{ background: "#3ABFAA" }}
                />
                Trusted by families across Shahapur–Asangaon
              </div>

              <h1
                className="font-serif font-bold leading-[1.1] mb-6"
                style={{ color: "#FFFDF6" }}
              >
                Find Your Perfect{" "}
                <span className="gold-shimmer-text">Home</span>
                {" "}With Confidence
              </h1>
              <p
                className="text-[1.05rem] leading-relaxed mb-8 max-w-lg font-sans"
                style={{ color: "rgba(255,253,246,0.75)" }}
              >
                Riddhi Siddhi Properties brings you verified residential
                projects, honest guidance, and end-to-end support — from site
                visit to keys in hand.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10">
                <Link
                  href="/projects"
                  className="btn btn-gold btn-lg w-full sm:w-auto justify-center"
                  id="hero-explore-btn"
                >
                  <Home size={18} />
                  Explore Projects
                </Link>
                <Link
                  href="/contact#site-visit"
                  className="btn btn-outline-white btn-lg w-full sm:w-auto justify-center"
                  id="hero-visit-btn"
                >
                  Book a Site Visit
                </Link>
              </div>

              <div className="flex flex-wrap gap-5">
                {[
                  "Local Market Expertise",
                  "Transparent Guidance",
                  "Verified Projects",
                ].map((t) => (
                  <div
                    key={t}
                    className="flex items-center gap-2 text-[0.85rem] font-sans"
                    style={{ color: "rgba(255,253,246,0.70)" }}
                  >
                    <CheckCircle
                      size={15}
                      style={{ color: "#3ABFAA", flexShrink: 0 }}
                    />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Glass Stats Card */}
            <div className="hidden lg:flex justify-center">
              <div
                className="float-badge rounded-2xl p-8 w-full max-w-sm"
                style={{
                  background: "rgba(255,253,246,0.06)",
                  border: "1px solid rgba(245,179,1,0.20)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  boxShadow:
                    "0 24px 64px rgba(0,0,0,0.40), 0 0 0 1px rgba(245,179,1,0.08) inset",
                }}
              >
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {[
                    { num: "500+", label: "Families Served" },
                    { num: "10+", label: "Years Experience" },
                    { num: "100%", label: "Honest Guidance" },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <div
                        className="font-serif text-3xl font-bold mb-1 counter-number"
                        style={{ color: "#F5B301" }}
                      >
                        {s.num}
                      </div>
                      <div
                        className="text-[0.68rem] uppercase tracking-wider font-sans"
                        style={{ color: "rgba(255,253,246,0.50)" }}
                      >
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className="flex flex-col gap-3 pt-6"
                  style={{ borderTop: "1px solid rgba(245,179,1,0.15)" }}
                >
                  <a
                    href={CONFIG.callLink}
                    className="btn btn-gold btn-sm justify-center"
                  >
                    <Phone size={14} /> {CONFIG.phoneDisplay}
                  </a>
                  <a
                    href={CONFIG.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-sm justify-center"
                  >
                    <WhatsAppIcon size={14} /> WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade to next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(10,13,18,0.90))",
          }}
        />
      </section>

      {/* ── TRUST BAR ── */}
      <div
        style={{
          background: "#0A0D12",
          borderBottom: "1px solid rgba(245,179,1,0.10)",
        }}
        className="py-4 overflow-hidden"
      >
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {[
              "Deep Local Knowledge",
              "Honest Property Guidance",
              "Home Loan Assistance",
              "Legal Verification Support",
              "Zero Brokerage Surprises",
            ].map((t) => (
              <div
                key={t}
                className="flex items-center gap-2 text-[0.82rem] font-medium whitespace-nowrap font-sans"
                style={{ color: "rgba(255,253,246,0.55)" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#F5B301" }}
                />
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FEATURED PROJECTS ── */}
      <section
        className="py-14 lg:py-24"
        style={{ background: "linear-gradient(180deg, #0A0D12 0%, #0F1520 100%)" }}
        id="featured-projects"
        aria-labelledby="projects-heading"
      >
        <div className="container">
          <ScrollReveal>
            <div className="section-header section-header-light">
              <span className="eyebrow-light">Featured Listings</span>
              <h2
                id="projects-heading"
                className="mt-2 mb-2"
                style={{ color: "#FFFDF6" }}
              >
                Handpicked Projects For You
              </h2>
              <div className="divider-gold mx-auto" />
              <p style={{ color: "rgba(255,253,246,0.60)" }}>
                Carefully curated residential projects with full guidance — from
                site visit to possession.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {featuredProjects.map((project, i) => (
              <ScrollReveal key={project.id} delay={(i + 1) as 1 | 2 | 3}>
                <ProjectCard project={project} titleTag="h3" />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="text-center mt-14">
              <Link
                href="/projects"
                className="btn btn-outline-white btn-lg"
                id="view-all-projects-btn"
              >
                View All Projects
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── STATS ── */}
      <section
        className="py-12 lg:py-20"
        style={{
          background:
            "linear-gradient(135deg, #0F1520 0%, #1A2230 50%, #0F1520 100%)",
          borderTop: "1px solid rgba(245,179,1,0.10)",
          borderBottom: "1px solid rgba(245,179,1,0.10)",
        }}
        aria-label="Key statistics"
      >
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "500+", label: "Families Served" },
              { num: "50+", label: "Projects Listed" },
              { num: "10+", label: "Years of Experience" },
              { num: "100%", label: "Transparent Guidance" },
            ].map((s, i) => (
              <ScrollReveal key={s.label} delay={(i + 1) as 1 | 2 | 3 | 4}>
                <div className="text-center">
                  <div
                    className="font-serif text-[clamp(2.2rem,4vw,3.2rem)] font-bold leading-none mb-2 counter-number"
                    style={{ color: "#F5B301" }}
                  >
                    {s.num}
                  </div>
                  <div
                    className="text-[0.78rem] uppercase tracking-wider font-sans"
                    style={{ color: "rgba(255,253,246,0.45)" }}
                  >
                    {s.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section
        className="py-14 lg:py-24"
        style={{ background: "linear-gradient(180deg, #0F1520 0%, #0A0D12 100%)" }}
        id="why-choose"
        aria-labelledby="why-heading"
      >
        <div className="container">
          <ScrollReveal>
            <div className="section-header section-header-light">
              <span className="eyebrow-light">Our Promise</span>
              <h2
                id="why-heading"
                className="mt-2 mb-2"
                style={{ color: "#FFFDF6" }}
              >
                Why Families Trust Riddhi Siddhi Properties
              </h2>
              <div className="divider-gold mx-auto" />
              <p style={{ color: "rgba(255,253,246,0.60)" }}>
                We go beyond just showing properties — we guide you through
                every step of your home buying journey.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <MapPin size={22} style={{ color: "#3ABFAA" }} />,
                title: "Deep Local Knowledge",
                desc: "We know every neighbourhood, lane, and upcoming development in Shahapur–Asangaon. Our ground-level expertise helps you choose the right location.",
              },
              {
                icon: <Shield size={22} style={{ color: "#3ABFAA" }} />,
                title: "Honest & Transparent Guidance",
                desc: "No hidden charges, no pressure tactics. We give you the complete picture — pros, cons, and everything in between — so you can decide confidently.",
              },
              {
                icon: <Phone size={22} style={{ color: "#3ABFAA" }} />,
                title: "Professional & Dedicated Support",
                desc: "From the first call to possession, Keval Gala personally oversees your property journey. You always have a trusted advisor at your side.",
              },
              {
                icon: <Calculator size={22} style={{ color: "#3ABFAA" }} />,
                title: "Home Loan & Finance Assistance",
                desc: "We connect you with the best bank loan options, help with documentation, and guide you through PM Awas Yojana subsidy eligibility.",
              },
              {
                icon: <CheckCircle size={22} style={{ color: "#3ABFAA" }} />,
                title: "Legal Verification & Checklist",
                desc: "We help you verify project approvals, title documents, RERA status, and ensure your investment is legally sound before you commit.",
              },
              {
                icon: <Home size={22} style={{ color: "#3ABFAA" }} />,
                title: "End-to-End Buyer Assistance",
                desc: "Site visits, floor plan selection, price negotiation, documentation, registration — we stay with you from first visit to final handover.",
              },
            ].map((f, i) => (
              <ScrollReveal key={f.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="glass-card p-6 h-full">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: "rgba(26,141,122,0.15)",
                      border: "1px solid rgba(26,141,122,0.25)",
                    }}
                  >
                    {f.icon}
                  </div>
                  <h4
                    className="mb-2 font-sans font-semibold"
                    style={{ color: "#FFFDF6" }}
                  >
                    {f.title}
                  </h4>
                  <p
                    className="text-[0.88rem] leading-relaxed"
                    style={{ color: "rgba(255,253,246,0.55)" }}
                  >
                    {f.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUYER HELP SHORTCUTS ── */}
      <section
        className="py-14 lg:py-24"
        style={{ background: "#0A0D12" }}
        id="buyer-help-shortcuts"
        aria-labelledby="buyer-help-heading"
      >
        <div className="container">
          <ScrollReveal>
            <div className="section-header section-header-light">
              <span className="eyebrow-light">Buyer Resources</span>
              <h2
                id="buyer-help-heading"
                className="mt-2 mb-2"
                style={{ color: "#FFFDF6" }}
              >
                Tools &amp; Guidance for Smart Home Buyers
              </h2>
              <div className="divider-gold mx-auto" />
              <p style={{ color: "rgba(255,253,246,0.60)" }}>
                We help you understand loans, schemes, legalities, and
                paperwork — not just find a property.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                href: "/buyer-help/pm-awas-yojana",
                icon: <Home size={24} style={{ color: "#3ABFAA" }} />,
                title: "PM Awas Yojana",
                desc: "Get up to ₹1.80 lakh government subsidy on your home loan. Check eligibility, documents, and how to apply.",
                cta: "Learn More",
                id: "shortcut-pmay",
              },
              {
                href: "/buyer-help/emi-calculator",
                icon: <Calculator size={24} style={{ color: "#3ABFAA" }} />,
                title: "EMI Calculator",
                desc: "Plan your monthly payments with our free offline calculator. See total interest, tenure breakdowns, and loan comparisons.",
                cta: "Calculate EMI",
                id: "shortcut-emi",
              },
              {
                href: "/buyer-help/home-loan-documents",
                icon: <FileText size={24} style={{ color: "#3ABFAA" }} />,
                title: "Home Loan Documents",
                desc: "Complete document checklist for salaried and self-employed buyers. Be prepared when you visit the bank.",
                cta: "View Checklist",
                id: "shortcut-docs",
              },
              {
                href: "/buyer-help/legal-title-check",
                icon: <Shield size={24} style={{ color: "#3ABFAA" }} />,
                title: "Legal & Title Verification",
                desc: "How to check if a project is legally approved, title clear, and safe to buy. Essential reading before you invest.",
                cta: "Read Guide",
                id: "shortcut-legal",
              },
            ].map((card, i) => (
              <ScrollReveal key={card.href} delay={(i + 1) as 1 | 2 | 3 | 4}>
                <Link
                  href={card.href}
                  className="glass-card group p-6 block no-underline h-full"
                  id={card.id}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                    style={{
                      background: "rgba(26,141,122,0.15)",
                      border: "1px solid rgba(26,141,122,0.25)",
                    }}
                  >
                    {card.icon}
                  </div>
                  <h3
                    className="text-[1.05rem] mb-2 font-serif"
                    style={{ color: "#FFFDF6" }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-[0.85rem] leading-relaxed mb-4 font-sans"
                    style={{ color: "rgba(255,253,246,0.50)" }}
                  >
                    {card.desc}
                  </p>
                  <span
                    className="flex items-center gap-1.5 font-semibold text-[0.85rem] group-hover:gap-2.5 transition-all font-sans"
                    style={{ color: "#F5B301" }}
                  >
                    {card.cta} <ArrowRight size={14} />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        className="py-14 lg:py-24"
        style={{
          background:
            "linear-gradient(135deg, #0F1520 0%, #1A2230 50%, #0F1520 100%)",
          borderTop: "1px solid rgba(245,179,1,0.10)",
        }}
        id="testimonials"
        aria-labelledby="testimonials-heading"
      >
        <div className="container">
          <ScrollReveal>
            <div className="section-header section-header-light">
              <span className="eyebrow-light">Client Stories</span>
              <h2
                id="testimonials-heading"
                className="mt-2 mb-2"
                style={{ color: "#FFFDF6" }}
              >
                What Our Buyers Say
              </h2>
              <div className="divider-gold mx-auto" />
              <p style={{ color: "rgba(255,253,246,0.60)" }}>
                Real experiences from families who found their homes with our
                guidance.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                initial: "R",
                name: "Rajesh P. — Shahapur",
                project: "Symphonee Greens, 2025",
                text: "Keval bhai guided us through the entire process. From shortlisting the right flat to getting our loan approved — everything was handled professionally. We are very happy with our new home!",
              },
              {
                initial: "S",
                name: "Sunita M. — Asangaon",
                project: "La Luxuria, 2024",
                text: "I was confused about PM Awas Yojana and eligibility. Riddhi Siddhi team explained everything clearly and helped me save ₹1.80 lakhs on my home loan. Very honest and helpful team.",
              },
              {
                initial: "P",
                name: "Prakash K. — Thane",
                project: "Royal City, 2024",
                text: "We were first-time buyers and felt very lost. Keval sir was patient, never pushy, and showed us exactly what suited our budget. The legal checklist he shared saved us from a risky deal.",
              },
            ].map((t, i) => (
              <ScrollReveal key={t.name} delay={(i + 1) as 1 | 2 | 3}>
                <div className="glass-card p-6 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg
                        key={j}
                        className="star"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  {/* Quote mark */}
                  <span
                    className="text-6xl font-serif leading-none"
                    style={{ color: "rgba(245,179,1,0.25)" }}
                  >
                    &ldquo;
                  </span>
                  <p
                    className="text-[0.9rem] leading-relaxed -mt-5 mb-6 flex-1 font-sans"
                    style={{ color: "rgba(255,253,246,0.70)" }}
                  >
                    {t.text}
                  </p>
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center text-white font-serif font-bold text-lg flex-shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, #1A8D7A 0%, #147265 100%)",
                        boxShadow: "0 2px 8px rgba(26,141,122,0.30)",
                      }}
                    >
                      {t.initial}
                    </div>
                    <div>
                      <div
                        className="font-semibold text-[0.9rem] font-sans"
                        style={{ color: "#FFFDF6" }}
                      >
                        {t.name}
                      </div>
                      <div
                        className="text-[0.72rem] font-sans"
                        style={{ color: "rgba(245,179,1,0.65)" }}
                      >
                        Purchased: {t.project}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className="py-14 lg:py-24"
        style={{ background: "#0A0D12" }}
        aria-label="Call to action"
      >
        <div className="container">
          <ScrollReveal>
            <div
              className="rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #1A2230 0%, #0F1520 60%, #1A2230 100%)",
                border: "1px solid rgba(245,179,1,0.20)",
                boxShadow: "0 0 80px rgba(245,179,1,0.06) inset",
              }}
            >
              {/* Decorative radial glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 0%, rgba(245,179,1,0.12) 0%, transparent 65%)",
                }}
              />
              <div className="relative z-10">
                {/* Badge */}
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[0.72rem] font-semibold tracking-widest uppercase mb-6"
                  style={{
                    background: "rgba(245,179,1,0.12)",
                    border: "1px solid rgba(245,179,1,0.25)",
                    color: "#F5B301",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full pulse-dot"
                    style={{ background: "#F5B301" }}
                  />
                  Free Consultation Available
                </div>
                <h2
                  className="text-[clamp(1.8rem,3vw,2.6rem)] mb-3 font-serif"
                  style={{ color: "#FFFDF6" }}
                >
                  Ready to Find Your Dream Home?
                </h2>
                <p
                  className="text-[1rem] max-w-lg mx-auto mb-10 font-sans"
                  style={{ color: "rgba(255,253,246,0.60)" }}
                >
                  Connect with Keval Gala today for a free consultation, site
                  visit, or expert property advice.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={CONFIG.callLink}
                    className="btn btn-gold btn-lg"
                    id="cta-call-btn"
                  >
                    <Phone size={18} /> Call {CONFIG.phoneDisplay}
                  </a>
                  <Link
                    href="/contact#site-visit"
                    className="btn btn-outline-white btn-lg"
                    id="cta-visit-btn"
                  >
                    Book a Site Visit
                  </Link>
                  <a
                    href={CONFIG.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-lg"
                    id="cta-whatsapp-btn"
                  >
                    <WhatsAppIcon size={18} /> WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
