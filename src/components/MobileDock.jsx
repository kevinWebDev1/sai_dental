"use client";

import { FaPhone, FaWhatsapp } from "react-icons/fa6";

export default function MobileDock({ onOpenDrawer }) {
  return (
    <nav 
      aria-label="Mobile Quick Actions" 
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] flex items-center gap-2"
    >
      {/* 1-Tap Direct Call */}
      <a
        href="tel:+919235179344"
        className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl bg-slate-900 text-white font-semibold text-xs active:scale-[0.98] transition-transform"
      >
        <FaPhone className="w-3.5 h-3.5 shrink-0" />
        <span>Call Clinic</span>
      </a>

      {/* 1-Tap WhatsApp Appointment Drawer */}
      <button
        type="button"
        onClick={onOpenDrawer}
        className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl bg-[#D4F634] text-slate-950 font-bold text-xs active:scale-[0.98] transition-transform shadow-md shadow-[#D4F634]/20"
      >
        <FaWhatsapp className="w-4 h-4 text-slate-950 shrink-0" />
        <span>WhatsApp Book</span>
      </button>
    </nav>
  );
}
