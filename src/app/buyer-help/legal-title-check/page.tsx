import Link from "next/link";
import { CheckCircle, Phone, Shield } from "lucide-react";
import { CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal & Title Verification Guide — Safe Property Buying | Riddhi Siddhi Properties",
  description:
    "Complete guide to verifying a property is legally safe to buy. How to check RERA registration, title documents, encumbrances, building plans, and builder credibility before investing.",
  alternates: { canonical: "/buyer-help/legal-title-check" },
};

export default function LegalTitleCheckPage() {
  return (
    <main>
      <nav className="breadcrumb-bar" aria-label="Breadcrumb">
        <div className="container">
          <ol className="breadcrumb-list">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/buyer-help">Buyer Help</Link></li>
            <li className="active">Legal &amp; Title Check</li>
          </ol>
        </div>
      </nav>

      <section className="page-hero" aria-label="Legal Title Check hero">
        <div className="container">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[rgba(245,179,1,0.12)] border border-[rgba(245,179,1,0.25)] text-[#F5B301] text-[0.75rem] font-semibold tracking-widest uppercase mb-6">Buyer Protection</span>
          <h1>Legal &amp; Title Verification Guide</h1>
          <p>Before committing to any property, verify that it is legally safe, title-clear, and approved. This guide shows you exactly how to protect your investment.</p>
        </div>
      </section>

      <article className="py-16 bg-ivory">
        <div className="container-narrow">
          {/* Warning banner */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-12">
            <h2 className="text-amber-800 text-[1.1rem] flex items-center gap-2 mb-2"><Shield size={20} /> Why Legal Verification Matters</h2>
            <p className="text-amber-700 text-[0.9rem] leading-relaxed">
              A significant number of property disputes in India arise from title defects, unapproved constructions, multiple ownership claims, or builder fraud. Spending time and ₹5,000–₹20,000 on proper legal verification can protect an investment of ₹20 lakh to ₹1 crore. Never skip this step.
            </p>
          </div>

          {/* RERA Check */}
          <section className="mb-12" aria-labelledby="rera-check">
            <h2 id="rera-check" className="mb-4">Step 1: RERA Registration Check</h2>
            <div className="divider-gold mb-5" />
            <p className="text-text-mid leading-[1.85] mb-5">
              All residential projects with 8+ units or land over 500 sq.m. must be registered with the Real Estate Regulatory Authority (RERA) under the RERA Act, 2016. A RERA-registered project gives you significant buyer protections including escrow of 70% of funds, penalty for delays, and defined handover obligations.
            </p>
            <div className="bg-white border border-border-lt rounded-xl p-5 mb-5">
              <h4 className="mb-3">How to Check RERA Registration (Maharashtra)</h4>
              <ol className="space-y-2 list-decimal list-inside text-[0.88rem] text-text-mid">
                <li>Visit <a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noopener noreferrer" className="text-forest underline">maharera.mahaonline.gov.in</a></li>
                <li>Click on &ldquo;Search Projects&rdquo;</li>
                <li>Enter the project name, builder name, or RERA number</li>
                <li>Verify: Registration number, expiry date, project status, escrow account details</li>
                <li>Check if the project is registered, rejected, or lapsed</li>
              </ol>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Verify RERA number is valid and not expired",
                "Check that builder details match what you were told",
                "Verify number of approved units vs. what's being sold",
                "Check if any complaints have been filed against the project",
              ].map((c) => (
                <div key={c} className="flex items-start gap-2.5 text-[0.85rem] text-text-mid">
                  <CheckCircle size={14} className="text-forest flex-shrink-0 mt-0.5" /> {c}
                </div>
              ))}
            </div>
          </section>

          {/* Title Verification */}
          <section className="mb-12" aria-labelledby="title-check">
            <h2 id="title-check" className="mb-4">Step 2: Title Document Verification</h2>
            <div className="divider-gold mb-5" />
            <p className="text-text-mid leading-[1.85] mb-5">
              Title verification confirms that the seller (builder/developer/owner) has a clear and legal right to sell the property. This involves checking the chain of ownership going back 15–30 years.
            </p>
            <div className="space-y-3">
              {[
                { title: "7/12 Extract (Satbara Utara)", desc: "For land/plot purchases in Maharashtra — the 7/12 extract shows current ownership, survey number, area, and any encumbrances on the land. Obtain from the District Sub-Registrar office or the Maharashtra government portal." },
                { title: "Index II / Property Card", desc: "Confirms the registered owner of the property. All past transactions are recorded here. Match the name of the current seller with the Index II record." },
                { title: "Encumbrance Certificate", desc: "Shows all registered transactions (mortgages, liens, court orders) against the property. A clear encumbrance certificate means no outstanding financial or legal claims." },
                { title: "Property Tax Receipts", desc: "Ensure all property taxes are paid up to date. Outstanding tax dues become the new owner's liability." },
                { title: "Legal Title Opinion", desc: "Engage a local property lawyer (fee: ₹5,000–₹20,000) to give a written legal opinion on the title. This is the most important step before signing any agreement." },
              ].map((s, i) => (
                <div key={s.title} className={`flex items-start gap-4 bg-white border border-border-lt rounded-xl p-5`}>
                  <div className="w-8 h-8 rounded-full bg-forest text-white flex items-center justify-center font-bold text-[0.85rem] flex-shrink-0">{i + 1}</div>
                  <div>
                    <div className="font-semibold text-dark mb-1">{s.title}</div>
                    <div className="text-[0.85rem] text-text-mid leading-relaxed">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Checklist */}
          <section className="mb-12" aria-labelledby="checklist">
            <h2 id="checklist" className="mb-4">Complete Pre-Purchase Legal Checklist</h2>
            <div className="divider-gold mb-5" />
            <div className="grid sm:grid-cols-2 gap-2">
              {[
                "RERA registration valid and active",
                "Builder's past projects delivered on time",
                "Title is clear — no ownership disputes",
                "No court cases or injunctions on the property",
                "Building plan is approved by municipal authority",
                "Occupancy Certificate (OC) issued (for completed projects)",
                "No mortgage or loan on the property",
                "Encumbrance certificate is clear",
                "Property tax dues are fully paid",
                "Legal opinion from a licensed property lawyer",
                "Agreement of Sale is stamped and registered",
                "All previous sale deeds are original and accounted for",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 bg-white border border-border-lt rounded-lg px-4 py-3 text-[0.85rem] text-text-mid">
                  <CheckCircle size={14} className="text-forest flex-shrink-0 mt-0.5" /> {item}
                </div>
              ))}
            </div>
          </section>

          <div className="bg-forest rounded-2xl p-8 text-white text-center">
            <h3 className="text-white mb-2">Need Help with Legal Verification?</h3>
            <p className="text-white/70 mb-6">We guide you through the complete verification process and can recommend trusted property lawyers in the Shahapur–Asangaon area.</p>
            <a href={CONFIG.callLink} className="btn btn-gold btn-lg" id="legal-call-btn">
              <Phone size={18} /> {CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
