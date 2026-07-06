import Link from "next/link";
import { CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Riddhi Siddhi Properties",
  description: "Privacy Policy for Riddhi Siddhi Properties. How we collect, use, and protect your personal information when you contact us or use our website.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "July 2025";
  return (
    <main>
      <nav className="breadcrumb-bar" aria-label="Breadcrumb">
        <div className="container">
          <ol className="breadcrumb-list">
            <li><Link href="/">Home</Link></li>
            <li className="active">Privacy Policy</li>
          </ol>
        </div>
      </nav>

      <section className="page-hero" aria-label="Privacy Policy hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>How Riddhi Siddhi Properties collects, uses, and protects your information. Last updated: {lastUpdated}.</p>
        </div>
      </section>

      <article className="py-16 bg-ivory">
        <div className="container-narrow prose prose-sm max-w-none">
          <div className="bg-white border border-border-lt rounded-2xl p-8 md:p-12 shadow-sm space-y-10 text-text-mid leading-[1.85]">

            <section aria-labelledby="overview">
              <h2 id="overview" className="text-dark">1. Overview</h2>
              <p>Riddhi Siddhi Properties (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is a real estate advisory firm based in Shahapur–Asangaon, Thane, Maharashtra. We operate the website at <strong>{CONFIG.siteUrl}</strong> (&ldquo;the Website&rdquo;).</p>
              <p>This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our Website or contact us through our inquiry forms, phone, email, or WhatsApp.</p>
              <p>By using our Website or submitting your information, you agree to the terms of this Privacy Policy.</p>
            </section>

            <section aria-labelledby="information-collected">
              <h2 id="information-collected" className="text-dark">2. Information We Collect</h2>
              <p>We collect information you voluntarily provide when you:</p>
              <ul>
                <li>Submit a contact form, project enquiry form, or site visit booking form</li>
                <li>Call or message us via phone, WhatsApp, or email</li>
              </ul>
              <p>The information we may collect includes:</p>
              <ul>
                <li><strong>Full Name</strong> — to address you correctly</li>
                <li><strong>Mobile Phone Number</strong> — to contact you about your enquiry</li>
                <li><strong>Email Address</strong> (optional) — for email communication</li>
                <li><strong>Property Preferences</strong> — project interest, configuration, budget (to match you with suitable properties)</li>
                <li><strong>Site Visit Preferences</strong> — preferred date and time</li>
                <li><strong>Message / Query</strong> — to understand your requirements</li>
              </ul>
              <p>We do <strong>not</strong> collect: payment information, Aadhaar/PAN numbers, financial documents, or any sensitive personal information through this website.</p>
            </section>

            <section aria-labelledby="how-we-use">
              <h2 id="how-we-use" className="text-dark">3. How We Use Your Information</h2>
              <p>We use the information you provide exclusively for the following purposes:</p>
              <ul>
                <li>To respond to your property enquiry or contact request</li>
                <li>To schedule and confirm site visits</li>
                <li>To share relevant property information, brochures, and pricing details</li>
                <li>To provide guidance on home loans, government schemes, and legal checks</li>
                <li>To follow up on your property search to provide updated listings</li>
              </ul>
              <p>We do <strong>not</strong> use your information for:</p>
              <ul>
                <li>Selling, renting, or sharing your data with third-party marketers</li>
                <li>Automated marketing campaigns or newsletters without your consent</li>
                <li>Any purpose unrelated to your property enquiry</li>
              </ul>
            </section>

            <section aria-labelledby="data-storage">
              <h2 id="data-storage" className="text-dark">4. Data Storage & Security</h2>
              <p>Form submissions from our website are stored securely in <strong>Supabase</strong>, a cloud database service hosted on AWS infrastructure. Supabase complies with SOC 2 Type 2 security standards and uses industry-standard encryption (TLS in transit, AES-256 at rest).</p>
              <p>Your data is accessible only to Riddhi Siddhi Properties and is used solely to respond to your enquiry. We implement appropriate technical and organisational measures to protect your information from unauthorised access, disclosure, or loss.</p>
              <p>We retain your information for as long as necessary to fulfill the purpose for which it was collected, or as required by applicable laws.</p>
            </section>

            <section aria-labelledby="your-rights">
              <h2 id="your-rights" className="text-dark">5. Your Rights</h2>
              <p>Under applicable data protection laws, you have the following rights regarding your personal information:</p>
              <ul>
                <li><strong>Right to Access</strong>: You can request a copy of the information we hold about you.</li>
                <li><strong>Right to Correction</strong>: You can request correction of inaccurate or incomplete information.</li>
                <li><strong>Right to Deletion</strong>: You can request that we delete your personal information from our records.</li>
                <li><strong>Right to Withdraw Consent</strong>: You can withdraw your consent for us to contact you at any time.</li>
              </ul>
              <p>To exercise any of these rights, contact us at: <a href={`mailto:${CONFIG.email}`} className="text-forest">{CONFIG.email}</a> or call <a href={CONFIG.callLink} className="text-forest">{CONFIG.phoneDisplay}</a>.</p>
            </section>

            <section aria-labelledby="cookies">
              <h2 id="cookies" className="text-dark">6. Cookies</h2>
              <p>Our Website uses only essential functional cookies required for the website to operate correctly (e.g., preventing form re-submission). We do not use tracking cookies, advertising cookies, or third-party analytics cookies that identify individual users.</p>
            </section>

            <section aria-labelledby="third-parties">
              <h2 id="third-parties" className="text-dark">7. Third-Party Services</h2>
              <p>Our website uses the following third-party services:</p>
              <ul>
                <li><strong>Google Fonts</strong> — for typography. Google may log font request data. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-forest">Google&apos;s Privacy Policy</a>.</li>
                <li><strong>Supabase</strong> — for form data storage. See <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-forest">Supabase&apos;s Privacy Policy</a>.</li>
                <li><strong>Google Maps</strong> — for location maps. See Google&apos;s Privacy Policy (linked above).</li>
                <li><strong>YouTube</strong> — for embedded videos. See Google&apos;s Privacy Policy (linked above).</li>
              </ul>
            </section>

            <section aria-labelledby="changes">
              <h2 id="changes" className="text-dark">8. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. The updated policy will be published on this page with a revised &ldquo;last updated&rdquo; date. We encourage you to review this policy periodically.</p>
            </section>

            <section aria-labelledby="contact-us">
              <h2 id="contact-us" className="text-dark">9. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
              <div className="bg-warm-white border border-border-lt rounded-xl p-5 not-prose">
                <p className="font-semibold text-dark">{CONFIG.brand}</p>
                <p className="text-[0.9rem] text-text-mid">{CONFIG.address}</p>
                <p className="text-[0.9rem]"><a href={CONFIG.callLink} className="text-forest">{CONFIG.phoneDisplay}</a></p>
                <p className="text-[0.9rem]"><a href={`mailto:${CONFIG.email}`} className="text-forest">{CONFIG.email}</a></p>
                <p className="text-[0.9rem] text-text-light">{CONFIG.hours}</p>
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
