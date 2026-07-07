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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
        style={{
          background: isScrolled ? "rgba(255,253,246,0.97)" : "#FFFDF6",
          borderBottom: isScrolled ? "1px solid #E0D5B8" : "1px solid #E0D5B8",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          boxShadow: isScrolled ? "0 2px 12px rgba(31,41,51,0.07)" : "none",
        }}
      >
        <div className="container flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 no-underline">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center font-serif font-bold text-lg leading-none"
              style={{ background: "#1F2933", color: "#F5B301" }}
            >
              RS
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif font-semibold text-[1.05rem]" style={{ color: "#1F2933" }}>
                Riddhi Siddhi
              </span>
              <span className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase" style={{ color: "#6A6A6A" }}>
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
                className={`px-4 py-2 rounded-lg text-[0.88rem] font-medium transition-colors no-underline`}
                style={
                  activeId === item.id
                    ? { color: "#1F2933", background: "#FFF7D1", fontWeight: 600 }
                    : { color: "#4A4A4A" }
                }
                onMouseEnter={(e) => { if (activeId !== item.id) (e.currentTarget as HTMLElement).style.background = "#FFF7D1"; }}
                onMouseLeave={(e) => { if (activeId !== item.id) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Header CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={CONFIG.callLink}
              className="flex items-center gap-1.5 text-[0.85rem] font-semibold no-underline transition-colors"
              style={{ color: "#1A8D7A" }}
              id="header-call-btn"
            >
              <Phone size={14} />
              {CONFIG.phoneDisplay}
            </a>
            <a
              href={CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[0.82rem] font-semibold no-underline transition-colors"
              style={{ background: "#25D366", color: "#fff" }}
              id="header-whatsapp-btn"
            >
              <WhatsAppIcon size={14} />
              WhatsApp
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors"
            style={{ background: "transparent" }}
            onClick={toggleMobile}
            aria-label="Toggle navigation"
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen
              ? <X size={22} style={{ color: "#1F2933" }} />
              : <Menu size={22} style={{ color: "#1F2933" }} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav
        className={`fixed inset-0 z-40 transition-transform duration-300 lg:hidden`}
        style={{ top: "72px", background: "#FFFDF6", transform: isMobileOpen ? "translateX(0)" : "translateX(100%)" }}
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col p-6 gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="px-4 py-3 rounded-lg text-base font-medium transition-colors no-underline"
              style={
                activeId === item.id
                  ? { color: "#1F2933", background: "#FFF7D1", fontWeight: 600 }
                  : { color: "#4A4A4A" }
              }
              onClick={() => {
                setIsMobileOpen(false);
                document.body.style.overflow = "";
              }}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-6 pt-6" style={{ borderTop: "1px solid #E0D5B8" }}>
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
