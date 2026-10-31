"use client";

import Image from "next/image";

export default function WelcomeSection({ onOpenDrawer }) {
  return (
    <section id="welcome" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="w-full max-w-[1720px] mx-auto px-5 sm:px-7 lg:px-8 xl:px-9">
        
        {/* Torrance Dentist-Inspired Welcome Showcase Canvas */}
        <div
          className="relative rounded-[2.5rem] p-8 sm:p-12 lg:p-16 xl:p-20 border border-stone-200/80 shadow-sm overflow-hidden"
          style={{
            backgroundColor: "#f9f8f6",
            backgroundImage: `
              radial-gradient(at 0% 0%, rgba(220, 215, 205, 0.35) 0px, transparent 50%),
              radial-gradient(at 100% 0%, rgba(210, 225, 235, 0.3) 0px, transparent 50%),
              radial-gradient(at 50% 100%, rgba(230, 225, 215, 0.4) 0px, transparent 60%)
            `,
          }}
        >
          {/* Subtle Ambient Marble Texture Overlay */}
          <div
            className="absolute inset-0 opacity-[0.28] pointer-events-none mix-blend-multiply"
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 86c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm28-65c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm23-11c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm-6 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm29 22c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM32 63c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm57-13c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.12' fill-rule='evenodd'/%3E%3C/svg%3E\")",
            }}
          />

          {/* Desktop 3-Column Floating Photography Layout (Torrance Dentist Architecture) */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Floating Card: Friendly Doctor Portrait */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white/95 bg-white transition-transform duration-500 hover:-translate-y-1">
                <Image
                  src="/doctors/dr_sumi_tiwari.png"
                  alt="Dr. Sumi Tiwari - Lead Dental Surgeon"
                  fill
                  sizes="(max-width: 1280px) 25vw, 320px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Center Editorial Column: High-Impact Typography & Narrative */}
            <div className="lg:col-span-6 text-center max-w-xl mx-auto flex flex-col items-center">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-slate-500 mb-3 block">
                Welcome to Sai Specialized Dental Hospital
              </span>

              <h2 className="font-heading font-serif text-3xl sm:text-4xl lg:text-[2.65rem] xl:text-[2.9rem] text-slate-900 tracking-tight leading-[1.18] mb-5">
                Come with your concerns.<br />
                <span className="italic font-normal">Leave smiling.</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 font-normal">
                We care about the person in the chair, not just their teeth. That means taking unhurried time to understand your comfort, your goals, and your past experiences.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 font-normal hidden sm:block">
                Whether you&apos;re here for your child&apos;s first visit or specialized smile rehabilitation, we&apos;re here to build something real with you &mdash; honest, hospital-tier dental care that supports your overall health and happiness.
              </p>

              {/* Header-Familiar CTA Button with Lime Badge */}
              <button
                type="button"
                onClick={onOpenDrawer}
                className="inline-flex items-center gap-2.5 pl-6 pr-2.5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold shadow-md transition-all hover:scale-[1.02] active:scale-[0.99] group"
              >
                <span>Plan Your First Visit</span>
                <span className="w-6 h-6 rounded-full bg-[#D4F634] flex items-center justify-center text-slate-900 shrink-0 group-hover:rotate-45 transition-transform duration-300">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>

              {/* Bottom Center Floating Card: Chairside Technology & Patient Care */}
              <div className="w-full max-w-[340px] sm:max-w-[380px] aspect-[16/10] relative rounded-3xl overflow-hidden shadow-xl border-4 border-white/95 mt-9 hidden sm:block transition-transform duration-500 hover:-translate-y-1">
                <Image
                  src="/clinic/sai_clinic_photo_02.jpg"
                  alt="Chairside digital RVG examination and patient consultation"
                  fill
                  sizes="(max-width: 640px) 100vw, 380px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Floating Card: Welcoming Clinic Reception & Facilities */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white/95 bg-white transition-transform duration-500 hover:-translate-y-1">
                <Image
                  src="/clinic/clinic_photo_2.jpg"
                  alt="Warm clinic consultation desk and patient reception"
                  fill
                  sizes="(max-width: 1280px) 25vw, 320px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Mobile-Only 2-Photo Collage (So mobile gets the visual warmth too!) */}
            <div className="grid grid-cols-2 gap-3 sm:hidden w-full mt-2">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md border-2 border-white/90 bg-white">
                <Image
                  src="/doctors/dr_sumi_tiwari.png"
                  alt="Dr. Sumi Tiwari"
                  fill
                  sizes="50vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md border-2 border-white/90 bg-white">
                <Image
                  src="/clinic/clinic_photo_2.jpg"
                  alt="Clinic Reception"
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

