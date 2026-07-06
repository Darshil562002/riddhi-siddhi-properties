import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";
import { CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Loan Documents Checklist — Salaried & Self-Employed | Riddhi Siddhi Properties",
  description:
    "Complete home loan document checklist for salaried employees and self-employed buyers. Know exactly what documents to carry to the bank for your home loan application.",
  alternates: { canonical: "/buyer-help/home-loan-documents" },
};

export default function HomeLoanDocsPage() {
  return (
    <main>
      <nav className="breadcrumb-bar" aria-label="Breadcrumb">
        <div className="container">
          <ol className="breadcrumb-list">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/buyer-help">Buyer Help</Link></li>
            <li className="active">Home Loan Documents</li>
          </ol>
        </div>
      </nav>

      <section className="page-hero" aria-label="Home Loan Documents hero">
        <div className="container">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/85 text-[0.75rem] font-semibold tracking-widest uppercase mb-6">Loan Guide</span>
          <h1>Home Loan Documents Checklist</h1>
          <p>Be fully prepared before visiting your bank. Here is a complete, categorized list of documents needed for a home loan — for both salaried and self-employed buyers.</p>
        </div>
      </section>

      <article className="py-16 bg-ivory">
        <div className="container-narrow">
          {/* Intro */}
          <div className="bg-green-pale border border-forest/20 rounded-xl p-6 mb-12">
            <h2 className="text-[1.2rem] mb-2">Before You Go to the Bank</h2>
            <p className="text-[0.9rem] text-forest leading-relaxed">
              Banks require a comprehensive set of documents to assess your eligibility and verify the property. Missing even one document can delay your application by weeks. Use this checklist to prepare completely before your first bank visit. <strong>Riddhi Siddhi Properties provides free document guidance</strong> — call us anytime.
            </p>
          </div>

          {/* Common to All */}
          <section className="mb-12" aria-labelledby="common-docs">
            <h2 id="common-docs" className="mb-4">Documents Required by All Applicants</h2>
            <div className="divider-gold mb-6" />
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { cat: "Identity Proof (any one)", docs: ["Aadhaar Card (mandatory)", "PAN Card (mandatory)", "Passport", "Voter ID Card", "Driving Licence"] },
                { cat: "Address Proof (any one)", docs: ["Aadhaar Card", "Passport", "Utility Bill (electricity/water)", "Rent agreement (notarized)", "Bank passbook with address"] },
                { cat: "Income Proof (generic)", docs: ["Bank statements (last 6–12 months)", "ITR for last 2–3 years (if applicable)", "Form 26AS / AIS"] },
                { cat: "Property Documents", docs: ["Sale Agreement / Allotment Letter", "Property title documents", "Approved building plan", "NOC from builder", "RERA registration number", "Property valuation report"] },
              ].map((sec) => (
                <div key={sec.cat} className="bg-white border border-border-lt rounded-xl p-5">
                  <h4 className="text-[0.95rem] text-forest mb-3">{sec.cat}</h4>
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

          {/* Salaried */}
          <section className="mb-12" aria-labelledby="salaried-docs">
            <h2 id="salaried-docs" className="mb-4">For Salaried Employees</h2>
            <div className="divider-gold mb-6" />
            <div className="bg-white border border-border-lt rounded-xl overflow-hidden">
              {[
                ["Salary Slips", "Latest 3 months' salary slips from current employer"],
                ["Employment Letter", "Latest employment letter or appointment letter"],
                ["Form 16", "Form 16 for the last 2 financial years"],
                ["Bank Statements", "Salary account statements for last 6–12 months"],
                ["IT Returns", "ITR filed for last 2 years (with computation)"],
                ["Increment Letter", "If applied recently — proof of salary increment"],
                ["Offer Letter", "If you have recently changed jobs — offer letter from new employer"],
              ].map(([doc, desc], i) => (
                <div key={doc} className={`flex items-start gap-4 px-5 py-4 border-b border-border-lt last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-warm-white"}`}>
                  <CheckCircle size={15} className="text-forest flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-dark text-[0.9rem]">{doc}</div>
                    <div className="text-[0.82rem] text-text-mid">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Self-Employed */}
          <section className="mb-12" aria-labelledby="self-employed-docs">
            <h2 id="self-employed-docs" className="mb-4">For Self-Employed / Business Owners</h2>
            <div className="divider-gold mb-6" />
            <div className="bg-white border border-border-lt rounded-xl overflow-hidden">
              {[
                ["Business Proof", "GST registration, Shop & Establishment certificate, or Business license"],
                ["ITR (3 years)", "Income Tax Returns with computation for last 3 financial years"],
                ["P&L Statements", "Profit & Loss statements certified by CA for last 3 years"],
                ["Balance Sheet", "Audited balance sheet for last 3 financial years"],
                ["Bank Statements", "Current account and savings account statements for 12 months"],
                ["Partnership Deed", "If business is a partnership — partnership deed copy"],
                ["GST Returns", "Latest 6–12 months GST returns (GSTR-3B) if applicable"],
              ].map(([doc, desc], i) => (
                <div key={doc} className={`flex items-start gap-4 px-5 py-4 border-b border-border-lt last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-warm-white"}`}>
                  <CheckCircle size={15} className="text-forest flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-dark text-[0.9rem]">{doc}</div>
                    <div className="text-[0.82rem] text-text-mid">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tips */}
          <section className="mb-10" aria-labelledby="tips">
            <h2 id="tips" className="mb-4">Pro Tips from Our Team</h2>
            <div className="divider-gold mb-5" />
            <div className="space-y-3">
              {[
                "Carry self-attested photocopies of all documents along with originals.",
                "Maintain 2–3 sets of photocopies to submit to multiple banks simultaneously.",
                "A CIBIL score of 750+ significantly improves your loan approval chances and interest rate.",
                "Avoid taking new loans or making large transactions in the 6 months before applying.",
                "Some banks have specific formats for income computation — ask your branch manager.",
              ].map((tip) => (
                <div key={tip} className="flex items-start gap-3 bg-gold-pale border border-gold/20 rounded-lg px-4 py-3 text-[0.88rem] text-dark">
                  <span className="text-gold flex-shrink-0">💡</span> {tip}
                </div>
              ))}
            </div>
          </section>

          <div className="bg-forest rounded-2xl p-8 text-white text-center">
            <h3 className="text-white mb-2">Need Help with Your Loan Documents?</h3>
            <p className="text-white/70 mb-6">Keval Gala helps buyers prepare their complete loan file and liaises with bank representatives on their behalf — at no cost.</p>
            <a href={CONFIG.callLink} className="btn btn-gold btn-lg" id="loandoc-call-btn">
              <Phone size={18} /> {CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
