import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import { CONFIG, FOOTER_LINKS } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/ui/Icons";

export default function Footer() {
  return (
    <>
      <footer
        style={{
          background: "linear-gradient(180deg, #0A0D12 0%, #060810 100%)",
          color: "#FFFDF6",
          borderTop: "1px solid rgba(245,179,1,0.20)",
        }}
        className="pt-16 pb-6"
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand Column */}
            <div>
              <Link href="/" className="flex items-center gap-2.5 mb-5 no-underline group">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center font-serif font-bold text-lg leading-none transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #1A8D7A 0%, #147265 100%)",
                    color: "#FFFDF6",
                    boxShadow: "0 2px 12px rgba(26,141,122,0.30)",
                  }}
                >
                  RS
                </div>
                <div className="flex flex-col leading-tight">
                  <span
                    className="font-serif font-bold text-[1.05rem]"
                    style={{ color: "#FFFDF6" }}
                  >
                    Riddhi Siddhi
                  </span>
                  <span
                    className="text-[0.62rem] font-semibold tracking-[0.14em] uppercase"
                    style={{ color: "rgba(245,179,1,0.65)" }}
                  >
                    Properties
                  </span>
                </div>
              </Link>
              <p
                className="text-[0.88rem] leading-relaxed mb-5"
                style={{ color: "rgba(255,253,246,0.50)" }}
              >
                Your trusted partner for home buying in Shahapur–Asangaon,
                Thane. Honest guidance, transparent support, and deep local
                knowledge — from site visit to keys in hand.
              </p>
              <div className="flex flex-col gap-3">
                <div
                  className="flex items-center gap-2 text-[0.85rem]"
                  style={{ color: "rgba(255,253,246,0.50)" }}
                >
                  <Phone size={13} className="flex-shrink-0" style={{ color: "rgba(245,179,1,0.65)" }} />
                  <a
                    href={CONFIG.callLink}
                    className="footer-link no-underline transition-colors"
                    style={{ color: "rgba(255,253,246,0.50)" }}
                  >
                    {CONFIG.phoneDisplay}
                  </a>
                </div>
                <div
                  className="flex items-start gap-2 text-[0.85rem]"
                  style={{ color: "rgba(255,253,246,0.50)" }}
                >
                  <MapPin size={13} className="flex-shrink-0 mt-0.5" style={{ color: "rgba(245,179,1,0.65)" }} />
                  <span>{CONFIG.address}</span>
                </div>
                <div
                  className="flex items-center gap-2 text-[0.85rem]"
                  style={{ color: "rgba(255,253,246,0.50)" }}
                >
                  <Clock size={13} className="flex-shrink-0" style={{ color: "rgba(245,179,1,0.65)" }} />
                  <span>{CONFIG.hours}</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5
                className="text-[0.75rem] font-bold uppercase tracking-[0.12em] mb-4 font-sans"
                style={{ color: "#F5B301" }}
              >
                Quick Links
              </h5>
              <ul className="flex flex-col gap-2.5">
                {FOOTER_LINKS.quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="footer-link text-[0.875rem] no-underline transition-colors"
                      style={{ color: "rgba(255,253,246,0.50)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Buyer Resources */}
            <div>
              <h5
                className="text-[0.75rem] font-bold uppercase tracking-[0.12em] mb-4 font-sans"
                style={{ color: "#F5B301" }}
              >
                Buyer Resources
              </h5>
              <ul className="flex flex-col gap-2.5">
                {FOOTER_LINKS.buyerResources.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="footer-link text-[0.875rem] no-underline transition-colors"
                      style={{ color: "rgba(255,253,246,0.50)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get in Touch */}
            <div>
              <h5
                className="text-[0.75rem] font-bold uppercase tracking-[0.12em] mb-4 font-sans"
                style={{ color: "#F5B301" }}
              >
                Get in Touch
              </h5>
              <p
                className="text-[0.875rem] mb-5 leading-relaxed"
                style={{ color: "rgba(255,253,246,0.50)" }}
              >
                Speak directly with {CONFIG.contact} for property guidance,
                site visits, and expert advice.
              </p>
              <div className="flex flex-col gap-2.5">
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

          {/* Divider */}
          <div style={{ borderTop: "1px solid rgba(255,253,246,0.07)" }} />

          {/* Footer Bottom */}
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p
              className="text-[0.78rem]"
              style={{ color: "rgba(255,253,246,0.30)" }}
            >
              © {new Date().getFullYear()} Riddhi Siddhi Properties. All rights
              reserved.
            </p>
            <div className="flex items-center gap-5 text-[0.78rem]">
              <Link
                href="/privacy-policy"
                className="footer-link no-underline transition-colors"
                style={{ color: "rgba(255,253,246,0.30)" }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/sitemap.xml"
                className="footer-link no-underline transition-colors"
                style={{ color: "rgba(255,253,246,0.30)" }}
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA Bar */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 lg:hidden flex"
        style={{
          background: "rgba(10,13,18,0.97)",
          borderTop: "1px solid rgba(245,179,1,0.20)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: "0 -4px 20px rgba(0,0,0,0.35)",
        }}
      >
        <a
          href={CONFIG.callLink}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-[0.85rem] font-semibold no-underline transition-colors"
          style={{ color: "#F5B301" }}
          id="mobile-sticky-call"
        >
          <Phone size={18} />
          Call Now
        </a>
        <div style={{ width: "1px", background: "rgba(245,179,1,0.15)" }} />
        <a
          href={CONFIG.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-[0.85rem] font-semibold text-white no-underline"
          style={{
            background: "linear-gradient(135deg, #25D366 0%, #1ebe5d 100%)",
            color: "#ffffff"
          }}
          id="mobile-sticky-whatsapp"
        >
          <WhatsAppIcon size={18} />
          WhatsApp
        </a>
      </div>
    </>
  );
}
