const LegacySection = () => {
  const milestones = [
    {
      year: "1990",
      title: "Foundation",
      description:
        "JAIN College was founded by Dr. Chenraj Roychand with a vision to create a premier educational institution that nurtures young minds for the challenges of tomorrow.",
    },
    {
      year: "2000",
      title: "Expansion",
      description:
        "Expanded to multiple campuses across Bangalore, providing quality education to thousands of students.",
    },
    {
      year: "2010",
      title: "Academic Excellence",
      description:
        "Achieved remarkable success with students consistently scoring top ranks in PUC board examinations.",
    },
    {
      year: "2015",
      title: "Excellence Award",
      description:
        "Recognized as one of the top PU Colleges in India for holistic education and outstanding academic results.",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description:
        "Successfully transitioned to hybrid learning model, demonstrating adaptability and commitment to uninterrupted education.",
    },
    {
      year: "2025",
      title: "35 Years of Excellence",
      description:
        "Celebrating over three decades of shaping future leaders with alumni making an impact across various fields worldwide.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#F8C300] font-semibold mb-2">
            Milestones of Achievement
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#001C54] mb-4">
            JAIN College Legacy of Excellence
          </h2>
          <div className="w-24 h-1 bg-[#F8C300] mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-[#001C54] to-[#16336e]">
                {/* Year Badge */}
                <div className="absolute top-4 left-4 bg-[#F8C300] text-[#001C54] px-4 py-1 rounded-full font-bold text-sm">
                  {milestone.year}
                </div>

                {/* Placeholder */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-white/40">
                    <svg
                      className="w-16 h-16 mx-auto mb-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-xs">Historical Image</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#001C54] mb-3">
                  {milestone.year} - {milestone.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegacySection;
