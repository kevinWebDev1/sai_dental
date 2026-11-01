"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Check, Clock, ShieldCheck, Star } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export default function AppointmentDrawer({ isOpen, onClose, clinic }) {
  const [selectedService, setSelectedService] = useState("Tooth Pain / Root Canal");
  const [selectedTime, setSelectedTime] = useState("Evening (5 PM - 9 PM)");
  const [patientName, setPatientName] = useState("");

  const clinicName = clinic?.name || "Sai Specialized Dental Hospital";
  const phone = clinic?.phone || "919235179344";
  const area = clinic?.area || "Gomti Nagar, Lucknow";
  const reviews = clinic?.reviews || "151+";
  const rating = clinic?.rating || "4.9";
  const doctors = clinic?.doctors || [
    {
      name: "Dr. Sumi Tiwari",
      role: "Lead Surgeon",
      branch: "Vipul Khand 2",
      image: "/doctors/dr_sumi_tiwari.png",
    },
    {
      name: "Dr. Rahul Tiwari",
      role: "Implantologist",
      branch: "Viram Khand 1",
      image: "/doctors/dr_rahul_tiwari.png",
    },
  ];

  if (!isOpen) return null;

  const services = [
    {
      id: "rct",
      label: "Tooth Pain / Root Canal",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 stroke-current">
          <path d="M12 2C8.5 2 7 4.5 7 7c0 3 1.5 6 1.5 9 0 2 .5 5 2.5 5 1.5 0 2-2 2-4 0-1 0-1 1-1s1 0 1 1c0 2 .5 4 2 4 2 0 2.5-3 2.5-5 0-3 1.5-6 1.5-9 0-2.5-1.5-5-5-5h-1z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 8v6m4-6v6" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: "implant",
      label: "Dental Implants / Missing Teeth",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 stroke-current">
          <path d="M7 4a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3H7V4z" />
          <path d="M8 10h8m-7 3h6m-5 3h4m-3 3h2" strokeLinecap="round" />
          <path d="M10 7v13a2 2 0 0 0 4 0V7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: "aligner",
      label: "Clear Aligners / Braces",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 stroke-current">
          <path d="M4 15C4 9 7.5 5 12 5s8 4 8 10" strokeLinecap="round" />
          <rect x="6.5" y="10" width="3" height="3" rx="0.5" fill="currentColor" />
          <rect x="10.5" y="8" width="3" height="3" rx="0.5" fill="currentColor" />
          <rect x="14.5" y="10" width="3" height="3" rx="0.5" fill="currentColor" />
          <line x1="5" y1="13" x2="19" y2="13" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: "cleaning",
      label: "Teeth Cleaning & Whitening",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 stroke-current">
          <path d="M10 4C7.5 4 6.5 5.8 6.5 7.8c0 2.5 1 5 1 7.2 0 1.8.5 3.5 2 3.5 1.2 0 1.5-1.5 1.5-3 0-.8 0-.8 1-.8s1 0 1 .8c0 1.5.3 3 1.5 3 1.5 0 2-1.7 2-3.5 0-2.2 1-4.7 1-7.2 0-2-.9-3.8-3.5-3.8h-1z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 5l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: "smile",
      label: "Cosmetic Smile Makeover",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 stroke-current">
          <path d="M4 11s3 6 8 6 8-6 8-6" strokeLinecap="round" />
          <path d="M7 11.5c1.5 2 3.2 3 5 3s3.5-1 5-3" strokeLinecap="round" />
          <path d="M12 4v2M4.93 6.93l1.41 1.41M19.07 6.93l-1.41 1.41" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: "checkup",
      label: "General Checkup / Consultation",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 stroke-current">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4.5c1.62-1.63 5-2 5-2" />
        </svg>
      ),
    },
  ];

  const timings = ["Morning (10 AM - 2 PM)", "Evening (5 PM - 9 PM)", "As Soon As Possible"];

  const handleSendWhatsApp = () => {
    const greeting = new Date().getHours() < 12 ? "Good morning" : new Date().getHours() < 17 ? "Good afternoon" : "Good evening";
    const nameText = patientName.trim() ? `My name is ${patientName.trim()}. ` : "";
    const message = `${greeting} Dr. / ${clinicName}. ${nameText}I would like to schedule an appointment for: *${selectedService}*. Preferred Timing: *${selectedTime}*. Please confirm availability.`;
    
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${phone.replace(/^\+/, "")}?text=${encoded}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6 bg-slate-950/70 backdrop-blur-md transition-opacity duration-200">
      {/* Backdrop tap to close */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Spacious Desktop-First Dialog (Adapts from Native Mobile Drawer to Wide PC Modal) */}
      <div className="relative w-full md:max-w-4xl lg:max-w-[56rem] bg-white rounded-t-3xl md:rounded-3xl shadow-2xl z-10 max-h-[92vh] overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-200">
        
        {/* ==================================================================
            LEFT COLUMN (DESKTOP ONLY): Clinical Identity & Reassurance
            ================================================================== */}
        <div className="hidden md:flex md:w-[320px] lg:w-[340px] bg-[#1c2e4a] text-white p-7 lg:p-8 flex-col justify-between shrink-0 relative overflow-hidden">
          {/* Subtle ambient lighting accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Hospital Emblem Badge */}
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 rounded-xl bg-white p-1 border border-white/20 flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
                {clinic?.slug === "sai" || !clinic ? (
                  <img
                    src="/clinic_logo.png"
                    alt={`${clinicName} Official Logo`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#1c2e4a] to-[#38537b] flex items-center justify-center text-[#D4F634] font-black text-xs tracking-wider rounded-lg">
                    {clinic?.initials || "DC"}
                  </div>
                )}
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-sky-200 block">
                  Hospital Consultation
                </span>
                <span className="text-xs font-semibold text-white/90">
                  {area}
                </span>
              </div>
            </div>

            <h3 className="font-heading font-serif text-2xl lg:text-3xl text-white tracking-tight leading-tight mb-3">
              Direct Access to Treating Doctors
            </h3>

            <p className="text-white/75 text-xs lg:text-[13px] leading-relaxed mb-6 font-normal">
              Select your concern and timing. Our clinical team confirms your exact appointment directly on WhatsApp in minutes.
            </p>

            {/* Treating Specialist Badges */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              {doctors.map((doc, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-2.5">
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white/10 shrink-0">
                    <Image
                      src={doc.image || "/doctors/dr_sumi_tiwari.png"}
                      alt={doc.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{doc.name}</h4>
                    <p className="text-[11px] text-sky-200">{doc.role}{doc.branch ? ` • ${doc.branch}` : ""}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Trust Indicators */}
          <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between text-[11px] text-white/80">
            <div className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              <span className="font-semibold">{rating} • {reviews} Reviews</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Sterile</span>
            </div>
          </div>
        </div>

        {/* ==================================================================
            RIGHT COLUMN: Spacious Desktop Form & Selectors
            ================================================================== */}
        <div className="flex-1 p-6 sm:p-8 overflow-y-auto max-h-[92vh]">
          {/* Handle bar on mobile */}
          <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-4 md:hidden" />

          {/* Dialog Header */}
          <div className="flex items-start justify-between pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10.5px] font-bold text-emerald-700 uppercase tracking-wider">
                  Reception Online Now
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 tracking-tight">
                Quick Appointment
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Direct WhatsApp booking with {clinicName} reception
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Patient Name Input */}
          <div className="mt-5">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              Your Name <span className="text-slate-400 font-normal lowercase">(optional)</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Rahul Sharma"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#38537b]/25 focus:border-[#38537b] text-sm transition-all"
            />
          </div>

          {/* Treatment Selectors (Spacious 2-Column Grid on Both Mobile & Desktop) */}
          <div className="mt-5">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
              Select Dental Treatment
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {services.map((item) => {
                const isSelected = selectedService === item.label;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedService(item.label)}
                    className={`flex items-center gap-3 p-3 text-left rounded-xl border text-xs transition-all duration-150 ${
                      isSelected
                        ? "border-[#38537b] bg-[#38537b]/[0.06] text-[#1c2e4a] font-semibold shadow-2xs ring-1 ring-[#38537b]/20"
                        : "border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 bg-white"
                    }`}
                  >
                    <span
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? "bg-[#38537b] text-white shadow-xs"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {item.svg}
                    </span>
                    <span className="line-clamp-2 leading-snug flex-1 text-xs">
                      {item.label}
                    </span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38537b] shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Preferred Timing (Desktop: 3-Column Horizontal Pill Grid!) */}
          <div className="mt-5">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-2">
              Preferred Consultation Time
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {timings.map((time) => {
                const isSelected = selectedTime === time;
                return (
                  <label
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`flex items-center justify-between sm:justify-center gap-2 p-2.5 sm:py-3 rounded-xl border text-xs cursor-pointer transition-all duration-150 text-center ${
                      isSelected
                        ? "border-[#38537b] bg-[#38537b]/[0.06] text-[#1c2e4a] font-semibold shadow-2xs ring-1 ring-[#38537b]/20"
                        : "border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 bg-white"
                    }`}
                  >
                    <span className="text-[11.5px] leading-tight">{time}</span>
                    <span
                      className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 sm:hidden ${
                        isSelected
                          ? "border-[#38537b] bg-[#38537b]"
                          : "border-slate-300 bg-white"
                      }`}
                    >
                      {isSelected && <span className="w-1 h-1 rounded-full bg-white" />}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* WhatsApp Submit Action */}
          <div className="mt-6">
            <button
              type="button"
              onClick={handleSendWhatsApp}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.99] text-white font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all"
            >
              <FaWhatsapp className="w-5 h-5 text-white shrink-0" />
              <span>Book Consultation on WhatsApp</span>
            </button>
            <div className="flex items-center justify-center gap-1.5 text-center text-[11px] text-slate-500 mt-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Instant confirmation • Zero waiting room delays • {area}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
