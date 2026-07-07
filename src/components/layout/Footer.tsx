import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import { CONFIG, FOOTER_LINKS } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/ui/Icons";

export default function Footer() {
  return (
    <>
      <footer style={{ background: "#1F2933", color: "#FFFDF6" }} className="pt-16 pb-6">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand Column */}
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4 no-underline">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center font-serif font-bold text-lg leading-none"
                  style={{ background: "#F5B301", color: "#1F2933" }}
                >
                  RS
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-serif font-semibold text-[1.05rem]" style={{ color: "#FFFDF6" }}>
                    Riddhi Siddhi
                  </span>
                  <span className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase" style={{ color: "rgba(255,253,246,0.50)" }}>
                    Properties
                  </span>
                </div>
              </Link>
              <p className="text-[0.88rem] leading-relaxed mb-5" style={{ color: "rgba(255,253,246,0.55)" }}>
                Your trusted partner for home buying in Shahapur–Asangaon, Thane. We
                help families find the right home — with honest guidance, transparent
                support, and deep local knowledge.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-[0.85rem]" style={{ color: "rgba(255,253,246,0.60)" }}>
                  <Phone size={14} className="flex-shrink-0" />
                  <a
                    href={CONFIG.callLink}
                    className="no-underline transition-colors"
                    style={{ color: "rgba(255,253,246,0.60)" }}
                  >
                    {CONFIG.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-start gap-2 text-[0.85rem]" style={{ color: "rgba(255,253,246,0.60)" }}>
                  <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                  <span>{CONFIG.address}</span>
                </div>
                <div className="flex items-center gap-2 text-[0.85rem]" style={{ color: "rgba(255,253,246,0.60)" }}>
                  <Clock size={14} className="flex-shrink-0" />
                  <span>{CONFIG.hours}</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="text-[0.82rem] font-semibold uppercase tracking-[0.08em] mb-4 font-sans" style={{ color: "#F5B301" }}>
                Quick Links
              </h5>
              <ul className="flex flex-col gap-2">
                {FOOTER_LINKS.quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[0.88rem] no-underline transition-colors"
                      style={{ color: "rgba(255,253,246,0.55)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Buyer Resources */}
            <div>
              <h5 className="text-[0.82rem] font-semibold uppercase tracking-[0.08em] mb-4 font-sans" style={{ color: "#F5B301" }}>
                Buyer Resources
              </h5>
              <ul className="flex flex-col gap-2">
                {FOOTER_LINKS.buyerResources.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[0.88rem] no-underline transition-colors"
                      style={{ color: "rgba(255,253,246,0.55)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get in Touch */}
            <div>
              <h5 className="text-[0.82rem] font-semibold uppercase tracking-[0.08em] mb-4 font-sans" style={{ color: "#F5B301" }}>
                Get in Touch
              </h5>
              <p className="text-[0.85rem] mb-4 leading-relaxed" style={{ color: "rgba(255,253,246,0.55)" }}>
                Speak directly with {CONFIG.contact} for property guidance, site
                visits, and expert advice.
              </p>
              <div className="flex flex-col gap-2">
                <a href={CONFIG.callLink} className="btn btn-outline-white btn-sm justify-center">
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
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,253,246,0.10)" }}>
            <p className="text-[0.78rem]" style={{ color: "rgba(255,253,246,0.40)" }}>
              © {new Date().getFullYear()} Riddhi Siddhi Properties. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-[0.78rem]">
              <Link href="/privacy-policy" className="no-underline transition-colors" style={{ color: "rgba(255,253,246,0.40)" }}>
                Privacy Policy
              </Link>
              <Link href="/sitemap.xml" className="no-underline transition-colors" style={{ color: "rgba(255,253,246,0.40)" }}>
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden flex" style={{ background: "#FFFDF6", borderTop: "1px solid #E0D5B8", boxShadow: "0 -2px 10px rgba(31,41,51,0.07)" }}>
        <a
          href={CONFIG.callLink}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-[0.85rem] font-semibold no-underline transition-colors"
          style={{ color: "#1A8D7A" }}
          id="mobile-sticky-call"
        >
          <Phone size={18} />
          Call Now
        </a>
        <a
          href={CONFIG.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-[0.85rem] font-semibold text-white no-underline"
          style={{ background: "#25D366" }}
          id="mobile-sticky-whatsapp"
        >
          <WhatsAppIcon size={18} />
          WhatsApp
        </a>
      </div>
    </>
  );
}
