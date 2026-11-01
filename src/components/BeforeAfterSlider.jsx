"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BeforeAfterSlider({ onOpenDrawer }) {
  const cases = [
    {
      id: "sunita",
      patientName: "Sunita",
      caseTag: "Titanium Dental Implants",
      story:
        "Meet Sunita! Unhappy with missing lower teeth and compromised chewing, Sunita restored complete bite strength and a confident, natural smile through precision titanium implants and fixed ceramic crowns.",
      stages: [
        {
          label: "Before",
          image: "/cases/case_stage1_preop.jpg",
          alt: "Pre-operative clinical photograph of missing teeth and space collapse",
        },
        {
          label: "After Implant Placement",
          image: "/cases/case_before.png",
          alt: "Clinical photograph showing osseointegrated titanium implant abutments in lower jaw",
        },
        {
          label: "After Fixed Ceramic Teeth",
          image: "/cases/case_after.png",
          alt: "Post-operative finished clinical outcome showing patient smiling with natural fixed teeth",
        },
      ],
    },
    {
      id: "ananya",
      patientName: "Ananya",
      caseTag: "Cosmetic Veneers & Alignment",
      story:
        "Meet Ananya! Unhappy with a prominent front tooth gap and enamel discoloration, Ananya chose gentle orthodontic arch alignment and custom porcelain veneers for a natural, luminous smile she loves.",
      stages: [
        {
          label: "Before",
          image: "/cases/case_veneer_1.jpg",
          alt: "Pre-operative view showing anterior diastema gap between front teeth",
        },
        {
          label: "After Orthodontic Alignment",
          image: "/cases/case_veneer_2.jpg",
          alt: "Mid-treatment clinical view showing clear orthodontic aligner seated on teeth",
        },
        {
          label: "After Porcelain Veneers",
          image: "/cases/case_veneer_3.jpg",
          alt: "Finished aesthetic outcome showing radiant patient smile with closed gap",
        },
      ],
    },
    {
      id: "pooja",
      patientName: "Pooja",
      caseTag: "Aesthetic Composite Veneers",
      story:
        "Meet Pooja! Unhappy with overlapping front teeth and stubborn enamel staining, Pooja restored a beautifully aligned, radiant smile through gentle micro-contouring and direct composite veneers.",
      stages: [
        {
          label: "Before",
          image: "/cases/case_composite_1_before_v2.jpg",
          alt: "Pre-operative clinical photograph showing rotated, overlapping upper central incisors and deep gumline stains",
        },
        {
          label: "Precision Composite Bonding",
          image: "/cases/case_composite_2_bonding_v2.jpg",
          alt: "Mid-procedure clinical photograph showing direct composite veneer application and isolation",
        },
        {
          label: "After Aesthetic Smile Makeover",
          image: "/cases/case_composite_3_after_v2.jpg",
          alt: "Post-operative outcome showing perfectly aligned, polished composite veneers with healthy gums",
        },
      ],
    },
    {
      id: "rekha",
      patientName: "Rekha",
      caseTag: "Painless RCT & Ceramic Crown",
      story:
        "Meet Rekha! Suffering from deep molar decay and acute chewing pain, Rekha saved her natural tooth through gentle single-visit root canal therapy and a precision monolithic ceramic crown.",
      stages: [
        {
          label: "Before",
          image: "/cases/case_rct_1_before_v2.jpg",
          alt: "Pre-operative intraoral photograph showing severe molar decay and cavitation",
        },
        {
          label: "Rotary Cleaning & Prep",
          image: "/cases/case_rct_2_prep_v2.jpg",
          alt: "Mid-treatment clinical photograph showing rotary endodontic instrumentation and conservative tooth prep",
        },
        {
          label: "After Ceramic Crown",
          image: "/cases/case_rct_3_after_v2.jpg",
          alt: "Finished clinical result showing life-like monolithic ceramic crown with perfect occlusal anatomy",
        },
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef(null);

  const goToNext = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % cases.length);
      setIsTransitioning(false);
    }, 220);
  }, [cases.length]);

  const goToPrev = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
      setIsTransitioning(false);
    }, 220);
  }, [cases.length]);

  // Setup auto-cycle interval; clears when isPaused is true
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      goToNext();
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, goToNext, currentIndex]);

  // Press & hold handlers: pause rotation while held, resume on release
  const handleHoldStart = () => {
    setIsPaused(true);
  };

  const handleHoldEnd = () => {
    setIsPaused(false);
  };

  const currentCase = cases[currentIndex] || cases[0];

  return (
    <section
      id="results"
      className="py-16 sm:py-24 bg-[#1c1f22] text-white relative overflow-hidden border-t border-white/5"
      style={{
        backgroundColor: "#1c1f22",
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='4' y1='4' x2='10' y2='10' stroke='rgba(255,255,255,0.06)' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E\")",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="w-full max-w-[1720px] mx-auto px-5 sm:px-7 lg:px-8 xl:px-9 relative z-10">

        {/* ==================================================================
            SEE WHAT'S POSSIBLE (Torrance Dentist Pure Minimal Aesthetic)
            ================================================================== */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="font-heading font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            See What’s Possible
          </h2>

          {/* Delicate Warm Golden Accent Bar */}
          <div className="w-16 h-[1.5px] bg-[#d4af37]/80 mx-auto my-3.5" />

          {/* Dynamic Narrative with Fixed Height (Prevents Cards Below from Jumping) */}
          <div className="mt-4 min-h-[4.5rem] sm:min-h-[3.75rem] flex items-center justify-center">
            <div className={`transition-opacity duration-300 ease-in-out ${isTransitioning ? "opacity-30" : "opacity-100"}`}>
              <p className="text-white/80 text-xs sm:text-sm lg:text-[0.95rem] leading-relaxed font-normal max-w-xl mx-auto">
                {currentCase.story}
              </p>
            </div>
          </div>
        </div>

        {/* ==================================================================
            3-CARD PURE IMAGE SHOWCASE (Smooth Transitioned & Flanked by Nav Arrows)
            ================================================================== */}
        <div className="relative max-w-[1360px] mx-auto px-2 sm:px-6 md:px-12 lg:px-14">

          {/* Previous Case Arrow (Flanking Left) */}
          <button
            type="button"
            onClick={goToPrev}
            onMouseDown={handleHoldStart}
            onMouseUp={handleHoldEnd}
            onMouseLeave={handleHoldEnd}
            onTouchStart={handleHoldStart}
            onTouchEnd={handleHoldEnd}
            onTouchCancel={handleHoldEnd}
            aria-label="Previous case"
            className="absolute left-0 sm:left-1 md:left-0 top-[140px] md:top-[38%] -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#141618]/90 hover:bg-[#d4af37] text-white hover:text-slate-950 border border-white/20 hover:border-[#d4af37] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl backdrop-blur-md group cursor-pointer"
            title="Hold to pause auto-rotation"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5" />
          </button>

          {/* 3-Card Grid */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 max-w-[1240px] mx-auto transition-opacity duration-300 ease-in-out ${isTransitioning ? "opacity-30" : "opacity-100"
              }`}
          >
            {currentCase.stages.map((stage, idx) => (
              <div key={idx} className="flex flex-col items-center">
                {/* Clean Rounded Image Frame */}
                <div className="relative aspect-[4/3] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 shadow-xl border border-white/10">
                  <Image
                    src={stage.image}
                    alt={stage.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                {/* Minimal White Label Below Image */}
                <div className="mt-4 text-center">
                  <span className="text-sm sm:text-base font-normal text-white/90 tracking-wide">
                    {stage.label}
                  </span>

                  {/* Subtle Progress Dot (Matching Torrance Dentist) */}
                  <div className="mt-2 flex items-center justify-center">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${idx === 0 ? "bg-white/40" : "bg-[#d4af37]"
                        }`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next Case Arrow (Flanking Right) */}
          <button
            type="button"
            onClick={goToNext}
            onMouseDown={handleHoldStart}
            onMouseUp={handleHoldEnd}
            onMouseLeave={handleHoldEnd}
            onTouchStart={handleHoldStart}
            onTouchEnd={handleHoldEnd}
            onTouchCancel={handleHoldEnd}
            aria-label="Next case"
            className="absolute right-0 sm:right-1 md:right-0 top-[140px] md:top-[38%] -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#141618]/90 hover:bg-[#d4af37] text-white hover:text-slate-950 border border-white/20 hover:border-[#d4af37] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl backdrop-blur-md group cursor-pointer"
            title="Hold to pause auto-rotation"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Case Carousel Pagination Indicators */}
        <div className="mt-8 flex items-center justify-center gap-2.5">
          {cases.map((c, i) => (
            <button
              key={c.id}
              type="button"
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentIndex(i);
                  setIsTransitioning(false);
                }, 200);
              }}
              className={`transition-all duration-300 rounded-full cursor-pointer ${i === currentIndex
                  ? "w-7 sm:w-8 h-2 bg-[#d4af37]"
                  : "w-2 h-2 bg-white/25 hover:bg-white/50"
                }`}
              aria-label={`View clinical case ${i + 1}: ${c.patientName} (${c.caseTag})`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
