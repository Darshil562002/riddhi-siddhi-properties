import Link from "next/link";
import { Phone, ArrowRight, CheckCircle, MapPin, Shield, Users, Star } from "lucide-react";
import { CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Riddhi Siddhi Properties — Trusted Real Estate Advisors | Shahapur–Asangaon",
  description:
    "Learn about Riddhi Siddhi Properties — our story, mission, values, and why hundreds of families trust us for honest real estate guidance in Shahapur–Asangaon, Thane. Meet Keval Gala.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      {/* Breadcrumb */}
      <nav className="breadcrumb-bar" aria-label="Breadcrumb">
        <div className="container">
          <ol className="breadcrumb-list">
            <li><Link href="/">Home</Link></li>
            <li className="active">About Us</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="page-hero" aria-label="About Us hero">
        <div className="container relative z-10">
          <span
            className="inline-block px-4 py-2 rounded-full text-[0.72rem] font-semibold tracking-widest uppercase mb-6"
            style={{
              background: "rgba(245,179,1,0.12)",
              border: "1px solid rgba(245,179,1,0.25)",
              color: "#F5B301",
            }}
          >
            Our Story
          </span>
          <h1>About Riddhi Siddhi Properties</h1>
          <p>We are a local real estate advisory firm built on trust, honesty, and a deep understanding of the Shahapur–Asangaon, Thane property market. We help families find the right home — not just any home.</p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20" style={{ background: "#FFFDF6" }} aria-labelledby="story-heading">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Story visual card */}
            <div
              className="rounded-3xl min-h-[400px] flex items-center justify-center p-8 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #0E1218 0%, #1A2230 100%)",
                border: "1px solid rgba(245,179,1,0.18)",
              }}
            >
              {/* Radial glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at 50% 0%, rgba(245,179,1,0.10) 0%, transparent 65%)",
                }}
              />
              <div className="text-center relative z-10">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center font-serif text-4xl font-bold mx-auto mb-6"
                  style={{
                    background: "linear-gradient(135deg, #F5B301 0%, #D99A03 100%)",
                    color: "#0E1218",
                    boxShadow: "0 4px 24px rgba(245,179,1,0.30)",
                  }}
                >
                  RS
                </div>
                <div className="font-serif text-2xl font-bold mb-1" style={{ color: "#FFFDF6" }}>Riddhi Siddhi Properties</div>
                <div className="text-[0.85rem] mb-8" style={{ color: "rgba(255,253,246,0.50)" }}>Est. in Shahapur–Asangaon, Thane</div>
                <div className="grid grid-cols-2 gap-4">
                  {[{ n: "500+", l: "Families" }, { n: "10+", l: "Years" }, { n: "50+", l: "Projects" }, { n: "100%", l: "Honest" }].map(s => (
                    <div
                      key={s.l}
                      className="rounded-xl p-4 text-center"
                      style={{
                        background: "rgba(255,253,246,0.06)",
                        border: "1px solid rgba(245,179,1,0.15)",
                      }}
                    >
                      <div className="font-serif text-2xl font-bold" style={{ color: "#F5B301" }}>{s.n}</div>
                      <div className="text-[0.68rem] uppercase tracking-wider" style={{ color: "rgba(255,253,246,0.45)" }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Story Text */}
            <div>
              <span className="eyebrow" style={{ color: "#1A8D7A" }}>Our Story</span>
              <h2 id="story-heading" className="mt-2 mb-4">Built on Local Trust, Guided by Integrity</h2>
              <div className="divider-gold mb-6" />
              <p className="text-text-mid leading-[1.85] mb-5">
                Riddhi Siddhi Properties was founded with a simple belief: every family deserves honest, transparent, and truly helpful real estate guidance. We saw too many buyers making uninformed decisions, getting misled, or investing in the wrong properties — and we decided to be different.
              </p>
              <p className="text-text-mid leading-[1.85] mb-5">
                Based in Shahapur–Asangaon, Thane District, we have deep knowledge of the local property market, emerging micro-markets, infrastructure developments, and which projects offer real value. Our network spans both established builders and newer developers — allowing us to offer a wide, curated selection to buyers at every budget level.
              </p>
              <p className="text-text-mid leading-[1.85]">
                Our mission is not just to close deals. It is to build lasting relationships with buyers who come back to us for their second property, refer their family members, and trust us completely with one of the most important financial decisions of their lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ background: "#F9F6EE" }} aria-labelledby="values-heading">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Values</span>
            <h2 id="values-heading" className="mt-2 mb-2">What We Stand For</h2>
            <div className="divider-gold" />
            <p>These principles guide every conversation, every recommendation, and every relationship we build.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Shield size={22} style={{ color: "#1A8D7A" }} />, title: "Honesty Above All", desc: "We tell you what you need to hear, not what you want to hear. If a project has a risk or a downside, we'll tell you — because your trust matters more than any single deal." },
              { icon: <MapPin size={22} style={{ color: "#1A8D7A" }} />, title: "Local Market Mastery", desc: "We live and work in this market. We understand micro-market trends, price movements, and development potential at a granular level that no national portal can match." },
              { icon: <Users size={22} style={{ color: "#1A8D7A" }} />, title: "Family-Centred Guidance", desc: "We understand that buying a home is an emotional and financial milestone for a family. We approach every buyer's situation with empathy, patience, and genuine care." },
              { icon: <CheckCircle size={22} style={{ color: "#1A8D7A" }} />, title: "Zero Hidden Agenda", desc: "We work for the buyer. Our recommendations are based on your needs, budget, and goals — not on which builder pays the highest commission." },
              { icon: <Phone size={22} style={{ color: "#1A8D7A" }} />, title: "Full Spectrum Support", desc: "From site visits and shortlisting to loan documentation, legal checks, and registration — we support you at every stage, not just until the booking is done." },
              { icon: <Star size={22} style={{ color: "#1A8D7A" }} />, title: "Long-Term Relationships", desc: "We measure success not by transactions but by relationships. Our clients recommend us to their family, friends, and colleagues — that is the trust we build and protect." },
            ].map((v) => (
              <div
                key={v.title}
                className="glass-card-light p-6 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(26,141,122,0.10)", border: "1px solid rgba(26,141,122,0.20)" }}
                >
                  {v.icon}
                </div>
                <h4 className="mb-2">{v.title}</h4>
                <p className="text-[0.88rem] text-text-mid leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20" style={{ background: "#FFFDF6" }} aria-labelledby="different-heading">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="eyebrow">Our Advantage</span>
              <h2 id="different-heading" className="mt-2 mb-4">What Makes Us Different</h2>
              <div className="divider-gold mb-8" />
              <div className="flex flex-col gap-6">
                {[
                  { title: "Personal Advisor, Not an App", desc: "You speak directly with Keval Gala — not a call center, not a chatbot. Real human guidance from someone who knows this market personally and genuinely cares about your outcome." },
                  { title: "Smaller Market, Bigger Expertise", desc: "Large portals cover thousands of cities and thousands of agents. We focus exclusively on Shahapur–Asangaon, Thane — giving you depth of knowledge no national platform can provide." },
                  { title: "Buyer Education is Free", desc: "We spend significant time educating buyers on loans, schemes, legal checks, and market realities — at absolutely no charge. An informed buyer is a confident buyer." },
                  { title: "We Stay After the Sale", desc: "Post-purchase, we help with possession formalities, loan closure, registration, and society matters. We don't disappear once the deal is signed." },
                ].map((d, i) => (
                  <div key={d.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green-pale flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={18} className="text-forest" />
                    </div>
                    <div>
                      <h4 className="mb-1">{d.title}</h4>
                      <p className="text-[0.88rem] text-text-mid">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Track Record */}
            <div
              className="rounded-3xl p-10 text-white relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #0E1218 0%, #1A2230 100%)",
                border: "1px solid rgba(245,179,1,0.20)",
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse at 50% 0%, rgba(245,179,1,0.10) 0%, transparent 65%)",
                }}
              />
              <h3 className="text-center mb-8 relative z-10" style={{ color: "#FFFDF6" }}>Our Track Record</h3>
              <div className="grid grid-cols-2 gap-6 relative z-10">
                {[
                  { n: "500+", l: "Families Served" },
                  { n: "10+", l: "Years Experience" },
                  { n: "50+", l: "Projects Handled" },
                  { n: "100%", l: "Honest Guidance" },
                ].map((s) => (
                  <div key={s.l} className="text-center">
                    <div className="font-serif text-4xl font-bold leading-none mb-1" style={{ color: "#F5B301" }}>{s.n}</div>
                    <div className="text-[0.75rem] uppercase tracking-wider" style={{ color: "rgba(255,253,246,0.45)" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20" style={{ background: "#F9F6EE" }} aria-labelledby="founder-heading">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <span className="eyebrow">Meet Your Advisor</span>
            <h2 id="founder-heading" className="mt-2 mb-4">Keval Gala — Your Trusted Property Partner</h2>
            <div className="divider-gold mx-auto mb-6" />
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 font-serif text-4xl font-bold shadow-lg"
              style={{
                background: "linear-gradient(135deg, #1A8D7A 0%, #147265 100%)",
                color: "#FFFDF6",
                boxShadow: "0 4px 24px rgba(26,141,122,0.30)",
              }}
            >
              K
            </div>
            <p className="text-[1.02rem] text-text-mid leading-[1.85] mb-5">
              Keval Gala has been a trusted name in Shahapur–Asangaon&apos;s real estate market for over a decade. With deep roots in the local community and extensive knowledge of the Thane District property landscape, he founded Riddhi Siddhi Properties with a mission to bring transparency and professionalism to real estate advisory — especially for first-time and mid-market buyers who often feel overwhelmed by the complexity of property transactions.
            </p>
            <p className="text-[1.02rem] text-text-mid leading-[1.85] mb-8">
              &ldquo;Every family&apos;s dream of owning a home is precious. I treat each inquiry the same way I would treat a recommendation to my own family — with honesty, thoroughness, and genuine care. My goal is not to close a deal, but to help you make the right decision.&rdquo;
              <span className="block mt-2 font-semibold text-dark">— Keval Gala</span>
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a href={CONFIG.callLink} className="btn btn-gold btn-lg" id="about-call-btn">
                <Phone size={18} /> {CONFIG.phoneDisplay}
              </a>
              <Link href="/projects" className="btn btn-outline btn-lg" id="about-projects-btn">
                Explore Projects <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
