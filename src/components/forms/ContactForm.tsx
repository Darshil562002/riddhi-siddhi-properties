"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

interface Props {
  id?: string;
}

export default function ContactForm({ id }: Props) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "", consent: false, honeypot: "" });
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Name is required.";
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ""))) return "Please enter a valid 10-digit mobile number.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Please enter a valid email address.";
    if (!form.message.trim()) return "Please enter your message.";
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setState(res.ok ? "success" : "error");
      if (res.ok) setForm({ name: "", phone: "", email: "", message: "", consent: false, honeypot: "" });
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="text-center py-8">
        <CheckCircle size={42} className="text-forest mx-auto mb-3" />
        <h3 className="mb-2">Message Sent!</h3>
        <p className="text-text-mid">Thank you for reaching out. We&apos;ll call or message you back within a few hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate id={id} aria-label="Contact form">
      <input type="text" name="honeypot" value={form.honeypot} onChange={handleChange} className="hidden" tabIndex={-1} aria-hidden="true" />
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div className="form-group !mb-0">
          <label htmlFor="contact-name" className="form-label">Full Name *</label>
          <input id="contact-name" name="name" type="text" value={form.name} onChange={handleChange} className="form-input" placeholder="Your name" required />
        </div>
        <div className="form-group !mb-0">
          <label htmlFor="contact-phone" className="form-label">Mobile Number *</label>
          <input id="contact-phone" name="phone" type="tel" value={form.phone} onChange={handleChange} className="form-input" placeholder="10-digit number" required />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="contact-email" className="form-label">Email (optional)</label>
        <input id="contact-email" name="email" type="email" value={form.email} onChange={handleChange} className="form-input" placeholder="you@example.com" />
      </div>
      <div className="form-group">
        <label htmlFor="contact-message" className="form-label">Message *</label>
        <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} className="form-textarea" placeholder="Tell us what you're looking for..." rows={4} required />
      </div>
      <div className="flex items-start gap-2 mb-4">
        <input id="contact-consent" type="checkbox" name="consent" checked={form.consent} onChange={handleChange} className="mt-1 cursor-pointer accent-forest" required />
        <label htmlFor="contact-consent" className="text-[0.8rem] text-text-mid leading-relaxed cursor-pointer">
          I consent to Riddhi Siddhi Properties contacting me and storing my information. See{" "}
          <a href="/privacy-policy" className="text-forest underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
        </label>
      </div>
      {errorMsg && <div className="flex items-center gap-2 text-red-600 text-[0.82rem] mb-3"><AlertCircle size={14} /> {errorMsg}</div>}
      {state === "error" && <div className="flex items-center gap-2 text-red-600 text-[0.82rem] mb-3"><AlertCircle size={14} /> Something went wrong. Please call us directly.</div>}
      <button type="submit" className="btn btn-primary w-full justify-center" disabled={state === "loading"}>
        {state === "loading" ? "Sending..." : <><Send size={15} /> Send Message</>}
      </button>
    </form>
  );
}
