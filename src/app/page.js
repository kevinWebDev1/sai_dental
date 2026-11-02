"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { FaWhatsapp, FaPhone, FaLocationDot, FaGoogle } from "react-icons/fa6";
import { useSearchParams } from "next/navigation";
import { getClinicConfig } from "@/config/clinics";

import Navbar from "@/components/Navbar";
import MobileDock from "@/components/MobileDock";
import AppointmentDrawer from "@/components/AppointmentDrawer";
import DoctorsSection from "@/components/DoctorsSection";
import WelcomeSection from "@/components/WelcomeSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import TechnologySection from "@/components/TechnologySection";
import ClinicTourSection from "@/components/ClinicTourSection";

function DentalClinicContent() {
  const searchParams = useSearchParams();
  const clinic = getClinicConfig(searchParams);

  useEffect(() => {
    if (clinic?.name) {
      document.title = `${clinic.name} | Top-Rated Dental Care in Lucknow`;
    }
  }, [clinic]);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeBranch, setActiveBranch] = useState("vipul"); // 'vipul' | 'viram'
  const [showAllServices, setShowAllServices] = useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const branches = {
    vipul: {
      id: "vipul",
      tabTitle: "Vipul Khand 2",
      badge: "Main Surgical Clinic • 151+ Reviews",
      doctor: "Dr. Sumi Tiwari (B.D.S., M.I.D.A)",
      specialty: "Dental Surgeon & Aesthetic Specialist",
      address: "Shop No. 102, Jeevan Plaza, Near Study Hall School, Vipul Khand 2, Gomti Nagar, Lucknow, UP 226010",
      phone: "+91 92351 79344",
      phoneDisplay: "092351 79344",
      timings: "Mon – Sat: 10:00 AM – 2:00 PM & 5:00 PM – 9:00 PM | Sun: By Prior Appointment",
      waUrl: "https://wa.me/919235179344?text=Hello%20Dr.%20Sumi,%20I%20would%20like%20to%20book%20an%20appointment%20at%20Vipul%20Khand%20(Jeevan%20Plaza)%20branch.",
      mapsUrl: "https://www.google.com/maps/place/Sai+Specialized+dental+hospital/@26.8457377,80.979869,17z/data=!3m1!4b1!4m6!3m5!1s0x399bfddf58c02ed5:0xf3200974b1919a90!8m2!3d26.8457329!4d80.9824493!16s%2Fg%2F11ff2pgslr",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.843644047712!2d80.99626257522204!3d26.845678176686737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be309a06148eb%3A0x6338cf40d99ba79b!2sSai%20Specialized%20dental%20hospital!5e0!3m2!1sen!2sin!4v1729860000000!5m2!1sen!2sin"
    },
    viram: {
      id: "viram",
      tabTitle: "Viram Khand 1",
      badge: "Sai Charitable Sansthan Branch",
      doctor: "Dr. Rahul Tiwari (Founder & Chief Surgeon)",
      specialty: "Implantologist & Maxillofacial Care",
      address: "1/264, Viram Khand, Opposite Bank of Baroda, Gomti Nagar, Lucknow, UP 226010",
      phone: "+91 99355 71751",
      phoneDisplay: "099355 71751",
      timings: "Mon – Sat: 10:30 AM – 4:00 PM & 6:00 PM – 9:00 PM | Sun: By Prior Appointment",
      waUrl: "https://wa.me/919935571751?text=Hello%20Dr.%20Rahul,%20I%20would%20like%20to%20book%20an%20appointment%20at%20Viram%20Khand%20branch.",
      mapsUrl: "https://maps.google.com/?q=Sai+Specialized+Dental+Hospital+1/264+Viram+Khand+Gomti+Nagar+Lucknow",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8!2d80.98!3d26.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be309a06148eb%3A0x6338cf40d99ba79b!2sSai%20Specialized%20dental%20hospital!5e0!3m2!1sen!2sin!4v1729860000000!5m2!1sen!2sin"
    }
  };

  const currentBranch = branches[activeBranch] || branches.vipul;

  const servicePillars = [
    {
      title: "Permanent Dental Implants",
      kicker: "Specialized Restoration",
      desc: "Restore 100% natural bite strength and lifelong smile aesthetics. Using biocompatible titanium posts and custom Vita ceramic crowns, single-tooth and full-arch implants integrate permanently with jawbone for lifelong stability.",
      buttonText: "Implant Consultation",
      image: "/services/service_implants.jpg",
      mobileImage: "/services/mobile/service_implants.jpg",
      imageAlt: "Dental implant model showing titanium post and ceramic crown integration",
    },
    {
      title: "Painless Root Canal (RCT)",
      kicker: "Endodontic Tooth Preservation",
      desc: "Save severely infected or broken teeth and relieve pain in a single gentle sitting. Computerized Endoradar apex locators and Marathon rotary micro-motors clean curved root canals with sub-millimeter precision and zero manual scraping.",
      buttonText: "Painless RCT Care",
      image: "/services/service_root_canal.jpg",
      mobileImage: "/services/mobile/service_root_canal.jpg",
      imageAlt: "Clinical diagnosis and preservation of natural teeth via root canal therapy",
    },
    {
      title: "Clear Aligners & Braces",
      kicker: "Discreet Orthodontic Alignment",
      desc: "Straighten crowding, close gaps, and correct bite misalignment without metal wires or brackets. Custom clear aligner trays guide teeth discreetly into place, easily removable anytime for eating and brushing.",
      buttonText: "Clear Aligner Assessment",
      image: "/services/service_aligners.jpg",
      mobileImage: "/services/mobile/service_aligners.jpg",
      imageAlt: "Comparison between invisible clear aligner tray and orthodontic braces",
    },
    {
      title: "Teeth Cleaning & Scaling",
      kicker: "Hospital Preventive Hygiene",
      desc: "Gentle ultrasonic scaling eliminates stubborn bacterial tartar, plaque, and dark tea/coffee stains without wearing enamel. Essential preventive care to stop gum bleeding, bone loss, and chronic breath issues.",
      buttonText: "Book Scaling & Polish",
      image: "/services/service_cleaning.jpg",
      mobileImage: "/services/mobile/service_cleaning.jpg",
      imageAlt: "Gentle ultrasonic scaling and dental polishing on clean healthy teeth",
    },
    {
      title: "Cosmetic Smile Design",
      kicker: "Aesthetic Porcelain Artistry",
      desc: "Precision digital smile design engineered to harmonize with your facial aesthetics. Custom ultra-thin porcelain veneers and composite artistry mask deep enamel discoloration, repair chips, and close front gaps seamlessly.",
      buttonText: "Smile Makeover Consult",
      image: "/services/service_smile_design.jpg",
      mobileImage: "/services/mobile/service_smile_design.jpg",
      imageAlt: "Aesthetic digital smile design with golden-ratio harmony guides",
    },
    {
      title: "Crowns & Dental Bridges",
      kicker: "Prosthodontic Restoration",
      desc: "Custom-milled zirconia and ceramic crowns and multi-unit bridges that permanently restore damaged, broken, or missing teeth with natural chewing strength and shade-matched perfection.",
      buttonText: "Crown & Bridge Consult",
      image: "/services/service_crowns_bridges.jpg",
      mobileImage: "/services/mobile/service_crowns_bridges.jpg",
      imageAlt: "Custom porcelain and zirconia crown and bridge prosthetics for tooth restoration",
    },
  ];

  const displayedServices = showAllServices ? servicePillars : servicePillars.slice(0, 2);
  const testimonials = clinic.testimonials || [];

  return (
    <>
      <Navbar onOpenDrawer={openDrawer} clinic={clinic} />

      <main className="overflow-hidden">
        {/* ==================================================================
            1. HERO SECTION (Editorial Sky-Blue Canvas & Full-Bleed Right Artwork)
            ================================================================== */}
        <section className="relative bg-[#6da5d8] text-white pt-20 sm:pt-24 lg:pt-24 xl:pt-26 pb-0 overflow-hidden min-h-[620px] lg:h-[100dvh] lg:max-h-[100dvh] flex flex-col justify-between">

          {/* Full-Bleed Right Artwork: Seamlessly blended with full-height span & smooth feathering */}
          <div className="hidden lg:block absolute inset-y-0 right-0 h-full w-[56%] xl:w-[60%] 2xl:w-[62%] pointer-events-none z-0">
            <div
              className="relative w-full h-full"
              style={{
                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.3) 22%, rgba(0,0,0,0.7) 40%, black 60%, black 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.05) 8%, rgba(0,0,0,0.3) 22%, rgba(0,0,0,0.7) 40%, black 60%, black 100%)'
              }}
            >
              <Image
                src="/hero/hero_main.jpg"
                alt={`Miniature dental surgeons cleaning giant molar tooth - ${clinic.name}`}
                fill
                priority
                className="object-contain object-right-bottom hover:scale-[1.01] transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </div>

          {/* Main Content Container */}
          <div className="w-full max-w-[1720px] mx-auto px-5 sm:px-7 lg:px-8 xl:px-9 z-10 flex-1 flex flex-col justify-between h-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end flex-1 h-full">

              {/* Left Column: Commandingly scaled Headline, Narrative & Grounded Patient Social Proof */}
              <div className="lg:col-span-7 flex flex-col items-start z-10 pb-0 h-full justify-between">
                <div>
                  {/* Primary Headline with Patient Avatars */}
                  <h1 className="font-heading font-normal text-white text-[3rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.5rem] 2xl:text-[6.25rem] tracking-[-0.035em] leading-[0.9] mb-3 lg:mb-4">
                    Restore<br />
                    Your True<br />
                    <span className="inline-flex items-center gap-2.5 sm:gap-5">
                      Smile
                      <span className="inline-block relative w-20 sm:w-28 lg:w-36 xl:w-44 h-8 sm:h-10 lg:h-14 xl:h-16 align-middle">
                        <Image
                          src="/hero/hero_avatars.png"
                          alt="Verified happy patients"
                          fill
                          sizes="(max-width: 768px) 110px, 176px"
                          className="object-contain"
                        />
                      </span>
                    </span>
                  </h1>

                  {/* Supporting Paragraph */}
                  <p className="text-white/90 text-sm sm:text-base lg:text-[1.05rem] xl:text-[1.15rem] leading-[1.5] max-w-[500px] xl:max-w-[540px] mb-4 lg:mb-5 font-normal">
                    {clinic.heroSubhead || "Using advanced technology, we deliver gentle, comprehensive dental care across Gomti Nagar under one roof."}
                  </p>

                  {/* WhatsApp Booking Action Bar */}
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                    {clinic.heroButtons.map((btn, idx) => (
                      <a
                        key={idx}
                        href={`https://wa.me/${btn.phone}?text=${encodeURIComponent(btn.message)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                          idx === 0
                            ? "inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D4F634] hover:bg-[#c6eb2b] text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
                            : "inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold text-xs sm:text-sm border border-white/30 backdrop-blur-sm transition-all hover:scale-[1.02]"
                        }
                      >
                        <FaWhatsapp className={`w-4 h-4 shrink-0 ${idx === 0 ? "text-slate-950" : "text-white"}`} />
                        <span>{btn.label}</span>
                        <ArrowUpRight className="w-4 h-4 shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Bottom Left Row: Smiling Patient Proof Grounded at the Baseline (Desktop Only) */}
                <div className="hidden lg:flex items-end w-full mt-auto">
                  <div className="relative w-64 lg:w-76 xl:w-88 2xl:w-[25rem] h-64 lg:h-76 xl:h-88 2xl:h-[25rem] shrink-0">
                    <Image
                      src="/hero/hero_stat_badge.png"
                      alt={`98% loyal dental patients - ${clinic.name}`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 256px, 400px"
                      className="object-contain object-bottom"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile / Tablet Artwork View (< lg screens only) */}
              <div className="lg:hidden relative w-screen -mx-5 sm:-mx-7 sm:w-full sm:mx-auto sm:max-w-[500px] aspect-square flex items-end justify-center mt-2 sm:mt-4">
                <div className="relative w-full h-full">
                  <Image
                    src="/hero/hero_main.jpg"
                    alt={`Miniature dental surgeons cleaning giant molar tooth - ${clinic.name}`}
                    fill
                    priority
                    className="object-contain object-bottom"
                    sizes="(max-width: 640px) 100vw, 500px"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==================================================================
            2. TRUST PROOF METRICS BAR (Defensible Clinic Statistics)
            ================================================================== */}
        <section className="bg-white py-10 sm:py-12 border-b border-[#6da5d8]/15">
          <div className="w-full max-w-[1720px] mx-auto px-5 sm:px-7 lg:px-8 xl:px-9">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#6da5d8]/20">
              <div className="pt-2 md:pt-0">
                <div className="font-heading font-bold text-3xl sm:text-4xl text-slate-900 flex items-center justify-center gap-1.5">
                  <span>{clinic.rating || "4.9"}</span>
                  <svg className="w-5 h-5 text-amber-400 fill-current inline-block" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1.5">Google Patient Rating</div>
              </div>
              <div className="pt-4 md:pt-0">
                <div className="font-heading font-bold text-3xl sm:text-4xl text-slate-900">{clinic.reviews || "151+"}</div>
                <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1.5">Verified Local Reviews</div>
              </div>
              <div className="pt-4 md:pt-0">
                <div className="font-heading font-bold text-3xl sm:text-4xl text-slate-900">100%</div>
                <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1.5">Autoclave Sterilization</div>
              </div>
              <div className="pt-4 md:pt-0">
                <div className="font-heading font-bold text-3xl sm:text-4xl text-slate-900">25+ Yrs</div>
                <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1.5">Clinical Dental Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            2.5. WELCOME TO CLINIC (Torrance Dentist-Inspired Standout Showcase)
            ================================================================== */}
        <WelcomeSection onOpenDrawer={openDrawer} clinic={clinic} />

        {/* ==================================================================
            3. TREATING SPECIALISTS & DOCTORS SECTION (Real Clinician Bios)
            ================================================================== */}
        <DoctorsSection onOpenDrawer={openDrawer} customDoctors={clinic.doctors} />

        {/* ==================================================================
            4. OUR SERVICES: COMPREHENSIVE CLINICAL TREATMENTS
            Top 2 Marquee Initially + Expand/Collapse Down Arrow Toggle
            ================================================================== */}
        <section id="treatments" className="py-16 sm:py-24 bg-white border-t border-slate-100">
          <div className="w-full max-w-[1720px] mx-auto px-5 sm:px-7 lg:px-8 xl:px-9">

            {/* Simple, Breathable Header */}
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2 block">
                Comprehensive Dental Care
              </span>
              <h2 className="font-heading font-normal text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
                Treatments &amp; Specialized Care
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                From permanent titanium implants to painless single-sitting root canals, explore how our hospital specialists restore and protect your smile.
              </p>
            </div>

            {/* Asymmetrical Horizontal Masonry Cards */}
            <div className="space-y-14 sm:space-y-18 max-w-[1340px] mx-auto">
              {displayedServices.map((pillar, idx) => {
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
                    className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch"
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
                        {pillar.kicker && (
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4F634] mb-3 block">
                            {pillar.kicker}
                          </span>
                        )}
                        <h3 className="font-heading font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-white tracking-tight leading-tight mb-4">
                          {pillar.title}
                        </h3>
                        <p className="text-white/80 text-sm sm:text-base lg:text-[1.05rem] leading-relaxed max-w-lg mb-8 font-normal">
                          {pillar.desc}
                        </p>
                      </div>

                      <div>
                        <button
                          type="button"
                          onClick={openDrawer}
                          className="inline-flex items-center gap-2.5 pl-6 pr-2.5 py-2.5 rounded-full bg-white text-slate-950 font-semibold text-xs sm:text-sm hover:bg-slate-100 active:scale-[0.98] transition-all shadow-sm group"
                        >
                          <span>{pillar.buttonText}</span>
                          <span className="w-6 h-6 rounded-full bg-[#D4F634] flex items-center justify-center text-slate-900 shrink-0 group-hover:rotate-45 transition-transform duration-300">
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                              <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Matching Real Clinical Photograph */}
                    <div
                      className={`${cfg.imgCols} ${cfg.imgOrder} relative rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[420px] bg-slate-100 shadow-sm border border-slate-100`}
                    >
                      {/* Mobile 3:4 Aspect Portrait */}
                      <div className="block sm:hidden relative w-full h-full min-h-[360px] aspect-[3/4]">
                        <Image
                          src={pillar.mobileImage || pillar.image}
                          alt={pillar.imageAlt}
                          fill
                          sizes="100vw"
                          className="object-cover"
                        />
                      </div>
                      {/* Desktop 4:3 Aspect Landscape */}
                      <div className="hidden sm:block relative w-full h-full min-h-[380px] sm:min-h-[420px]">
                        <Image
                          src={pillar.image}
                          alt={pillar.imageAlt}
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

            {/* Expand / Collapse Pill Toggle Button */}
            <div className="mt-12 sm:mt-16 text-center">
              <button
                type="button"
                onClick={() => setShowAllServices(!showAllServices)}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all group border border-slate-700"
              >
                <span>
                  {showAllServices
                    ? "Show Less Treatments"
                    : `Explore All ${servicePillars.length} Specialized Treatments`}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#D4F634] transition-transform duration-300 ${
                    showAllServices ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

          </div>
        </section>

        {/* ==================================================================
            5. ADVANCED CLINICAL TECHNOLOGY (Top 2 Initially + Toggle Button)
            ================================================================== */}
        <TechnologySection onOpenDrawer={openDrawer} />

        {/* ==================================================================
            6. SEE WHAT'S POSSIBLE (Interactive Patient Transformation Stories)
            ================================================================== */}
        <BeforeAfterSlider onOpenDrawer={openDrawer} />

        {/* ==================================================================
            7. HYGIENE PROTOCOLS & CLINIC TRUST
            ================================================================== */}
        <section id="about" className="py-14 sm:py-20 lg:py-24 bg-white border-t border-[#6da5d8]/15">
          <div id="why-us" className="w-full max-w-[1720px] mx-auto px-5 sm:px-7 lg:px-8 xl:px-9">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

              {/* Left Column: Why Choose Us */}
              <div className="lg:col-span-6">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0f5fc] text-[#38537b] text-xs font-semibold uppercase tracking-wider mb-3.5 border border-[#6da5d8]/25">
                  Safety &amp; Ethics
                </span>
                <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight mb-4">
                  Why Gomti Nagar Families Trust {clinic.name}
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  We maintain strict clinical transparency, hospital-level sterilization, and gentle bedside manners so you feel relaxed and confident from the moment you step in.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-7 h-7 rounded-xl bg-[#6da5d8] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-slate-900">4-Tier Autoclave Sterilization</h4>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Every metallic instrument is sealed and sterilized before every appointment.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-7 h-7 rounded-xl bg-[#6da5d8] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-slate-900">Clear Estimates, No Hidden Charges</h4>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5">We explain every treatment step and pricing clearly before starting any procedure.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-7 h-7 rounded-xl bg-[#6da5d8] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-slate-900">Punctual Appointments via WhatsApp</h4>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Book your exact slot on WhatsApp to avoid long waiting room delays.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Real Reception & Operatory Photos with Bento Trust Badge */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden shadow-md aspect-[4/3] group border border-slate-100">
                  <Image
                    src={clinic?.photos?.desk || (clinic.slug === "sai" ? "/clinic/clinic_desk.jpg" : "/clinic/neutral/modern_consultation_desk.jpg")}
                    alt={`${clinic.name} Consultation Desk`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute bottom-2.5 left-2.5 px-3 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold border border-white/10">
                    Consultation Desk
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-md aspect-[4/3] group border border-slate-100">
                  <Image
                    src={clinic?.photos?.operatory || (clinic.slug === "sai" ? "/clinic/clinic_operatory.jpg" : "/clinic/neutral/advanced_operatory.jpg")}
                    alt="Sanitized Dental Operatory"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute bottom-2.5 left-2.5 px-3 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold border border-white/10">
                    Sanitized Operatory
                  </div>
                </div>

                {/* Chief Surgeon & Clinical Team Banner */}
                <div className="sm:col-span-2 bg-gradient-to-r from-[#436697] via-[#547eb6] to-[#38537b] text-white rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4 border border-white/20 shadow-lg relative overflow-hidden">
                  <div className="absolute -right-8 -bottom-8 w-36 h-36 bg-white/10 rounded-full blur-xl pointer-events-none" />
                  <div className="flex items-center gap-3.5 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-[#D4F634] text-slate-950 flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                      Dr
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white">{clinic.doctorName} &amp; Specialist Team</div>
                      <div className="text-[11px] text-white/80">{clinic.area}</div>
                    </div>
                  </div>
                  <button
                    onClick={openDrawer}
                    className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-slate-900 font-bold text-xs hover:bg-[#D4F634] transition-all duration-200 shadow-sm shrink-0 relative z-10"
                  >
                    <span>Consult Dr.</span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==================================================================
            8. REAL CLINIC TOUR & FACILITY (High-Res Photos)
            ================================================================== */}
        <ClinicTourSection clinic={clinic} />

        {/* ==================================================================
            9. WHAT OUR PATIENTS SAY (Verified Social Proof Wall)
            ================================================================== */}
        <section id="reviews" className="py-16 sm:py-24 bg-[#6da5d8] text-white relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-sky-400/10 blur-[140px] rounded-full pointer-events-none" />

          <div className="w-full max-w-[1720px] mx-auto px-5 sm:px-7 lg:px-8 xl:px-9 relative z-10">

            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 text-white text-xs font-semibold uppercase tracking-wider mb-3.5 border border-white/20 backdrop-blur-sm shadow-xs">
                <svg className="w-3.5 h-3.5 text-amber-300 fill-current shrink-0" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>{clinic.rating || "4.9"} Rating • {clinic.reviews || "151+"} Google Reviews</span>
              </span>

              <h2 className="font-heading font-normal text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                What Our Patients Say
              </h2>
              <p className="text-white/80 text-sm sm:text-base mt-3 leading-relaxed">
                Honest feedback from Lucknow families who trust {clinic.name} for gentle, unhurried care.
              </p>
            </div>

            {/* Balanced 3x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[1340px] mx-auto">
              {testimonials.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-7 sm:p-8 text-slate-900 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Bold 5-Star Rating */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-1.5 text-amber-400">
                        {[...Array(item.rating)].map((_, i) => (
                          <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-slate-200">
                        <FaGoogle className="w-2.5 h-2.5 text-[#4285F4] shrink-0" />
                        <span>Verified</span>
                      </span>
                    </div>

                    <p className="text-slate-800 text-sm sm:text-[0.95rem] leading-relaxed mb-6 font-normal">
                      &ldquo;{item.review}&rdquo;
                    </p>
                  </div>

                  {/* Patient Info Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${item.avatarBg} text-xs font-bold flex items-center justify-center shrink-0 shadow-xs`}>
                        {item.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-900">{item.name}</h4>
                        <p className="text-[11px] text-slate-500">{item.location}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-[#38537b] bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200 hidden sm:inline-block">
                      {item.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ==================================================================
            10. CLINIC LOCATION, HOURS & GOOGLE MAPS EMBED
            Adapts between Dual-Branch Switcher (Sai) and Single-Branch Showcase
            ================================================================== */}
        <section id="location" className="py-14 sm:py-20 lg:py-24 bg-white border-t border-[#6da5d8]/15">
          <div className="w-full max-w-[1720px] mx-auto px-5 sm:px-7 lg:px-8 xl:px-9">

            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0f5fc] text-[#38537b] text-xs font-semibold uppercase tracking-wider mb-3.5 border border-[#6da5d8]/25 shadow-xs">
                {clinic.hasMultipleBranches ? "Two Convenient Branches" : "Hospital Location & Hours"}
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight">
                Visit Us in {clinic.area || "Gomti Nagar, Lucknow"}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2.5">
                {clinic.hasMultipleBranches
                  ? `${clinic.name} operates two fully equipped clinical centers to serve you.`
                  : `${clinic.name} welcomes you for gentle, unhurried hospital dental care.`}
              </p>

              {/* Interactive Branch Switcher Tabs (Only if multiple branches) */}
              {clinic.hasMultipleBranches && (
                <div className="mt-6 inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200 shadow-inner">
                  <button
                    onClick={() => setActiveBranch("vipul")}
                    className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                      activeBranch === "vipul"
                        ? "bg-[#38537b] text-white shadow-md"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${activeBranch === "vipul" ? "bg-[#D4F634]" : "bg-slate-400"}`} />
                    <span>Branch 1: Vipul Khand 2</span>
                    <span className="text-[10px] hidden sm:inline px-1.5 py-0.5 rounded bg-white/20">Dr. Sumi</span>
                  </button>
                  <button
                    onClick={() => setActiveBranch("viram")}
                    className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                      activeBranch === "viram"
                        ? "bg-[#38537b] text-white shadow-md"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${activeBranch === "viram" ? "bg-[#D4F634]" : "bg-slate-400"}`} />
                    <span>Branch 2: Viram Khand 1</span>
                    <span className="text-[10px] hidden sm:inline px-1.5 py-0.5 rounded bg-white/20">Dr. Rahul</span>
                  </button>
                </div>
              )}
            </div>

            {/* Branch Card & Map Grid */}
            <div className="bg-[#f0f5fc]/80 border border-[#6da5d8]/25 rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">

              {/* Location details */}
              <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-emerald-800 text-[11px] font-bold border border-emerald-200 mb-3.5 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {clinic.hasMultipleBranches ? currentBranch.badge : `Verified Dental Centre • ${clinic.reviews || "151+"} Reviews`}
                  </div>

                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 mb-1">
                    {clinic.hasMultipleBranches ? currentBranch.tabTitle : clinic.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#38537b] mb-6">
                    {clinic.hasMultipleBranches
                      ? `${currentBranch.doctor} • ${currentBranch.specialty}`
                      : `${clinic.doctorName} • Senior Dental Specialists`}
                  </p>

                  <div className="space-y-5 text-xs sm:text-sm">
                    {/* Address */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-xl bg-[#6da5d8]/15 text-[#38537b] border border-[#6da5d8]/25 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-0.5">Clinic Address</h4>
                        <p className="text-slate-600 leading-relaxed">
                          {clinic.hasMultipleBranches ? currentBranch.address : clinic.address}
                        </p>
                      </div>
                    </div>

                    {/* Consultation Timings */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-xl bg-[#6da5d8]/15 text-[#38537b] border border-[#6da5d8]/25 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-0.5">Consultation Timings</h4>
                        <p className="text-slate-600 leading-relaxed font-medium">
                          {clinic.hasMultipleBranches
                            ? currentBranch.timings
                            : "Mon – Sat: 10:00 AM – 2:00 PM & 5:00 PM – 9:00 PM | Sun: By Prior Appointment"}
                        </p>
                      </div>
                    </div>

                    {/* Direct Contact */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-xl bg-[#6da5d8]/15 text-[#38537b] border border-[#6da5d8]/25 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                        <FaPhone className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-0.5">Direct Clinic Contact</h4>
                        <p className="text-slate-600 leading-relaxed">
                          Phone:{" "}
                          <a
                            href={`tel:${clinic.hasMultipleBranches ? currentBranch.phone : clinic.phone}`}
                            className="font-bold text-slate-900 hover:text-blue-600 transition-colors"
                          >
                            {clinic.hasMultipleBranches ? currentBranch.phoneDisplay : clinic.phoneDisplay}
                          </a>
                          <br />
                          WhatsApp: Active for immediate priority scheduling
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="mt-8 pt-6 border-t border-[#6da5d8]/20 flex flex-col sm:flex-row gap-3">
                  <a
                    href={
                      clinic.hasMultipleBranches
                        ? currentBranch.mapsUrl
                        : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.name + " " + clinic.address)}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-between px-4 py-3 rounded-xl bg-[#38537b] hover:bg-[#2b4263] text-white text-xs sm:text-sm font-semibold transition-all hover:scale-[1.01] group shadow-md"
                  >
                    <span className="flex items-center gap-2">
                      <FaLocationDot className="w-3.5 h-3.5 text-[#D4F634] shrink-0" />
                      <span>Google Maps Directions</span>
                    </span>
                    <span className="w-5 h-5 rounded-full bg-[#D4F634] text-slate-950 flex items-center justify-center shrink-0 group-hover:rotate-45 transition-transform duration-300">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </a>
                  <a
                    href={
                      clinic.hasMultipleBranches
                        ? currentBranch.waUrl
                        : `https://wa.me/${clinic.phone}?text=${encodeURIComponent(`Hello Dr. / ${clinic.name}, I would like to book a consultation appointment.`)}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#D4F634] hover:bg-[#c6eb2b] text-slate-950 text-xs sm:text-sm font-bold shadow-md transition-all hover:scale-[1.01]"
                  >
                    <FaWhatsapp className="w-4 h-4 shrink-0 text-slate-950" />
                    <span>WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>
              </div>

              {/* Map Embed */}
              <div className="lg:col-span-7 min-h-[340px] lg:min-h-full w-full bg-slate-200 relative">
                <iframe
                  key={clinic.hasMultipleBranches ? currentBranch.id : clinic.slug}
                  src={clinic.hasMultipleBranches ? currentBranch.embedUrl : (clinic.mapsEmbedUrl || currentBranch.embedUrl)}
                  className="w-full h-full min-h-[360px] border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${clinic.name} Location Map`}
                />
              </div>

            </div>
          </div>
        </section>

        {/* ==================================================================
            11. APPOINTMENT TIMING & INSTANT BOOKING (Pre-Footer Terminal CTA)
            ================================================================== */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[#6da5d8] via-[#547eb6] to-[#38537b] text-white relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white font-extrabold text-xs uppercase tracking-wider mb-4 border border-white/30 backdrop-blur-md">
                <svg className="w-3.5 h-3.5 stroke-current shrink-0" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>Book Appointment</span>
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-3 text-white drop-shadow-sm">
                Schedule Your Visit Today
              </h2>
              <p className="text-white/90 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Book your appointment quickly via WhatsApp or visit us during official clinic hours.
              </p>
            </div>

            {/* Schedule Card */}
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/40 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Column: Timing Breakdown */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-md">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 leading-tight">Appointment Timing</h3>
                    <p className="text-xs text-slate-500">Official Consultation Schedule</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs sm:text-sm font-bold text-slate-800">Morning Session</span>
                  </div>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900">10:30 AM – 4:00 PM</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-xs sm:text-sm font-bold text-slate-800">Evening Session</span>
                  </div>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900">6:00 PM – 9:00 PM</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-200/60 flex items-center justify-between text-rose-800">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="text-xs sm:text-sm font-bold">Sunday Evening</span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold">Closed (Prior Appt Only)</span>
                </div>
              </div>

              {/* Right Column: Instant Booking CTAs */}
              <div className="flex flex-col justify-between h-full bg-slate-50/70 rounded-2xl p-6 border border-slate-200">
                <div>
                  <h4 className="font-heading font-bold text-lg text-slate-900 mb-1">Instant Priority Booking</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    Send us a message on WhatsApp and our clinical team will confirm your doctor and time slot within minutes. Zero waiting, zero hassle.
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href={`https://wa.me/${clinic.phone}?text=${encodeURIComponent(`Hello Dr. / ${clinic.name}, I would like to schedule a priority consultation appointment.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <FaWhatsapp className="w-4.5 h-4.5 shrink-0 text-white" />
                    <span>Book on WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0" />
                  </a>

                  <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2">
                    <span className="flex -space-x-1">
                      <span className="w-5 h-5 rounded-full bg-sky-400 text-white text-[9px] font-bold flex items-center justify-center">S</span>
                      <span className="w-5 h-5 rounded-full bg-teal-400 text-white text-[9px] font-bold flex items-center justify-center">A</span>
                      <span className="w-5 h-5 rounded-full bg-amber-400 text-white text-[9px] font-bold flex items-center justify-center">R</span>
                    </span>
                    <span>Join 1,000+ happy Gomti Nagar patients</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* ====================================================================
          12. CLEAN FOOTER
          ==================================================================== */}
      <footer className="bg-slate-950 text-slate-400 py-10 border-t border-slate-800 text-xs sm:text-sm">
        <div className="w-full max-w-[1720px] mx-auto px-5 sm:px-7 lg:px-8 xl:px-9 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white p-1 overflow-hidden shrink-0 shadow-sm border border-slate-700 flex items-center justify-center">
              <img
                src={clinic.logo || "/branding/logo.png"}
                alt={clinic.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h4 className="text-white font-bold text-base">{clinic.name}</h4>
              <p className="text-slate-500 text-xs mt-0.5">{clinic.address}</p>
            </div>
          </div>
          <div className="text-slate-500 text-xs">
            <p>© 2026 {clinic.name}. All rights reserved.</p>
            <p className="mt-1">
              High-Performance Web Design by{" "}
              <a
                href="https://kevin-portfolio-sage.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 font-semibold hover:underline"
              >
                Kevin
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* ====================================================================
          13. MOBILE DOCK & INTERACTIVE BOOKING DRAWER
          ==================================================================== */}
      <MobileDock onOpenDrawer={openDrawer} clinic={clinic} />
      <AppointmentDrawer isOpen={isDrawerOpen} onClose={closeDrawer} clinic={clinic} />
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#6da5d8]" />}>
      <DentalClinicContent />
    </Suspense>
  );
}
