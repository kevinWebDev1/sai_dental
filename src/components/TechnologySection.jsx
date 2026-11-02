"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function TechnologySection({ onOpenDrawer }) {
  const [showAllTech, setShowAllTech] = useState(false);
  const suites = [
    {
      kicker: "0.2-SEC INSTANT DIAGNOSTICS",
      title: "Vatech Digital RVG & Chairside HD Screen",
      desc: "Instant tooth root and bone density X-rays in under half a second with 90% less radiation. Scans are displayed live in crystal clarity on your chairside monitor before any procedure begins.",
      buttonText: "Digital X-Ray Screening",
      image: "/technology/tech_rvg.jpg",
      mobileImage: "/technology/mobile/tech_rvg.jpg",
      imageAlt: "Vatech digital RVG intraoral sensor with chairside HD monitor dental scan",
    },
    {
      kicker: "SUB-MILLIMETER CANAL PRECISION",
      title: "Computerized Apex Locator & Rotary Endomotor",
      desc: "Micro-motor rotary technology that calculates root depth to 0.1mm. Smoothly glides through curved canals with motorized precision, eliminating manual scraping, vibration, and patient discomfort.",
      buttonText: "Rotary Endodontics Care",
      image: "/technology/tech_apex_locator.jpg",
      mobileImage: "/technology/mobile/tech_apex_locator.jpg",
      imageAlt: "Digital cordless rotary endomotor handpiece with OLED display",
    },
    {
      kicker: "100% SPORE-KILL HOSPITAL STERILIZATION",
      title: "Class-B Vacuum Autoclave & UV Barrier",
      desc: "Hospital-grade vacuum steam sterilization at 134°C with continuous ultraviolet germicidal storage. Every instrument is vacuum-sealed in sterile medical pouches and unsealed only in your presence.",
      buttonText: "Sterilization Standards",
      image: "/technology/tech_autoclave.jpg",
      mobileImage: "/technology/mobile/tech_autoclave.jpg",
      imageAlt: "Medical professional loading sealed instrument pouches into Class-B vacuum autoclave",
    },
    {
      kicker: "ENAMEL-SAFE CALCULUS REMOVAL",
      title: "Piezo Ultrasonic Scaler & Fine Water Mist",
      desc: "Acoustic micro-vibrations paired with a cooling water spray that gently disintegrates stubborn plaque, calculus, and coffee stains without grinding or wearing away natural enamel.",
      buttonText: "Ultrasonic Cleaning Consult",
      image: "/technology/tech_ultrasonic_scaler.jpg",
      mobileImage: "/technology/mobile/tech_ultrasonic_scaler.jpg",
      imageAlt: "Ultrasonic dental scaler handpiece with high-frequency cooling water spray mist",
    },
    {
      kicker: "CHAIRSIDE PATIENT TRANSPARENCY",
      title: "Intraoral HD Diagnostic Camera",
      desc: "Pen-sized high-definition intraoral wand with LED ring lighting that lets you see cracked fillings, decay, and teeth contours live on screen. Complete clinical transparency with zero guesswork.",
      buttonText: "Live Digital Examination",
      image: "/technology/tech_intraoral_camera.jpg",
      mobileImage: "/technology/mobile/tech_intraoral_camera.jpg",
      imageAlt: "Dentist using intraoral HD camera with patient in dental chair and live screen display",
    },
    {
      kicker: "RAPID COMPOSITE POLYMERIZATION",
      title: "High-Intensity Blue LED Curing Unit",
      desc: "Precision blue light-curing technology that hardens aesthetic composite tooth fillings and porcelain veneer bonding within seconds into rock-solid, permanent, natural tooth enamel strength.",
      buttonText: "Aesthetic Restoration Consult",
      image: "/technology/tech_curing_light.jpg",
      mobileImage: "/technology/mobile/tech_curing_light.jpg",
      imageAlt: "High-intensity blue LED light curing a tooth-colored composite filling in mouth",
    },
  ];

  return (
    <section id="technology" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="w-full max-w-[1720px] mx-auto px-5 sm:px-7 lg:px-8 xl:px-9">
        
        {/* Simple, Breathable Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2 block">
            Clinical Technology
          </span>
          <h2 className="font-heading font-normal text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Precision Systems That Protect You
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Equipped with 6 certified hospital-grade systems for comfortable visits, instant diagnosis, and 100% sterile safety.
          </p>
        </div>

        {/* Asymmetrical Horizontal Masonry Cards (Torrance Dentist-Inspired Shifting Seams) */}
        <div className="space-y-14 sm:space-y-18 max-w-[1340px] mx-auto">
          {(showAllTech ? suites : suites.slice(0, 2)).map((suite, idx) => {
            // Shifting horizontal masonry column splits across all 6 technologies:
            const configs = [
              { textCols: "lg:col-span-5", imgCols: "lg:col-span-7", textOrder: "lg:order-1", imgOrder: "lg:order-2" },
              { textCols: "lg:col-span-7", imgCols: "lg:col-span-5", textOrder: "lg:order-2", imgOrder: "lg:order-1" },
              { textCols: "lg:col-span-7", imgCols: "lg:col-span-5", textOrder: "lg:order-1", imgOrder: "lg:order-2" },
              { textCols: "lg:col-span-5", imgCols: "lg:col-span-7", textOrder: "lg:order-2", imgOrder: "lg:order-1" },
              { textCols: "lg:col-span-5", imgCols: "lg:col-span-7", textOrder: "lg:order-1", imgOrder: "lg:order-2" },
              { textCols: "lg:col-span-7", imgCols: "lg:col-span-5", textOrder: "lg:order-2", imgOrder: "lg:order-1" },
            ];
            const cfg = configs[idx % configs.length];

            return (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch animate-in fade-in duration-300"
              >
                {/* Dark Editorial Text Card */}
                <div
                  className={`${cfg.textCols} ${cfg.textOrder} bg-[#1c1f22] rounded-3xl p-8 sm:p-12 lg:p-14 min-h-[380px] sm:min-h-[420px] flex flex-col justify-between text-white relative overflow-hidden shadow-sm`}
                  style={{
                    backgroundColor: "#1c1f22",
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='4' y1='4' x2='10' y2='10' stroke='rgba(255,255,255,0.06)' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E\")",
                    backgroundRepeat: "repeat",
                  }}
                >
                  <div>
                    {suite.kicker && (
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4F634] mb-3 block">
                        {suite.kicker}
                      </span>
                    )}
                    <h3 className="font-heading font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-white tracking-tight leading-tight mb-4">
                      {suite.title}
                    </h3>
                    <p className="text-white/80 text-sm sm:text-base lg:text-[1.05rem] leading-relaxed max-w-lg mb-8 font-normal">
                      {suite.desc}
                    </p>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={onOpenDrawer}
                      className="inline-flex items-center gap-2.5 pl-6 pr-2.5 py-2.5 rounded-full bg-white text-slate-950 font-semibold text-xs sm:text-sm hover:bg-slate-100 active:scale-[0.98] transition-all shadow-sm group"
                    >
                      <span>{suite.buttonText}</span>
                      <span className="w-6 h-6 rounded-full bg-[#D4F634] flex items-center justify-center text-slate-900 shrink-0 group-hover:rotate-45 transition-transform duration-300">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                          <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>

                {/* Clean Matching High-Res Photograph (Desktop 4:3 vs Mobile 3:4) */}
                <div
                  className={`${cfg.imgCols} ${cfg.imgOrder} relative rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[420px] bg-slate-100 shadow-sm border border-slate-100`}
                >
                  {/* Mobile 3:4 Aspect Portrait (< sm screens) */}
                  <div className="block sm:hidden relative w-full h-full min-h-[360px] aspect-[3/4]">
                    <Image
                      src={suite.mobileImage || suite.image}
                      alt={suite.imageAlt}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                  </div>
                  {/* Desktop 4:3 Aspect Landscape (>= sm screens) */}
                  <div className="hidden sm:block relative w-full h-full min-h-[380px] sm:min-h-[420px]">
                    <Image
                      src={suite.image}
                      alt={suite.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sleek See More / Show Less Button */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setShowAllTech(!showAllTech)}
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#1c1f22] hover:bg-slate-900 text-white font-semibold text-xs sm:text-sm border border-slate-700/60 shadow-md hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer group"
          >
            <span>
              {showAllTech
                ? "Show Less Technologies"
                : `Explore All ${suites.length} Clinical Technologies`}
            </span>
            <span
              className={`w-6 h-6 rounded-full bg-[#D4F634] text-slate-950 flex items-center justify-center transition-transform duration-300 ${
                showAllTech ? "rotate-180" : "group-hover:translate-y-0.5"
              }`}
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
