"use client";

import Image from "next/image";

export default function ClinicTourSection({ clinic }) {
  const isSai = !clinic || clinic.slug === "sai";

  const saiPhotos = [
    {
      src: "/clinic/tour/doctor_consultation_desk.jpg",
      title: "Doctor Consultation Desk",
      desc: "Private, air-conditioned consultation room for comfortable diagnostics and treatment discussions.",
    },
    {
      src: "/clinic/tour/primary_dental_operatory.jpg",
      title: "Primary Dental Operatory",
      desc: "Ergonomic dental chair with LED operating lamps and digital chairside display.",
    },
    {
      src: "/clinic/tour/sterilized_delivery_unit.jpg",
      title: "Sterilized Delivery Unit",
      desc: "Automated rotary dental unit equipped with autoclaved micro-motor handpieces.",
    },
    {
      src: "/clinic/tour/patient_waiting_lounge.jpg",
      title: "Patient Waiting Lounge",
      desc: "Clean, hygienic, and calm waiting reception for families and accompanying visitors.",
    },
    {
      src: "/clinic/tour/sterilization_hygiene_station.jpg",
      title: "Sterilization & Hygiene Station",
      desc: "Hospital-grade autoclave pouches ensuring 100% sterile tools for every individual appointment.",
    },
  ];

  const neutralPhotos = [
    {
      src: "/clinic/neutral/advanced_operatory.jpg",
      title: "Ergonomic Treatment Operatory",
      desc: "Multi-axis dental chair equipped with glare-free LED lighting and digital examination monitors.",
    },
    {
      src: "/clinic/neutral/modern_consultation_desk.jpg",
      title: "Private Consultation Suite",
      desc: "Unhurried, private consultation environment for thorough diagnostics and transparent treatment planning.",
    },
    {
      src: "/clinic/neutral/sterilization_station.jpg",
      title: "Class-B Autoclave Sterilization",
      desc: "Hospital-grade vacuum autoclaving with single-use sealed pouches for 100% instrument sterility.",
    },
    {
      src: "/clinic/neutral/modern_waiting_lounge.jpg",
      title: "Comfortable Patient Reception",
      desc: "Clean, hygienic, and calm reception area ensuring zero crowd congestion and prompt appointment schedules.",
    },
    {
      src: "/clinic/neutral/digital_imaging_suite.jpg",
      title: "Digital Chairside Diagnostics",
      desc: "Ultra-low-dose digital sensors delivering immediate sub-millimeter diagnostic clarity on chairside screens.",
    },
  ];

  const photos = isSai ? saiPhotos : neutralPhotos;

  return (
    <section id="facility" className="py-16 sm:py-24 bg-white relative">
      <div className="w-full max-w-[1720px] mx-auto px-5 sm:px-7 lg:px-8 xl:px-9">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Spotless Hospital Hygiene
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Take a Visual Tour of Our Facility
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Real photos of our treatment stations, consultation suites, and sterilized instruments.
          </p>
        </div>

        {/* Masonry / Bento Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {photos.map((p, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl overflow-hidden bg-slate-100 group border border-slate-200 shadow-sm min-h-[240px] ${
                idx === 0 ? "md:min-h-[460px] md:col-span-2" : "md:min-h-[220px]"
              }`}
            >
              <Image
                src={p.src}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-5 text-white">
                <h3 className="font-bold text-base sm:text-lg text-white">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 mt-1 max-w-md">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
