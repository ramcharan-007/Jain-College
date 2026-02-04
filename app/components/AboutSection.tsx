import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#001C54] mb-4">
            About Jain College Global Campus
          </h2>
          <div className="w-24 h-1 bg-[#F8C300] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="relative">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
              {/* Yellow accent border */}
              <div className="absolute top-4 left-4 w-full h-full bg-[#F8C300] rounded-2xl -z-10"></div>

              {/* Placeholder Image */}
              <div className="w-full h-full bg-gradient-to-br from-[#16336e] to-[#001C54] flex items-center justify-center">
                <div className="text-center text-white/50">
                  <svg
                    className="w-20 h-20 mx-auto mb-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm">Campus Image Placeholder</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded by{" "}
              <span className="font-semibold text-[#001C54]">
                Dr. Chenraj Roychand in 1999
              </span>
              , Jain Collge Global Campus is rooted in tradition
              while making the student community thrive with the ever-changing
              world and grow within to create a global impact.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              As one of the top PU Colleges in Bangalore, JAIN College Global
              Campus has a real sense of responsibility to making young minds
              resilient, motivated and resourceful.
            </p>

            {/* Highlight Box */}
            <div className="bg-[#F8C300]/10 border-l-4 border-[#F8C300] p-6 rounded-r-lg">
              <p className="text-[#001C54] font-medium italic">
                "We believe in nurturing every aspect of a student&apos;s
                growth. Our programs extend beyond textbooks, making us truly a
                global school."
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#F8C300] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-[#001C54]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-[#001C54] font-medium">
                  Holistic Development
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#F8C300] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-[#001C54]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-[#001C54] font-medium">
                  World-Class Faculty
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#F8C300] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-[#001C54]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-[#001C54] font-medium">
                  International Curriculum
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#F8C300] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-[#001C54]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-[#001C54] font-medium">
                  State-of-Art Infrastructure
                </p>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#001C54] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#16336e] transition-colors mt-4"
            >
              Read More
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
