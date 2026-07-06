import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";
import { CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PM Awas Yojana — PMAY Guide, Eligibility & Subsidy | Riddhi Siddhi Properties",
  description:
    "Complete guide to PM Awas Yojana (PMAY) for home buyers in Shahapur–Asangaon. Eligibility criteria, income slabs, subsidy amounts, documents needed, and step-by-step application process.",
  alternates: { canonical: "/buyer-help/pm-awas-yojana" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is PM Awas Yojana?", acceptedAnswer: { "@type": "Answer", text: "PM Awas Yojana (PMAY) is a government scheme launched by the Ministry of Housing and Urban Affairs to provide affordable housing to economically weaker sections (EWS), lower income groups (LIG), and middle income groups (MIG) in urban areas." } },
    { "@type": "Question", name: "Who is eligible for PMAY subsidy?", acceptedAnswer: { "@type": "Answer", text: "EWS (annual income up to ₹3 lakh), LIG (₹3–6 lakh), MIG-I (₹6–12 lakh), and MIG-II (₹12–18 lakh) category families who do not own a pucca house anywhere in India are eligible." } },
    { "@type": "Question", name: "How much subsidy can I get under PMAY?", acceptedAnswer: { "@type": "Answer", text: "EWS/LIG: 6.5% subsidy on loan up to ₹6 lakh (max ₹2.67 lakh benefit). MIG-I: 4% on loan up to ₹9 lakh (max ₹2.35 lakh). MIG-II: 3% on loan up to ₹12 lakh (max ₹2.30 lakh)." } },
  ],
};

