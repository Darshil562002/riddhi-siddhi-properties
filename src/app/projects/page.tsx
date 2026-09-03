"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Phone, Search } from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { CONFIG } from "@/lib/constants";

const BUDGET_OPTIONS = [
  { value: "all", label: "Any Budget" },
  { value: "0-30", label: "Under ₹30 L" },
  { value: "30-60", label: "₹30 L – ₹60 L" },
  { value: "60-100", label: "₹60 L – ₹1 Cr" },
];

const TYPE_OPTIONS = [
  { value: "all", label: "All Types" },
  { value: "affordable", label: "Affordable" },
  { value: "flat", label: "Luxury Flat" },
  { value: "plot", label: "NA Plot" },
];

const STATUS_OPTIONS = [
  { value: "all", label: "All Status" },
  { value: "ready", label: "Ready to Move" },
  { value: "upcoming", label: "Pre-Launch/Upcoming" },
];

export default function ProjectsClient() {
  const [search, setSearch] = useState("");
  const [budget, setBudget] = useState("all");
  const [type, setType] = useState("all");
  const [status, setStatus] = useState("all");

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchSearch =
        !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase()) ||
        p.developer.toLowerCase().includes(search.toLowerCase());
      const matchBudget = budget === "all" || p.budget === budget;
      const matchType = type === "all" || p.propertyType === type;
      const matchStatus = status === "all" || p.status === status;
      return matchSearch && matchBudget && matchType && matchStatus;
    });
  }, [search, budget, type, status]);

  const resetFilters = () => {
    setSearch("");
    setBudget("all");
    setType("all");
    setStatus("all");
  };

  return (
    <main>
      {/* Breadcrumb */}
      <nav className="breadcrumb-bar" aria-label="Breadcrumb">
        <div className="container">
          <ol className="breadcrumb-list">
            <li><Link href="/">Home</Link></li>
            <li className="active">Projects</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="page-hero" aria-label="Projects hero">
        <div className="container relative z-10">
          <span
            className="inline-block px-4 py-2 rounded-full text-[0.72rem] font-semibold tracking-widest uppercase mb-6"
            style={{
              background: "rgba(245,179,1,0.12)",
              border: "1px solid rgba(245,179,1,0.25)",
              color: "#F5B301",
            }}
          >
            All Listings
          </span>
          <h1>Explore Our Projects</h1>
          <p>
            Carefully curated residential projects across Shahapur–Asangaon, Thane.
            All listings are personally verified by Keval Gala.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div
        className="sticky top-[72px] z-30"
        style={{
          background: "rgba(255,253,246,0.97)",
          borderBottom: "1px solid rgba(224,213,184,0.70)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "0 2px 16px rgba(31,41,51,0.06)",
        }}
      >
        <div className="container py-4">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
            {/* Search */}
            <div className="relative flex-1 min-w-[180px]">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light" />
              <input
                type="text"
                placeholder="Search by project, location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="form-input pl-9 bg-white"
                aria-label="Search projects"
              />
            </div>
            {/* Budget */}
            <select value={budget} onChange={(e) => setBudget(e.target.value)} className="form-select" aria-label="Filter by budget">
              {BUDGET_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
            {/* Type */}
            <select value={type} onChange={(e) => setType(e.target.value)} className="form-select" aria-label="Filter by property type">
              {TYPE_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
            {/* Status */}
            <select value={status} onChange={(e) => setStatus(e.target.value)} className="form-select" aria-label="Filter by status">
              {STATUS_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
            {/* Reset */}
            {(search || budget !== "all" || type !== "all" || status !== "all") && (
              <button onClick={resetFilters} className="btn btn-outline btn-sm whitespace-nowrap">
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results */}
      <section className="py-16" style={{ background: "#FFFDF6" }} aria-live="polite" aria-label="Project listings">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <p className="text-text-mid text-[0.9rem]">
              Showing <strong className="text-dark">{filtered.length}</strong> of {PROJECTS.length} projects
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🏡</div>
              <h3 className="mb-2">No projects match your filters</h3>
              <p className="text-text-mid mb-6">Try adjusting your search or filters, or contact us — we may have off-market listings.</p>
              <button onClick={resetFilters} className="btn btn-outline mr-3">Clear Filters</button>
              <a href={CONFIG.callLink} className="btn btn-primary"><Phone size={15} /> Call Us</a>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} titleTag="h2" />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Didn't find section */}
      <section className="py-14 border-t" style={{ background: "#FFF7D1", borderColor: "rgba(224,213,184,0.60)" }} aria-label="Custom inquiry">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="mb-3">Don&apos;t See What You&apos;re Looking For?</h3>
            <p className="text-text-mid mb-6">
              We regularly source off-market properties and upcoming projects that aren&apos;t listed publicly.
              Tell us your requirements — budget, location, BHK type — and we&apos;ll find options for you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={CONFIG.callLink} className="btn btn-primary" id="projects-call-btn">
                <Phone size={15} /> Call {CONFIG.phoneDisplay}
              </a>
              <a href={CONFIG.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" id="projects-wa-btn">
                <WhatsAppIcon size={15} /> Share Requirements on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
