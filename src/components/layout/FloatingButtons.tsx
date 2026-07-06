"use client";

import { Phone } from "lucide-react";
import { CONFIG } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/ui/Icons";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-24 right-5 z-30 hidden lg:flex flex-col gap-3" aria-label="Quick contact">
      <a
        href={CONFIG.callLink}
        className="w-14 h-14 rounded-full bg-forest text-white flex items-center justify-center shadow-lg hover:bg-emerald hover:scale-110 transition-all duration-200"
        title="Call Now"
        id="float-call-btn"
      >
        <Phone size={22} />
      </a>
      <a
        href={CONFIG.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:bg-[#22c55e] hover:scale-110 transition-all duration-200"
        title="WhatsApp Us"
        id="float-whatsapp-btn"
      >
        <WhatsAppIcon size={24} />
      </a>
    </div>
  );
}
