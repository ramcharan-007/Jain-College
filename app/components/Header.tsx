"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Mega menu data structure
  const megaMenus: Record<string, React.ReactNode> = {
    Campuses: (
      <div className="flex gap-8 p-6">
        {/* Vasavi Road */}
        <div className="min-w-52">
          <h3 className="font-bold text-[#001C54] mb-3">Vasavi Road</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link
                href="/campuses/vasaviroad/overview"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › Overview
              </Link>
            </li>
            <li>
              <Link
                href="/campuses/vasaviroad/student-cells"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › Student Cells
              </Link>
            </li>
            <li>
              <Link
                href="/campuses/vasaviroad/clubs"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › Clubs & Forums
              </Link>
            </li>
          </ul>
          <h4 className="font-bold text-[#001C54] mt-4 mb-2">
            Courses offered
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link
                href="/campuses/vasaviroad/bcom"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › Bachelor of Commerce
              </Link>
            </li>
            <li>
              <Link
                href="/campuses/vasaviroad/bba"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › Bachelor of Business Administration (BBA)
              </Link>
            </li>
            <li>
              <Link
                href="/campuses/vasaviroad/bca"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › Bachelor of Computer Application
              </Link>
            </li>
            <li>
              <Link
                href="/campuses/vasaviroad/bba-aviation"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › BBA in Aviation Management
              </Link>
            </li>
            <li>
              <Link
                href="/campuses/vasaviroad/mcom"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › Master of Commerce (M.Com)
              </Link>
            </li>
            <li>
              <Link
                href="/campuses/vasaviroad/ma-economics"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › Master of Arts in Economics
              </Link>
            </li>
          </ul>
        </div>

        {/* Promo Image */}
        <div className="min-w-64 ml-auto">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="bg-white p-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-[#001C54] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">JGI</span>
                </div>
                <span className="text-[#001C54] text-xs font-semibold">
                  JAIN COLLEGE
                </span>
              </div>
              <div className="h-36 bg-gray-100 rounded-lg flex items-center justify-center mb-2 relative overflow-hidden">
                <div className="text-center text-gray-400">
                  <svg
                    className="w-16 h-16 mx-auto mb-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-xs">Student Image</p>
                </div>
              </div>
            </div>
            <div
              className="bg-[#001C54] p-4 rounded-b-lg"
              style={{ borderRadius: "0 0 50% 0 / 0 0 30% 0" }}
            >
              <p className="text-[#F8C300] font-bold text-lg mb-1">
                Unlock Success
              </p>
              <p className="text-white font-bold text-lg mb-1">
                with Free PUC Model
              </p>
              <p className="text-white font-bold text-lg mb-2">
                question Papers!
              </p>
              <p className="text-white/70 text-xs mb-3">
                Get the latest Science, Commerce, and Arts question papers.
              </p>
              <Link
                href="/model-papers"
                className="inline-block bg-transparent border border-white text-white text-xs px-4 py-2 rounded-full font-semibold hover:bg-white hover:text-[#001C54] transition-colors"
              >
                Download
              </Link>
            </div>
          </div>
        </div>
      </div>
    ),
    Programmes: (
      <div className="flex gap-8 p-6">
        {/* PUC Science */}
        <div className="min-w-40">
          <h3 className="font-bold text-[#F8C300] mb-3">
            <Link href="/top-pu-colleges">› PUC Science</Link>
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link
                href="/programmes/puc-science/pcmb"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › PCMB
              </Link>
            </li>
            <li>
              <Link
                href="/programmes/puc-science/pcmc"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › PCMC
              </Link>
            </li>
            <li>
              <Link
                href="/programmes/puc-science/pcme"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › PCME
              </Link>
            </li>
            <li>
              <Link
                href="/programmes/puc-science/pcms"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › PCMS
              </Link>
            </li>
          </ul>
          <h4 className="font-bold text-[#001C54] mt-4 mb-2">
            Integrated Courses
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link
                href="/programmes/integrated/jee-mains"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › JEE Mains
              </Link>
            </li>
            <li>
              <Link
                href="/programmes/integrated/neet"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › NEET
              </Link>
            </li>
            <li>
              <Link
                href="/programmes/integrated/kcet"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › KCET
              </Link>
            </li>
            <li>
              <Link
                href="/programmes/integrated/comedk"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › COMEDK
              </Link>
            </li>
            <li>
              <Link
                href="/programmes/integrated/programmes"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › Integrated Programmes
              </Link>
            </li>
          </ul>
        </div>

        {/* PUC Commerce */}
        <div className="min-w-40">
          <h3 className="font-bold text-[#F8C300] mb-3"><Link href="/top-pu-colleges">
          › PUC Commerce
          </Link>
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link
                href="/programmes/puc-commerce/abms"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › ABMS
              </Link>
            </li>
            <li>
              <Link
                href="/programmes/puc-commerce/abes"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › ABES
              </Link>
            </li>
            <li>
              <Link
                href="/programmes/puc-commerce/abem"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › ABEM
              </Link>
            </li>
            <li>
              <Link
                href="/programmes/puc-commerce/abecs"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › ABECs
              </Link>
            </li>
            <li>
              <Link
                href="/programmes/puc-commerce/abscs"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › ABSCs
              </Link>
            </li>
          </ul>
          <h4 className="font-bold text-[#001C54] mt-4 mb-2">
            Integrated Courses
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link
                href="/programmes/integrated/ca"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › CA
              </Link>
            </li>
          </ul>
        </div>

        {/* PUC Arts/Humanities */}
        <div className="min-w-52">
          <h3 className="font-bold text-[#F8C300] mb-3">
            <Link href="/top-pu-colleges">
            › PUC Arts/Humanities
            </Link>
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link
                href="/programmes/puc-arts/hepys"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › HEPyS
              </Link>
            </li>
            <li>
              <Link
                href="/programmes/puc-arts/eppys"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › EPPyS
              </Link>
            </li>
            <li>
              <Link
                href="/programmes/puc-arts/hepyp"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › HEPyP
              </Link>
            </li>
          </ul>
          <h4 className="font-bold text-[#001C54] mt-4 mb-2">
            UG Courses offered
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link
                href="/programmes/ug/bcom"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › Bachelor of Commerce
              </Link>
            </li>
            <li>
              <Link
                href="/programmes/ug/bba"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › Bachelor of Business Administration (BBA)
              </Link>
            </li>
            <li>
              <Link
                href="/programmes/ug/bca"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › Bachelor of Computer Application
              </Link>
            </li>
            <li>
              <Link
                href="/programmes/ug/bba-aviation"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › BBA in Aviation Management
              </Link>
            </li>
          </ul>
          <h4 className="font-bold text-[#001C54] mt-4 mb-2">
            PG Courses offered
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link
                href="/programmes/pg/mcom"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › Master of Commerce (M.Com)
              </Link>
            </li>
            <li>
              <Link
                href="/programmes/pg/ma-economics"
                className="hover:text-[#F8C300] flex items-center gap-1"
              >
                › Master of Arts in Economics
              </Link>
            </li>
          </ul>
        </div>

        {/* Promo Image */}
        <div className="min-w-64 ml-auto">
          <div className="bg-gradient-to-br from-[#001C54] to-[#16336e] rounded-lg overflow-hidden">
            <div className="p-3 text-center">
              <p className="text-white/70 text-xs mb-1">📍 Jayanagar Campus</p>
              <p className="text-[#F8C300] text-2xl font-serif italic mb-1">
                Congratulations
              </p>
              <p className="text-white font-bold text-xl mb-1">
                State 4th Rank
              </p>
              <p className="text-white text-sm mb-2">Commerce (ABMS)</p>
              <div className="bg-[#F8C300] text-[#001C54] inline-block px-3 py-1 rounded-full text-sm font-bold mb-3">
                596/600 | 99.33%
              </div>
              <div className="h-28 bg-white/10 rounded-lg flex items-center justify-center mb-2 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white/50">
                    <svg
                      className="w-12 h-12 mx-auto"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xs">Student Photo</p>
                  </div>
                </div>
                {/* Decorative laurels */}
                <div className="absolute left-2 bottom-0 text-[#F8C300] text-3xl">
                  🌿
                </div>
                <div className="absolute right-2 bottom-0 text-[#F8C300] text-3xl transform scale-x-[-1]">
                  🌿
                </div>
              </div>
              <p className="text-white text-sm font-medium">
                Amruthavarshini S
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    Explore: (
      <div className="p-4 min-w-48">
        <ul className="space-y-2 text-sm text-gray-600">
          <li>
            <Link
              href="/explore/blogs"
              className="hover:text-[#F8C300] flex items-center gap-1"
            >
              › Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/explore/media"
              className="hover:text-[#F8C300] flex items-center gap-1"
            >
              › Media
            </Link>
          </li>
          <li>
            <Link
              href="/explore/news-events"
              className="hover:text-[#F8C300] flex items-center gap-1"
            >
              › News & Events
            </Link>
          </li>
          <li>
            <Link
              href="/explore/photo-gallery"
              className="hover:text-[#F8C300] flex items-center gap-1"
            >
              › Photo Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/explore/video-gallery"
              className="hover:text-[#F8C300] flex items-center gap-1"
            >
              › Video Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/explore/model-papers"
              className="hover:text-[#F8C300] flex items-center gap-1"
            >
              › Model Papers
            </Link>
          </li>
          <li>
            <Link
              href="/explore/achievements"
              className="hover:text-[#F8C300] flex items-center gap-1"
            >
              › Achievements
            </Link>
          </li>
          <li>
            <Link
              href="/explore/student-support"
              className="hover:text-[#F8C300] flex items-center gap-1"
            >
              › Student Support Service
            </Link>
          </li>
        </ul>
      </div>
    ),
  };

  const navItems = [
    { name: "Home", href: "/", icon: "home" },
    { name: "About", href: "/about" },
    { name: "Campuses", href: "", hasMegaMenu: true },
    { name: "Programmes", href: "/programmes", hasMegaMenu: true },
    { name: "Admissions", href: "/admissions" },
    { name: "Explore", href: "/explore", hasMegaMenu: true },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="bg-[#001C54] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-[#F8C300]">
              <span className="text-[#001C54] font-bold text-sm">JGI</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-white font-bold text-base leading-tight tracking-wide">
                JAIN COLLEGE GLOBAL CAMPUS
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-5">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.hasMegaMenu && setActiveDropdown(item.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`font-medium flex items-center gap-1 py-2 text-sm transition-colors ${
                    activeDropdown === item.name
                      ? "text-[#F8C300]"
                      : "text-white hover:text-[#F8C300]"
                  }`}
                >
                  {item.icon === "home" ? (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  ) : (
                    item.name
                  )}
                  {item.hasMegaMenu && (
                    <svg
                      className={`w-3 h-3 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {/* Mega Menu Dropdown */}
                {item.hasMegaMenu && activeDropdown === item.name && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-b-lg border-t-4 border-[#F8C300] min-w-max"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {megaMenus[item.name]}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Apply Now Button */}
          <div className="hidden lg:block">
            <Link
              href="/apply"
              className="bg-[#F8C300] text-[#001C54] px-5 py-2 rounded-md font-semibold hover:bg-[#dfb82d] transition-colors text-sm"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/20 max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.name} className="py-2">
                <Link
                  href={item.href}
                  className="block text-white font-medium"
                  onClick={() => !item.hasMegaMenu && setIsMenuOpen(false)}
                >
                  {item.icon === "home" ? "Home" : item.name}
                </Link>
                {item.hasMegaMenu && item.name === "Campuses" && (
                  <div className="pl-4 mt-2 space-y-2 text-sm">
                    <p className="text-[#F8C300] font-semibold mt-3">
                      Vasavi Road
                    </p>
                    <Link
                      href="/campuses/vasaviroad/overview"
                      className="block text-white/70"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      › Overview
                    </Link>
                    <Link
                      href="/campuses/vasaviroad/clubs"
                      className="block text-white/70"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      › Clubs & Forums
                    </Link>
                  </div>
                )}
                {item.hasMegaMenu && item.name === "Programmes" && (
                  <div className="pl-4 mt-2 space-y-2 text-sm">
                    <p className="text-[#F8C300] font-semibold">PUC Science</p>
                    <Link
                      href="/programmes/puc-science/pcmb"
                      className="block text-white/70"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      › PCMB
                    </Link>
                    <Link
                      href="/programmes/puc-science/pcmc"
                      className="block text-white/70"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      › PCMC
                    </Link>
                    <p className="text-[#F8C300] font-semibold mt-3">
                      PUC Commerce
                    </p>
                    <Link
                      href="/programmes/puc-commerce/abms"
                      className="block text-white/70"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      › ABMS
                    </Link>
                    <Link
                      href="/programmes/puc-commerce/abes"
                      className="block text-white/70"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      › ABES
                    </Link>
                    <p className="text-[#F8C300] font-semibold mt-3">
                      PUC Arts/Humanities
                    </p>
                    <Link
                      href="/programmes/puc-arts/hepys"
                      className="block text-white/70"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      › HEPyS
                    </Link>
                    <p className="text-[#F8C300] font-semibold mt-3">
                      Integrated Courses
                    </p>
                    <Link
                      href="/programmes/integrated/jee-mains"
                      className="block text-white/70"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      › JEE Mains
                    </Link>
                    <Link
                      href="/programmes/integrated/neet"
                      className="block text-white/70"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      › NEET
                    </Link>
                  </div>
                )}
                {item.hasMegaMenu && item.name === "Explore" && (
                  <div className="pl-4 mt-2 space-y-2 text-sm">
                    <Link
                      href="/explore/blogs"
                      className="block text-white/70"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      › Blogs
                    </Link>
                    <Link
                      href="/explore/news-events"
                      className="block text-white/70"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      › News & Events
                    </Link>
                    <Link
                      href="/explore/photo-gallery"
                      className="block text-white/70"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      › Photo Gallery
                    </Link>
                    <Link
                      href="/explore/achievements"
                      className="block text-white/70"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      › Achievements
                    </Link>
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/apply"
              className="inline-block mt-4 bg-[#F8C300] text-[#001C54] px-6 py-2.5 rounded-md font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        )}
      </div>

      {/* Yellow accent line at bottom */}
      <div className="h-1 bg-[#F8C300]"></div>
    </header>
  );
};

export default Header;
