"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    programme: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const EnquiryForm = () => (
    <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
      <h3 className="text-[#001C54] font-bold text-xl lg:text-2xl mb-1">
        Enquire Now
      </h3>
      <p className="text-gray-500 text-sm mb-5">
        Admissions Open for 2026-27
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name *"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F8C300] focus:ring-2 focus:ring-[#F8C300]/20 outline-none text-gray-700 text-sm transition-all"
        />
        <input
          type="email"
          placeholder="Email Address *"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F8C300] focus:ring-2 focus:ring-[#F8C300]/20 outline-none text-gray-700 text-sm transition-all"
        />
        <input
          type="tel"
          placeholder="Phone Number *"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F8C300] focus:ring-2 focus:ring-[#F8C300]/20 outline-none text-gray-700 text-sm transition-all"
        />
        <select
          value={formData.programme}
          onChange={(e) => setFormData({ ...formData, programme: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F8C300] focus:ring-2 focus:ring-[#F8C300]/20 outline-none text-gray-700 text-sm transition-all appearance-none bg-white"
        >
          <option value="">Select Programme</option>
          <option value="puc-science">PUC Science</option>
          <option value="puc-commerce">PUC Commerce</option>
          <option value="puc-arts">PUC Arts/Humanities</option>
          <option value="ug">UG Courses</option>
          <option value="pg">PG Courses</option>
          <option value="integrated">Integrated Courses</option>
        </select>
        <textarea
          placeholder="Your Message (optional)"
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#F8C300] focus:ring-2 focus:ring-[#F8C300]/20 outline-none text-gray-700 text-sm transition-all resize-none"
        />
        <button
          type="submit"
          className="w-full bg-[#F8C300] text-[#001C54] py-3.5 rounded-lg font-bold hover:bg-[#dfb82d] transition-all hover:shadow-lg text-sm"
        >
          Submit Enquiry
        </button>
      </form>
      <p className="text-gray-400 text-xs mt-3 text-center">
        We&apos;ll get back to you within 24 hours
      </p>
    </div>
  );

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] bg-gradient-to-r from-[#001C54] to-[#16336e] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-6">
            <p className="text-[#F8C300] font-medium text-lg">
              Welcome to JAIN College
            </p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              JAIN College
              <br />
              <span className="text-[#F8C300]">Global Campus</span>
            </h1>
            <p className="text-xl lg:text-2xl font-light">
              Excellence in Education
            </p>
            <p className="text-white/80 text-lg max-w-xl leading-relaxed">
              Among the top International Residential Schools in Bangalore,
              making young minds resilient, motivated and resourceful since
              1999.
            </p>

            {/* CTA Buttons */}
            <div className="hidden lg:flex flex-wrap gap-4 pt-4">
              <Link
                href="/admissions"
                className="bg-[#F8C300] text-[#001C54] px-8 py-3.5 rounded-full font-semibold hover:bg-[#dfb82d] transition-all hover:shadow-lg"
              >
                Enquire Now!
              </Link>
              <Link
                href="/virtual-tour"
                className="border-2 border-white text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white hover:text-[#001C54] transition-all"
              >
                Virtual Tour
              </Link>
            </div>

            {/* Quick Info Box - desktop only */}
            <div className="hidden lg:block mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 max-w-xl">
              <p className="text-[#F8C300] font-semibold mb-1">
                Admissions Open for 2026-27
              </p>
              <p className="text-white/90 text-sm">
                Join one of the best International Residential Schools in
                Bangalore for{" "}
                <Link
                  href="#"
                  className="text-[#F8C300] underline hover:no-underline"
                >
                  IGCSE
                </Link>{" "}
                |{" "}
                <Link
                  href="#"
                  className="text-[#F8C300] underline hover:no-underline"
                >
                  IBDP
                </Link>{" "}
                |{" "}
                <Link
                  href="#"
                  className="text-[#F8C300] underline hover:no-underline"
                >
                  CBSE
                </Link>
              </p>
            </div>
          </div>

          {/* Enquiry Form - mobile only */}
          <div className="relative lg:hidden">
            <EnquiryForm />
          </div>

          {/* Hero Image Placeholder - desktop only */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#001C54]/20 to-transparent z-10"></div>
              <div className="w-full h-full bg-gradient-to-br from-[#16336e] to-[#001C54] flex items-center justify-center">
                <div className="text-center text-white/50">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm">Campus Image</p>
                  <p className="text-xs mt-1">Students learning together</p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#F8C300] text-[#001C54] px-6 py-4 rounded-xl shadow-xl z-10">
              <p className="text-3xl font-bold">25+</p>
              <p className="text-sm font-medium">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
