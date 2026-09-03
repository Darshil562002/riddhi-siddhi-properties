import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { CONFIG } from "@/lib/constants";
import ContactForm from "@/components/forms/ContactForm";
import SiteVisitForm from "@/components/forms/SiteVisitForm";
import { WhatsAppIcon } from "@/components/ui/Icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Riddhi Siddhi Properties — Call Keval Gala | +91 96194 22555",
  description:
    "Contact Riddhi Siddhi Properties. Speak with Keval Gala for property guidance, site visits, and home buying assistance. Call +91 96194 22555 or WhatsApp us from Shahapur–Asangaon, Thane.",
  alternates: { canonical: "/contact" },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${CONFIG.siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Contact", item: `${CONFIG.siteUrl}/contact` },
      ],
    },
    {
      "@type": "LocalBusiness",
      name: CONFIG.brand,
      description: "Trusted real estate advisory for home buyers in Shahapur–Asangaon, Thane.",
      telephone: "+91-96194-22555",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Shahapur",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      openingHours: "Mo Tu We Th Fr Sa Su 09:00-19:00",
      priceRange: "Free Consultation",
    },
  ],
};

export default function ContactPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      {/* Breadcrumb */}
      <nav className="breadcrumb-bar" aria-label="Breadcrumb">
        <div className="container">
          <ol className="breadcrumb-list">
            <li><Link href="/">Home</Link></li>
            <li className="active">Contact</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="page-hero" aria-label="Contact hero">
        <div className="container relative z-10">
          <span
            className="inline-block px-4 py-2 rounded-full text-[0.72rem] font-semibold tracking-widest uppercase mb-6"
            style={{
              background: "rgba(245,179,1,0.12)",
              border: "1px solid rgba(245,179,1,0.25)",
              color: "#F5B301",
            }}
          >
            Get in Touch
          </span>
          <h1>Contact Riddhi Siddhi Properties</h1>
          <p>Speak directly with Keval Gala for genuine property guidance, site visits, home loan assistance, and expert advice — completely free of charge.</p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <a href={CONFIG.callLink} className="btn btn-gold btn-lg" id="contact-hero-call"><Phone size={18} /> {CONFIG.phoneDisplay}</a>
            <a href={CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg" id="contact-hero-wa"><WhatsAppIcon size={18} /> WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 bg-ivory" aria-label="Contact information and forms">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left — Info */}
            <div className="space-y-6">
              {/* Contact Info Card */}
              <div className="bg-white border border-border-lt rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-forest p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-16 translate-x-16" />
                  <h2 className="text-white text-2xl mb-1">Speak With Us Directly</h2>
                  <p className="text-white/65 text-[0.9rem]">No middlemen, no call centers. Just honest, direct guidance from Keval Gala.</p>
                  <div className="flex items-center gap-4 mt-6 p-4 bg-white/10 rounded-xl">
                    <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center font-serif text-2xl font-bold text-white flex-shrink-0">K</div>
                    <div>
                      <div className="font-semibold text-white text-lg">Keval Gala</div>
                      <div className="text-white/65 text-[0.85rem]">Founder & Property Advisor</div>
                      <div className="text-white/65 text-[0.85rem]">10+ years in Shahapur–Asangaon market</div>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  {[
                    { icon: <Phone size={18} className="text-forest" />, label: "Phone / Call", value: CONFIG.phoneDisplay, href: CONFIG.callLink },
                    { icon: <Phone size={18} className="text-forest" />, label: "Alternate Number", value: CONFIG.altPhoneDisplay, href: `tel:${CONFIG.altPhone}` },
                    { icon: <WhatsAppIcon size={18} />, label: "WhatsApp", value: "Message us anytime", href: CONFIG.whatsapp },
                    { icon: <Mail size={18} className="text-forest" />, label: "Email", value: CONFIG.email, href: `mailto:${CONFIG.email}` },
                    { icon: <MapPin size={18} className="text-forest" />, label: "Region", value: CONFIG.address },
                    { icon: <Clock size={18} className="text-forest" />, label: "Hours", value: CONFIG.hours },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-green-pale flex items-center justify-center flex-shrink-0">{item.icon}</div>
                      <div>
                        <div className="text-[0.72rem] font-semibold uppercase tracking-wider text-text-light">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="font-semibold text-dark hover:text-forest transition-colors no-underline">{item.value}</a>
                        ) : (
                          <span className="font-semibold text-dark">{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Forms */}
            <div className="space-y-8">
              {/* Contact Form */}
              <div className="bg-white border border-border-lt rounded-2xl p-8 shadow-sm">
                <h2 className="text-[1.4rem] mb-2">Send Us a Message</h2>
                <p className="text-text-mid text-[0.88rem] mb-6">We typically respond within a few hours during business hours.</p>
                <ContactForm id="contact-form" />
              </div>

              {/* Site Visit Form */}
              <div id="site-visit" className="bg-white border border-border-lt rounded-2xl p-8 shadow-sm">
                <h2 className="text-[1.4rem] mb-2">Book a Site Visit</h2>
                <p className="text-text-mid text-[0.88rem] mb-6">Tell us which project you want to visit and your preferred time. We&apos;ll confirm the visit within 24 hours.</p>
                <SiteVisitForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
