import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] bg-gradient-to-r from-[#001C54] to-[#16336e] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
            <div className="flex flex-wrap gap-4 pt-4">
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

            {/* Quick Info Box */}
            <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 max-w-xl">
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

          {/* Hero Image Placeholder */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder Image - Replace with actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#001C54]/20 to-transparent z-10"></div>
              <div className="w-full h-full bg-gradient-to-br from-[#16336e] to-[#001C54] flex items-center justify-center">
                <div className="text-center text-white/50">
                  <svg
                    className="w-24 h-24 mx-auto mb-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm">Hero Image Placeholder</p>
                  <p className="text-xs mt-1">Students learning together</p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#F8C300] text-[#001C54] px-6 py-4 rounded-xl shadow-xl">
              <p className="text-3xl font-bold">25+</p>
              <p className="text-sm font-medium">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
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