export default function PMAYPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav className="breadcrumb-bar" aria-label="Breadcrumb">
        <div className="container">
          <ol className="breadcrumb-list">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/buyer-help">Buyer Help</Link></li>
            <li className="active">PM Awas Yojana</li>
          </ol>
        </div>
      </nav>

      <section className="page-hero" aria-label="PMAY hero">
        <div className="container">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/85 text-[0.75rem] font-semibold tracking-widest uppercase mb-6">Government Scheme</span>
          <h1>PM Awas Yojana (PMAY) — Complete Guide</h1>
          <p>Everything you need to know about India&apos;s biggest housing subsidy scheme. Check your eligibility and see how much you can save on your home loan.</p>
        </div>
      </section>

      <article className="py-16 bg-ivory">
        <div className="container-narrow">
          {/* What is PMAY */}
          <section className="mb-12" aria-labelledby="what-is">
            <h2 id="what-is" className="mb-4">What is PM Awas Yojana?</h2>
            <div className="divider-gold mb-5" />
            <p className="text-text-mid leading-[1.85] mb-4">
              Pradhan Mantri Awas Yojana (PMAY) — Urban is a flagship government scheme launched by the Ministry of Housing and Urban Affairs to ensure affordable housing for all urban citizens by 2024. Under this scheme, eligible home loan borrowers receive a Credit Linked Subsidy (CLSS) — a direct interest subsidy credited to their loan account upfront, significantly reducing their EMI and total loan cost.
            </p>
            <p className="text-text-mid leading-[1.85]">
              If you are buying your first home and your annual household income qualifies, you may be eligible for a subsidy of up to <strong className="text-forest">₹2.67 lakh</strong> — credited directly to your home loan by the bank.
            </p>
          </section>

          {/* Eligibility */}
          <section className="mb-12" aria-labelledby="eligibility">
            <h2 id="eligibility" className="mb-4">Who is Eligible?</h2>
            <div className="divider-gold mb-5" />
            <p className="text-text-mid mb-5">The scheme covers four income categories for urban areas:</p>
            <div className="overflow-x-auto rounded-xl border border-border-lt mb-6">
              <table className="w-full text-[0.9rem]">
                <thead>
                  <tr className="bg-forest text-white">
                    <th className="text-left px-5 py-3">Category</th>
                    <th className="text-left px-5 py-3">Annual Household Income</th>
                    <th className="text-left px-5 py-3">Subsidy Rate</th>
                    <th className="text-left px-5 py-3">Max Loan for Subsidy</th>
                    <th className="text-left px-5 py-3">Max Benefit</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["EWS", "Up to ₹3 Lakh", "6.5%", "₹6 Lakh", "~₹2.67 Lakh"],
                    ["LIG", "₹3 – ₹6 Lakh", "6.5%", "₹6 Lakh", "~₹2.67 Lakh"],
                    ["MIG-I", "₹6 – ₹12 Lakh", "4%", "₹9 Lakh", "~₹2.35 Lakh"],
                    ["MIG-II", "₹12 – ₹18 Lakh", "3%", "₹12 Lakh", "~₹2.30 Lakh"],
                  ].map(([cat, inc, rate, loan, ben], i) => (
                    <tr key={cat} className={i % 2 === 0 ? "bg-white" : "bg-warm-white"}>
                      <td className="px-5 py-3 font-semibold text-dark">{cat}</td>
                      <td className="px-5 py-3 text-text-mid">{inc}</td>
                      <td className="px-5 py-3 font-semibold text-forest">{rate}</td>
                      <td className="px-5 py-3 text-text-mid">{loan}</td>
                      <td className="px-5 py-3 font-semibold text-forest">{ben}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-green-pale border border-forest/20 rounded-xl p-5">
              <h4 className="mb-3 text-forest">Core Eligibility Conditions</h4>
              <ul className="space-y-2">
                {[
                  "The applicant or any family member must NOT own a pucca (permanent) house anywhere in India.",
                  "The property must be in an urban area (Statutory Town / Notified Planning Area).",
                  "The woman of the household should be a co-owner (mandatory for EWS/LIG categories).",
                  "The home loan must be taken from a bank, housing finance company, or MFI recognized by NHB or HUDCO.",
                  "Aadhaar card is mandatory for the application.",
                ].map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-[0.88rem] text-forest">
                    <CheckCircle size={15} className="flex-shrink-0 mt-0.5" /> {c}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Documents */}
          <section className="mb-12" aria-labelledby="documents">
            <h2 id="documents" className="mb-4">Documents Required for PMAY</h2>
            <div className="divider-gold mb-5" />
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { cat: "Identity & Address", docs: ["Aadhaar Card", "PAN Card", "Passport / Voter ID / Driving License", "Ration Card (if applicable)"] },
                { cat: "Income Proof", docs: ["Salary slips (last 3 months)", "Form 16 / IT Returns", "Bank statements (6 months)", "Employment certificate"] },
                { cat: "Property Documents", docs: ["Sale agreement / Allotment letter", "Builder NOC / Possession letter", "RERA registration number", "Approved building plan copy"] },
                { cat: "Bank Documents", docs: ["Home loan sanction letter", "Property valuation report", "Title / ownership documents", "Encumbrance certificate"] },
              ].map((sec) => (
                <div key={sec.cat} className="bg-white border border-border-lt rounded-xl p-5">
                  <h4 className="text-[1rem] mb-3">{sec.cat}</h4>
                  <ul className="space-y-1.5">
                    {sec.docs.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-[0.85rem] text-text-mid">
                        <CheckCircle size={13} className="text-forest flex-shrink-0" /> {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12" aria-labelledby="faq">
            <h2 id="faq" className="mb-4">Frequently Asked Questions</h2>
            <div className="divider-gold mb-5" />
            <div className="space-y-4">
              {[
                { q: "Can I apply for PMAY if I already have a home loan?", a: "PMAY subsidy is available at the time of taking the home loan. If you have already taken a loan but not claimed the subsidy, speak with your bank — some banks allow retroactive PMAY application if the loan is recent." },
                { q: "Does the property price affect PMAY eligibility?", a: "For EWS/LIG: property value up to ₹45 lakh is allowed. For MIG-I: up to ₹60 lakh. For MIG-II: up to ₹80 lakh. There is no restriction for very affordable properties below ₹30 lakh." },
                { q: "How long does it take to receive the subsidy?", a: "After submitting the PMAY application through your bank, the subsidy is typically credited to your loan account within 3–6 months. Once credited, your outstanding loan amount reduces and your EMI drops accordingly." },
                { q: "Can Riddhi Siddhi Properties help me apply for PMAY?", a: "Yes! We regularly assist buyers with PMAY eligibility checks, document preparation, and bank coordination. Contact Keval Gala for free guidance." },
              ].map((faq) => (
                <details key={faq.q} className="bg-white border border-border-lt rounded-xl group">
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-dark list-none flex justify-between items-center">
                    {faq.q}
                    <span className="text-forest ml-4 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="px-6 pb-5 text-[0.9rem] text-text-mid leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-forest rounded-2xl p-8 text-white text-center">
            <h3 className="text-white mb-2">Check Your PMAY Eligibility</h3>
            <p className="text-white/70 mb-6">Talk to Keval Gala for a free eligibility check and step-by-step guidance on claiming your subsidy.</p>
            <a href={CONFIG.callLink} className="btn btn-gold btn-lg" id="pmay-call-btn">
              <Phone size={18} /> {CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
