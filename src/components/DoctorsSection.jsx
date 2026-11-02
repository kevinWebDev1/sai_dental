"use client";

import Image from "next/image";

export default function DoctorsSection({ onOpenDrawer, customDoctors }) {
  const defaultDoctors = [
    {
      num: "01",
      name: "Dr. Sumi Tiwari",
      degrees: "B.D.S • M.I.D.A",
      role: "Lead Dental Surgeon & Aesthetic Specialist",
      branch: "Vipul Khand 2 (Jeevan Plaza)",
      branchShort: "Vipul Khand",
      photo: "/doctors/doctor_1.png",
      phoneRaw: "09235179344",
      specialties: [
        "Painless Single-Sitting Root Canals",
        "Gentle Family & Pediatric Dentistry",
        "Aesthetic Restorations & Scaling"
      ],
      badgeColor: "bg-teal-50 text-teal-800 border-teal-200"
    },
    {
      num: "02",
      name: "Dr. Rahul Tiwari",
      degrees: "B.D.S • M.I.D.A • F.A.G.E • M.C.S",
      role: "Founder & Senior Implantologist",
      branch: "Viram Khand 1 (Opp. Bank of Baroda)",
      branchShort: "Viram Khand",
      photo: "/doctors/doctor_2.png",
      phoneRaw: "09935571751",
      specialties: [
        "Permanent Titanium Dental Implants",
        "Full-Mouth Rehabilitation & Fixed Teeth",
        "Oral Surgery & Wisdom Tooth Impactions"
      ],
      badgeColor: "bg-blue-50 text-blue-800 border-blue-200"
    }
  ];

  const doctors = customDoctors && customDoctors.length > 0 ? customDoctors : defaultDoctors;

  return (
    <section id="doctors" className="py-16 sm:py-24 bg-white relative border-t border-slate-100">
      <div className="w-full max-w-[1720px] mx-auto px-5 sm:px-7 lg:px-8 xl:px-9">
        
        {/* ==================================================================
            OUR TRUSTED SPECIALISTS (Curely-Inspired Clean Doctor Cards)
            ================================================================== */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2 block">
            Specialist Leadership
          </span>
          <h2 className="font-heading font-normal text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Meet Your Treating Specialists
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {doctors.length > 1
              ? "Dedicated clinicians providing gentle, hospital-grade care across both our Gomti Nagar facilities."
              : "Dedicated specialist providing gentle, hospital-grade dental care in Gomti Nagar."}
          </p>
        </div>

        {/* Clean Doctor Grid (Adapts automatically to 1 or 2 doctors) */}
        <div className={`grid grid-cols-1 ${doctors.length === 1 ? "max-w-2xl" : "lg:grid-cols-2 max-w-[1340px]"} gap-8 lg:gap-10 mx-auto`}>
          {doctors.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-center"
            >
              {/* Left Column (50%): Large, Friendly Doctor Portrait */}
              <div className="sm:col-span-5 relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 shadow-xs border border-slate-100">
                <Image
                  src={doc.photo}
                  alt={`${doc.name} - ${doc.role}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 240px"
                  className="object-cover object-top"
                />
              </div>

              {/* Right Column (50%): Clean Info Hierarchy */}
              <div className="sm:col-span-7 flex flex-col justify-between h-full py-1">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#38537b] bg-[#38537b]/10 px-2.5 py-1 rounded-full">
                      {doc.branchShort}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {doc.degrees}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-[1.65rem] font-heading font-bold text-slate-900 tracking-tight leading-snug">
                    {doc.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                    {doc.role}
                  </p>

                  {/* Clean 3-Item Specialties List */}
                  <div className="mt-5 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                      Key Specialties:
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      {doc.specialties.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#38537b] shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Header-Familiar CTA Button with Lime Badge (Visual Familiarity) */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-start">
                  <button
                    type="button"
                    onClick={onOpenDrawer}
                    className="inline-flex items-center gap-2.5 pl-5 pr-2 py-2 rounded-full border border-slate-200/90 bg-white hover:bg-slate-50 text-slate-900 text-xs sm:text-sm font-semibold shadow-2xs transition-all hover:scale-[1.02] active:scale-[0.99] group/btn"
                  >
                    <span>Book Consultation with {doc.name.split(" ").slice(0, 2).join(" ")}</span>
                    <span className="w-6 h-6 rounded-full bg-[#D4F634] flex items-center justify-center text-slate-900 shrink-0 group-hover/btn:rotate-45 transition-transform duration-300">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
