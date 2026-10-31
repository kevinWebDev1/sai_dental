"use client";

import Image from "next/image";

export default function ClinicTourSection() {
  const photos = [
    {
      src: "/clinic/tour/doctor_consultation_desk.jpg",
      title: "Doctor Consultation Desk",
      desc: "Private, air-conditioned consultation room for comfortable diagnostics and treatment discussions.",
      span: "col-span-1 md:col-span-2 row-span-2"
    },
    {
      src: "/clinic/tour/primary_dental_operatory.jpg",
      title: "Primary Dental Operatory",
      desc: "Ergonomic dental chair with LED operating lamps and digital chairside display.",
      span: "col-span-1 md:col-span-1"
    },
    {
      src: "/clinic/tour/sterilized_delivery_unit.jpg",
      title: "Sterilized Delivery Unit",
      desc: "Automated rotary dental unit equipped with autoclaved micro-motor handpieces.",
      span: "col-span-1 md:col-span-1"
    },
    {
      src: "/clinic/tour/patient_waiting_lounge.jpg",
      title: "Patient Waiting Lounge",
      desc: "Clean, hygienic, and calm waiting reception for families and accompanying visitors.",
      span: "col-span-1 md:col-span-1"
    },
    {
      src: "/clinic/tour/sterilization_hygiene_station.jpg",
      title: "Sterilization & Hygiene Station",
      desc: "Hospital-grade autoclave pouches ensuring 100% sterile tools for every individual appointment.",
      span: "col-span-1 md:col-span-1"
    }
  ];

  return (
    <section id="facility" className="py-16 sm:py-24 bg-white relative">
      <div className="w-full max-w-[1720px] mx-auto px-5 sm:px-7 lg:px-8 xl:px-9">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Spotless Hospital Hygiene
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Take a Visual Tour of Our Clinic
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
              className={`relative rounded-2xl overflow-hidden bg-slate-100 group border border-slate-200 shadow-sm min-h-[240px] ${idx === 0 ? "md:min-h-[460px] md:col-span-2" : "md:min-h-[220px]"}`}
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
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
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
