import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-16 bg-[#F8C300]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#001C54] mb-4">
              Ready to Join Jain College Global Campus Family?
            </h2>
            <p className="text-[#001C54]/80 text-lg max-w-xl">
              Take the first step towards a world-class education. Admissions
              are open for the academic year 2026-27. Limited seats available.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
            <Link
              href="/admissions"
              className="bg-[#001C54] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#16336e] transition-colors shadow-lg"
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="border-2 border-[#001C54] text-[#001C54] px-8 py-4 rounded-full font-semibold hover:bg-[#001C54] hover:text-white transition-colors"
            >
              Schedule a Visit
            </Link>
            <Link
              href="/brochure"
              className="border-2 border-[#001C54] text-[#001C54] px-8 py-4 rounded-full font-semibold hover:bg-[#001C54] hover:text-white transition-colors flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Brochure
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
