"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Calendar } from "lucide-react";
import { PROJECTS } from "@/lib/projects";

export default function SiteVisitForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", projectName: "", preferredDate: "", preferredTime: "", consent: false, honeypot: "" });
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Name is required.";
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ""))) return "Please enter a valid 10-digit mobile number.";
    if (!form.consent) return "Please accept the data consent to proceed.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.honeypot) return;
    const err = validate();
    if (err) { setErrorMsg(err); return; }
    setErrorMsg("");
    setState("loading");
    try {
      const res = await fetch("/api/site-visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setState(res.ok ? "success" : "error");
      if (res.ok) setForm({ name: "", phone: "", email: "", projectName: "", preferredDate: "", preferredTime: "", consent: false, honeypot: "" });
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="text-center py-8">
        <CheckCircle size={42} className="mx-auto mb-3" style={{ color: "#1A8D7A" }} />
        <h3 className="mb-2">Site Visit Booked!</h3>
        <p style={{ color: "#6A6A6A" }}>We&apos;ll confirm your visit details via call or WhatsApp shortly. See you there!</p>
      </div>
    );
  }

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Site visit booking form">
      <input type="text" name="honeypot" value={form.honeypot} onChange={handleChange} className="hidden" tabIndex={-1} aria-hidden="true" />
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div className="form-group !mb-0">
          <label htmlFor="sv-name" className="form-label">Full Name *</label>
          <input id="sv-name" name="name" type="text" value={form.name} onChange={handleChange} className="form-input" placeholder="Your name" required />
        </div>
        <div className="form-group !mb-0">
          <label htmlFor="sv-phone" className="form-label">Mobile *</label>
          <input id="sv-phone" name="phone" type="tel" value={form.phone} onChange={handleChange} className="form-input" placeholder="10-digit number" required />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="sv-project" className="form-label">Project to Visit</label>
        <select id="sv-project" name="projectName" value={form.projectName} onChange={handleChange} className="form-select">
          <option value="">Select project...</option>
          {PROJECTS.map((p) => <option key={p.id} value={p.name}>{p.name}</option>)}
          <option value="Not decided">Not decided yet</option>
        </select>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div className="form-group !mb-0">
          <label htmlFor="sv-date" className="form-label">Preferred Date</label>
          <input id="sv-date" name="preferredDate" type="date" value={form.preferredDate} onChange={handleChange} className="form-input" min={minDate} />
        </div>
        <div className="form-group !mb-0">
          <label htmlFor="sv-time" className="form-label">Preferred Time</label>
          <select id="sv-time" name="preferredTime" value={form.preferredTime} onChange={handleChange} className="form-select">
            <option value="">Select time...</option>
            <option value="Morning (9–12)">Morning (9 AM – 12 PM)</option>
            <option value="Afternoon (12–3)">Afternoon (12 – 3 PM)</option>
            <option value="Evening (3–7)">Evening (3 – 7 PM)</option>
          </select>
        </div>
      </div>
      <div className="flex items-start gap-2 mb-4">
        <input id="sv-consent" type="checkbox" name="consent" checked={form.consent} onChange={handleChange} className="mt-1 cursor-pointer" style={{ accentColor: "#1A8D7A" }} required />
        <label htmlFor="sv-consent" className="text-[0.8rem] leading-relaxed cursor-pointer" style={{ color: "#6A6A6A" }}>
          I consent to Riddhi Siddhi Properties contacting me for this site visit. See{" "}
          <a href="/privacy-policy" className="underline" style={{ color: "#1A8D7A" }} target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
        </label>
      </div>
      {errorMsg && <div className="flex items-center gap-2 text-[0.82rem] mb-3" style={{ color: "#b91c1c" }}><AlertCircle size={14} /> {errorMsg}</div>}
      {state === "error" && <div className="flex items-center gap-2 text-[0.82rem] mb-3" style={{ color: "#b91c1c" }}><AlertCircle size={14} /> Something went wrong. Please call us directly.</div>}
      <button type="submit" className="btn btn-primary w-full justify-center" disabled={state === "loading"}>
        {state === "loading" ? "Booking..." : <><Calendar size={15} /> Book Site Visit</>}
      </button>
    </form>
  );
}
