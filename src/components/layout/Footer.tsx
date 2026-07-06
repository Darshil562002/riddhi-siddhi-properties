import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import { CONFIG, FOOTER_LINKS } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/ui/Icons";

export default function Footer() {
  return (
    <>
      <footer className="bg-charcoal text-white pt-16 pb-6">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand Column */}
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4 no-underline">
                <div className="w-10 h-10 rounded-lg bg-forest flex items-center justify-center text-white font-serif font-bold text-lg">
                  RS
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-serif font-semibold text-white text-[1.05rem]">
                    Riddhi Siddhi
                  </span>
                  <span className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase text-white/50">
                    Properties
                  </span>
                </div>
              </Link>
              <p className="text-[0.88rem] text-white/55 leading-relaxed mb-5">
                Your trusted partner for home buying in Shahapur–Asangaon, Thane. We
                help families find the right home — with honest guidance, transparent
                support, and deep local knowledge.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-white/60 text-[0.85rem]">
                  <Phone size={14} className="flex-shrink-0" />
                  <a
                    href={CONFIG.callLink}
                    className="text-white/60 hover:text-white/90 transition-colors no-underline"
                  >
                    {CONFIG.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-start gap-2 text-white/60 text-[0.85rem]">
                  <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                  <span>{CONFIG.address}</span>
                </div>
                <div className="flex items-center gap-2 text-white/60 text-[0.85rem]">
                  <Clock size={14} className="flex-shrink-0" />
                  <span>{CONFIG.hours}</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-[0.82rem] font-semibold uppercase tracking-[0.08em] text-white/80 mb-4 font-sans">
                Quick Links
              </h5>
              <ul className="flex flex-col gap-2">
                {FOOTER_LINKS.quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[0.88rem] text-white/55 hover:text-white/90 transition-colors no-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Buyer Resources */}
            <div>
              <h5 className="text-[0.82rem] font-semibold uppercase tracking-[0.08em] text-white/80 mb-4 font-sans">
                Buyer Resources
              </h5>
              <ul className="flex flex-col gap-2">
                {FOOTER_LINKS.buyerResources.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[0.88rem] text-white/55 hover:text-white/90 transition-colors no-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get in Touch */}
            <div>
              <h5 className="text-[0.82rem] font-semibold uppercase tracking-[0.08em] text-white/80 mb-4 font-sans">
                Get in Touch
              </h5>
              <p className="text-[0.85rem] text-white/55 mb-4 leading-relaxed">
                Speak directly with {CONFIG.contact} for property guidance, site
                visits, and expert advice.
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href={CONFIG.callLink}
                  className="btn btn-outline-white btn-sm justify-center"
                >
                  <Phone size={14} />
                  Call Now
                </a>
                <a
                  href={CONFIG.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm justify-center"
                >
                  <WhatsAppIcon size={14} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[0.78rem] text-white/40">
              © {new Date().getFullYear()} Riddhi Siddhi Properties. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4 text-[0.78rem]">
              <Link
                href="/privacy-policy"
                className="text-white/40 hover:text-white/70 transition-colors no-underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="/sitemap.xml"
                className="text-white/40 hover:text-white/70 transition-colors no-underline"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-border-lt shadow-lg flex">
        <a
          href={CONFIG.callLink}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-[0.85rem] font-semibold text-forest hover:bg-green-pale transition-colors no-underline"
          id="mobile-sticky-call"
        >
          <Phone size={18} />
          Call Now
        </a>
        <a
          href={CONFIG.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-[0.85rem] font-semibold text-white bg-[#25D366] hover:bg-[#22c55e] transition-colors no-underline"
          id="mobile-sticky-whatsapp"
        >
          <WhatsAppIcon size={18} />
          WhatsApp
        </a>
      </div>
    </>
  );
}
