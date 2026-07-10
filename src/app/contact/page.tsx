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
        <div className="container">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/85 text-[0.75rem] font-semibold tracking-widest uppercase mb-6">Get in Touch</span>
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
                    { icon: <Phone size={18} className="text-forest" />, label: "Call Us (Primary)", value: CONFIG.phoneDisplay, href: CONFIG.callLink },
                    { icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] text-[#25D366]"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z"/></svg>, label: "WhatsApp", value: "Message on WhatsApp", href: CONFIG.whatsapp },
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
