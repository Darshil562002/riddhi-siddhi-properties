"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { CONFIG, NAV_ITEMS } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/ui/Icons";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  const toggleMobile = () => {
    const next = !isMobileOpen;
    setIsMobileOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  const getActiveId = () => {
    if (pathname === "/") return "home";
    const segment = pathname.split("/")[1];
    return NAV_ITEMS.find((n) => n.href === `/${segment}`)?.id || "";
  };

  const activeId = getActiveId();

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border-lt"
            : "bg-white"
        }`}
      >
        <div className="container flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 no-underline">
            <div className="w-10 h-10 rounded-lg bg-forest flex items-center justify-center text-white font-serif font-bold text-lg">
              RS
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif font-semibold text-dark text-[1.05rem]">
                Riddhi Siddhi
              </span>
              <span className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase text-text-light">
                Properties
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-[0.88rem] font-medium transition-colors no-underline ${
                  activeId === item.id
                    ? "text-forest bg-green-pale"
                    : "text-text-mid hover:text-forest hover:bg-green-pale/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Header CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={CONFIG.callLink}
              className="flex items-center gap-1.5 text-[0.85rem] font-semibold text-forest hover:text-emerald transition-colors no-underline"
              id="header-call-btn"
            >
              <Phone size={14} />
              {CONFIG.phoneDisplay}
            </a>
            <a
              href={CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] text-white text-[0.82rem] font-semibold hover:bg-[#22c55e] transition-colors no-underline"
              id="header-whatsapp-btn"
            >
              <WhatsAppIcon size={14} />
              WhatsApp
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-warm-white transition-colors"
            onClick={toggleMobile}
            aria-label="Toggle navigation"
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav
        className={`fixed inset-0 z-40 bg-white transition-transform duration-300 lg:hidden ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "72px" }}
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col p-6 gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`px-4 py-3 rounded-lg text-base font-medium transition-colors no-underline ${
                activeId === item.id
                  ? "text-forest bg-green-pale"
                  : "text-text-mid hover:text-forest hover:bg-green-pale/50"
              }`}
              onClick={() => {
                setIsMobileOpen(false);
                document.body.style.overflow = "";
              }}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-border-lt">
            <a href={CONFIG.callLink} className="btn btn-primary" id="mobile-call-btn">
              <Phone size={16} />
              Call Now — {CONFIG.phoneDisplay}
            </a>
            <a
              href={CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              id="mobile-whatsapp-btn"
            >
              <WhatsAppIcon size={16} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-[72px]" />
    </>
  );
}
