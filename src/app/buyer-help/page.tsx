import Link from "next/link";
import { Home, Calculator, FileText, Shield, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buyer Help — Home Loan, PMAY, Legal Guide | Riddhi Siddhi Properties",
  description:
    "Riddhi Siddhi Properties Buyer Help Hub — guides on PM Awas Yojana, home loan documents, EMI calculator, and legal verification for property buyers in Shahapur–Asangaon, Thane.",
  alternates: { canonical: "/buyer-help" },
};

const resources = [
  {
    href: "/buyer-help/pm-awas-yojana",
    icon: <Home size={28} className="text-forest" />,
    title: "PM Awas Yojana (PMAY)",
    subtitle: "Government Housing Subsidy",
    desc: "Get up to ₹2.67 lakh subsidy on your home loan under PMAY. Complete guide on eligibility, income slabs, documents required, subsidy amounts, and step-by-step application process.",
    tags: ["Subsidy Guide", "Eligibility", "Documents", "Application"],
    cta: "Read Full Guide",
    id: "help-pmay",
  },
  {
    href: "/buyer-help/emi-calculator",
    icon: <Calculator size={28} className="text-forest" />,
    title: "EMI Calculator",
    subtitle: "Plan Your Monthly Payments",
    desc: "Calculate your exact monthly EMI instantly. Enter loan amount, interest rate, and tenure to see your monthly payment, total interest payable, and full amortization schedule.",
    tags: ["Instant Calculation", "Amortization", "Interest Breakdown"],
    cta: "Calculate EMI",
    id: "help-emi",
  },
  {
    href: "/buyer-help/home-loan-documents",
    icon: <FileText size={28} className="text-forest" />,
    title: "Home Loan Documents",
    subtitle: "Document Checklist for Banks",
    desc: "Complete checklist of documents needed to apply for a home loan. Separate lists for salaried employees and self-employed individuals, with bank-specific tips and common mistakes to avoid.",
    tags: ["Salaried", "Self-Employed", "Bank Checklist"],
    cta: "View Checklist",
    id: "help-docs",
  },
  {
    href: "/buyer-help/legal-title-check",
    icon: <Shield size={28} className="text-forest" />,
    title: "Legal & Title Verification",
    subtitle: "Protect Your Investment",
    desc: "Essential guide to verifying that a property is legally safe to buy. How to check RERA registration, title documents, encumbrances, approved plans, and builder credibility.",
    tags: ["RERA Check", "Title Verification", "Legal Safety"],
    cta: "Read Guide",
    id: "help-legal",
  },
];

export default function BuyerHelpPage() {
  return (
    <main>
      <nav className="breadcrumb-bar" aria-label="Breadcrumb">
        <div className="container">
          <ol className="breadcrumb-list">
            <li><Link href="/">Home</Link></li>
            <li className="active">Buyer Help</li>
          </ol>
        </div>
      </nav>

      <section className="page-hero" aria-label="Buyer Help hero">
        <div className="container">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[rgba(245,179,1,0.12)] border border-[rgba(245,179,1,0.25)] text-[#F5B301] text-[0.75rem] font-semibold tracking-widest uppercase mb-6">Knowledge Centre</span>
          <h1>Buyer Help &amp; Resources</h1>
          <p>We go beyond property listings. Riddhi Siddhi Properties helps you understand loans, government schemes, legal verification, and documentation — so you can buy with confidence, clarity, and zero confusion.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-warm-white" aria-label="Introduction">
        <div className="container-narrow text-center">
          <h2 className="mb-3">We Assist You Beyond the Sale</h2>
          <div className="divider-gold mx-auto mb-5" />
          <p className="text-[1.05rem] text-text-mid leading-[1.85]">
            Many buyers struggle not with finding a property, but with understanding paperwork, loan eligibility, government schemes, and legal safety. That&apos;s where we step in. Keval Gala and the Riddhi Siddhi Properties team provide hands-on guidance at every step — completely free of charge.
          </p>
        </div>
      </section>

      {/* Resource Cards */}
      <section className="py-16 bg-ivory" aria-labelledby="resources-heading">
        <div className="container">
          <h2 id="resources-heading" className="sr-only">Buyer Resources</h2>
          <div className="grid md:grid-cols-2 gap-7">
            {resources.map((r) => (
              <Link key={r.href} href={r.href} className="group block bg-white border border-border-lt rounded-2xl p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 no-underline" id={r.id}>
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-green-pale flex items-center justify-center flex-shrink-0 group-hover:bg-forest group-hover:[&>*]:text-white transition-all duration-300">
                    {r.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-[0.72rem] font-semibold uppercase tracking-wider text-text-light mb-1">{r.subtitle}</div>
                    <h3 className="text-[1.25rem] mb-3 group-hover:text-forest transition-colors">{r.title}</h3>
                    <p className="text-[0.88rem] text-text-mid leading-relaxed mb-4">{r.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {r.tags.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full bg-green-pale text-forest text-[0.72rem] font-semibold">{t}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-forest font-semibold text-[0.88rem] group-hover:gap-3 transition-all">
                      {r.cta} <ArrowRight size={15} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
