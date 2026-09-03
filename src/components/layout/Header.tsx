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

  // On the homepage the hero is dark, so start transparent.
  // On other pages start with a solid dark nav (page-hero is also dark).
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
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

  // Transparent at top of homepage, dark glass always on scroll or on inner pages
  const isTransparent = isHome && !isScrolled && !isMobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
        style={{
          background: isTransparent
            ? "transparent"
            : isScrolled || !isHome
            ? "rgba(14,18,24,0.93)"
            : "rgba(14,18,24,0.93)",
          borderBottom: isTransparent
            ? "1px solid rgba(255,253,246,0.08)"
            : "1px solid rgba(245,179,1,0.12)",
          backdropFilter: isTransparent ? "none" : "blur(20px)",
          WebkitBackdropFilter: isTransparent ? "none" : "blur(20px)",
          boxShadow: isTransparent
            ? "none"
            : "0 4px 24px rgba(0,0,0,0.25)",
        }}
      >
        <div className="container flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 no-underline group">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center font-serif font-bold text-lg leading-none transition-transform duration-300 group-hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #1A8D7A 0%, #147265 100%)",
                color: "#FFFDF6",
                boxShadow: "0 2px 12px rgba(26,141,122,0.35)",
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
                style={{ color: "rgba(245,179,1,0.75)" }}
              >
                Properties
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="relative px-4 py-2 rounded-lg text-[0.875rem] font-medium transition-all duration-200 no-underline group/nav"
                style={
                  activeId === item.id
                    ? { color: "#F5B301", fontWeight: 600 }
                    : { color: "rgba(255,253,246,0.80)" }
                }
                onMouseEnter={(e) => {
                  if (activeId !== item.id)
                    (e.currentTarget as HTMLElement).style.color = "#FFFDF6";
                }}
                onMouseLeave={(e) => {
                  if (activeId !== item.id)
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,253,246,0.80)";
                }}
              >
                {item.label}
                {/* Active underline indicator */}
                {activeId === item.id && (
                  <span
                    className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, #F5B301, #D99A03)",
                    }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Header CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={CONFIG.callLink}
              className="flex items-center gap-1.5 text-[0.85rem] font-semibold no-underline transition-colors"
              style={{ color: "rgba(255,253,246,0.85)" }}
              id="header-call-btn"
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#F5B301")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(255,253,246,0.85)")
              }
            >
              <Phone size={14} />
              {CONFIG.phoneDisplay}
            </a>
            <a
              href={CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
              id="header-whatsapp-btn"
            >
              <WhatsAppIcon size={14} />
              WhatsApp
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-200"
            style={{
              background: isMobileOpen
                ? "rgba(245,179,1,0.12)"
                : "rgba(255,253,246,0.06)",
              border: "1px solid rgba(255,253,246,0.10)",
            }}
            onClick={toggleMobile}
            aria-label="Toggle navigation"
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? (
              <X size={20} style={{ color: "#F5B301" }} />
            ) : (
              <Menu size={20} style={{ color: "#FFFDF6" }} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav
        className={`fixed inset-0 z-40 transition-all duration-400 lg:hidden`}
        style={{
          top: "72px",
          background: "rgba(10,13,18,0.97)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          transform: isMobileOpen ? "translateX(0)" : "translateX(100%)",
          borderTop: "1px solid rgba(245,179,1,0.12)",
        }}
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col p-6 gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200 no-underline"
              style={
                activeId === item.id
                  ? {
                      color: "#F5B301",
                      background: "rgba(245,179,1,0.10)",
                      fontWeight: 600,
                      borderLeft: "2px solid #F5B301",
                    }
                  : { color: "rgba(255,253,246,0.75)" }
              }
              onClick={() => {
                setIsMobileOpen(false);
                document.body.style.overflow = "";
              }}
            >
              {item.label}
            </Link>
          ))}
          <div
            className="flex flex-col gap-3 mt-6 pt-6"
            style={{ borderTop: "1px solid rgba(255,253,246,0.08)" }}
          >
            <a
              href={CONFIG.callLink}
              className="btn btn-gold"
              id="mobile-call-btn"
            >
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
