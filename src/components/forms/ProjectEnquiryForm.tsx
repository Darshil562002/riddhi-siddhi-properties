"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

interface Props {
  projectName: string;
}

export default function ProjectEnquiryForm({ projectName }: Props) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", configuration: "", message: "", consent: false, honeypot: "" });
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Name is required.";
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ""))) return "Please enter a valid 10-digit mobile number.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Please enter a valid email address.";
    if (!form.consent) return "Please accept the data consent to proceed.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.honeypot) return; // spam trap

    const err = validate();
    if (err) { setErrorMsg(err); return; }
    setErrorMsg("");
    setState("loading");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, projectName }),
      });
      if (res.ok) {
        setState("success");
        setForm({ name: "", phone: "", email: "", configuration: "", message: "", consent: false, honeypot: "" });
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="text-center py-4">
        <CheckCircle size={36} className="text-forest mx-auto mb-3" />
        <h4 className="mb-1">Enquiry Sent!</h4>
        <p className="text-[0.85rem] text-text-mid">We&apos;ll contact you within 24 hours. Thank you!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label={`Enquiry form for ${projectName}`}>
      {/* Honeypot */}
      <input type="text" name="honeypot" value={form.honeypot} onChange={handleChange} className="hidden" tabIndex={-1} aria-hidden="true" />

      <div className="form-group">
        <label htmlFor="enq-name" className="form-label">Name *</label>
        <input id="enq-name" name="name" type="text" value={form.name} onChange={handleChange} className="form-input" placeholder="Your full name" required />
      </div>
      <div className="form-group">
        <label htmlFor="enq-phone" className="form-label">Mobile *</label>
        <input id="enq-phone" name="phone" type="tel" value={form.phone} onChange={handleChange} className="form-input" placeholder="10-digit mobile number" required />
      </div>
      <div className="form-group">
        <label htmlFor="enq-config" className="form-label">Unit Interested In</label>
        <select id="enq-config" name="configuration" value={form.configuration} onChange={handleChange} className="form-select">
          <option value="">Select configuration...</option>
          <option value="1 RK">1 RK</option>
          <option value="1 BHK">1 BHK</option>
          <option value="2 BHK">2 BHK</option>
          <option value="3 BHK">3 BHK</option>
          <option value="Plot">NA Plot</option>
          <option value="Any">Any / Not Sure</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="enq-msg" className="form-label">Message (optional)</label>
        <textarea id="enq-msg" name="message" value={form.message} onChange={handleChange} className="form-textarea" placeholder="Any specific requirement..." style={{ minHeight: "70px" }} />
      </div>

      {/* Consent */}
      <div className="flex items-start gap-2 mb-4">
        <input id="enq-consent" type="checkbox" name="consent" checked={form.consent} onChange={handleChange} className="mt-1 cursor-pointer accent-forest" required />
        <label htmlFor="enq-consent" className="text-[0.78rem] text-text-mid leading-relaxed cursor-pointer">
          I consent to Riddhi Siddhi Properties storing my information to respond to this enquiry. See our{" "}
          <a href="/privacy-policy" className="text-forest underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
        </label>
      </div>

      {errorMsg && (
        <div className="flex items-center gap-2 text-red-600 text-[0.82rem] mb-3">
          <AlertCircle size={14} /> {errorMsg}
        </div>
      )}
      {state === "error" && (
        <div className="flex items-center gap-2 text-red-600 text-[0.82rem] mb-3">
          <AlertCircle size={14} /> Something went wrong. Please call us directly.
        </div>
      )}

      <button type="submit" className="btn btn-primary w-full justify-center" disabled={state === "loading"}>
        {state === "loading" ? "Sending..." : <><Send size={14} /> Send Enquiry</>}
      </button>
    </form>
  );
}
