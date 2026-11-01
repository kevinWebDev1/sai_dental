"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaPhone } from "react-icons/fa6";

export default function Navbar({ onOpenDrawer, clinic }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const brandTitle = clinic?.brandTitle || "SAI SPECIALIZED";
  const brandSubtitle = clinic?.brandSubtitle || "Dental Hospital & Implant Centre";
  const clinicName = clinic?.name || "Sai Specialized Dental Hospital";
  const phone = clinic?.phone || "919235179344";
  const phoneDisplay = clinic?.phoneDisplay || "092351 79344";
  const reviewsCount = clinic?.reviews || "151+";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#6da5d8]/90 backdrop-blur-md shadow-md border-b border-white/15 py-0"
          : "bg-transparent border-b border-transparent py-0 sm:py-1"
      }`}
    >
      <div className="w-full max-w-[1720px] mx-auto px-5 sm:px-7 lg:px-8 xl:px-9 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand identity: Official Circular Emblem Logo + Clean Clinic Brand Mark */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden shrink-0 shadow-sm border border-white/40 bg-white transition-transform group-hover:scale-105 flex items-center justify-center">
            <img
              src="/clinic_logo.png"
              alt="Sai Specialized Dental Hospital Official Logo"
              className="w-full h-full object-contain p-1"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-base sm:text-lg text-white tracking-tight leading-none">
              {brandTitle}
            </span>
            <span className="text-[10px] text-white/80 font-medium tracking-wider uppercase mt-0.5">
              {brandSubtitle}
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 text-[13px] xl:text-[13.5px] font-medium tracking-normal font-body">
          <a href="#doctors" className="px-3 py-1.5 rounded-full text-white/80 hover:text-[#D4F634] hover:bg-white/10 transition-all duration-200">Our Doctors</a>
          <a href="#treatments" className="px-3 py-1.5 rounded-full text-white/80 hover:text-[#D4F634] hover:bg-white/10 transition-all duration-200">Our Services</a>
          <a href="#technology" className="px-3 py-1.5 rounded-full text-white/80 hover:text-[#D4F634] hover:bg-white/10 transition-all duration-200">Technology</a>
          <a href="#results" className="px-3 py-1.5 rounded-full text-white/80 hover:text-[#D4F634] hover:bg-white/10 transition-all duration-200">See What’s Possible</a>
          <a href="#facility" className="px-3 py-1.5 rounded-full text-white/80 hover:text-[#D4F634] hover:bg-white/10 transition-all duration-200">Clinic Tour</a>
          <a href="#reviews" className="px-3 py-1.5 rounded-full text-white/80 hover:text-[#D4F634] hover:bg-white/10 transition-all duration-200">Reviews</a>
          <a href="#location" className="px-3 py-1.5 rounded-full text-white/80 hover:text-[#D4F634] hover:bg-white/10 transition-all duration-200">{clinic?.hasMultipleBranches ? "Branches" : "Location"}</a>
        </nav>

        {/* Header Actions: Desktop Contacts Pill Button vs Mobile Hamburger Icon */}
        <div className="flex items-center">
          {/* Desktop Contacts Button */}
          <button
            onClick={onOpenDrawer}
            className="hidden lg:inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-white text-slate-900 hover:bg-slate-50 text-xs sm:text-sm font-semibold shadow-sm transition-all hover:scale-[1.02] active:scale-[0.99] group"
          >
            <span>Book Consultation</span>
            <span className="w-6 h-6 rounded-full bg-[#D4F634] flex items-center justify-center text-slate-900 shrink-0 group-hover:rotate-45 transition-transform duration-300">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
              </svg>
            </span>
          </button>

          {/* Mobile Clean 3-Line Hamburger Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 -mr-1 text-white/90 hover:text-white transition-colors focus:outline-none"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slide-out Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#5a94c9] border-t border-white/15 px-5 py-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-4 font-body">
            <a
              href="#doctors"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white/90 hover:text-white text-base font-medium transition-colors"
            >
              Our Doctors
            </a>
            <a
              href="#treatments"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white/90 hover:text-white text-base font-medium transition-colors"
            >
              Our Services (Maintain, Protect, Enhance)
            </a>
            <a
              href="#technology"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white/90 hover:text-white text-base font-medium transition-colors"
            >
              Advanced Technology
            </a>
            <a
              href="#results"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white/90 hover:text-white text-base font-medium transition-colors"
            >
              See What’s Possible
            </a>
            <a
              href="#facility"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white/90 hover:text-white text-base font-medium transition-colors"
            >
              Clinic Tour &amp; Photos
            </a>
            <a
              href="#reviews"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white/90 hover:text-white text-base font-medium transition-colors"
            >
              Patient Reviews ({reviewsCount} Verified)
            </a>
            <a
              href="#location"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white/90 hover:text-white text-base font-medium transition-colors"
            >
              {clinic?.hasMultipleBranches ? "Two Branches & Timings" : "Clinic Location & Timings"}
            </a>
            <div className="pt-4 border-t border-white/20 flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenDrawer();
                }}
                className="w-full py-3.5 px-5 rounded-2xl bg-white text-slate-900 font-bold text-sm flex items-center justify-between shadow-md"
              >
                <span>Book Consultation</span>
                <span className="w-6 h-6 rounded-full bg-[#D4F634] flex items-center justify-center text-slate-900 shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </button>
              <a
                href={`tel:${phone}`}
                className="w-full py-3 px-5 rounded-2xl bg-white/10 border border-white/25 text-white font-medium text-xs flex items-center justify-center gap-2"
              >
                <FaPhone className="w-3 h-3 text-white/90" />
                <span>Direct Call: {phoneDisplay}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

