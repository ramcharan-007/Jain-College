import Link from "next/link";

const ProgramsSection = () => {
  const programs = [
    {
      title: "IGCSE",
      subtitle: "Cambridge International",
      description:
        "International General Certificate of Secondary Education - A globally recognized qualification for students aged 14-16.",
      features: ["Grades 9-10", "Cambridge Assessment", "Global Recognition"],
      color: "bg-[#001C54]",
    },
    {
      title: "IBDP",
      subtitle: "International Baccalaureate",
      description:
        "A rigorous pre-university course preparing students for success at university and life beyond.",
      features: ["Grades 11-12", "Diploma Programme", "World Schools"],
      color: "bg-[#16336e]",
    },
    {
      title: "CBSE",
      subtitle: "Central Board of Secondary Education",
      description:
        "National curriculum recognized across India with comprehensive academic foundation.",
      features: ["Grades 6-12", "National Board", "Science & Commerce"],
      color: "bg-[#001C54]",
    },
    {
      title: "A-ICE",
      subtitle: "Cambridge Advanced Level",
      description:
        "Advanced International Certificate of Education for students aiming for top universities.",
      features: ["Grades 11-12", "AS & A Levels", "University Prep"],
      color: "bg-[#16336e]",
    },
  ];

  return (
    <section className="py-20 bg-[#F8C300]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#001C54] font-medium mb-2">Academic Excellence</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#001C54] mb-4">
            Our Academic Programs
          </h2>
          <div className="w-24 h-1 bg-[#001C54] mx-auto rounded-full"></div>
          <p className="mt-6 text-[#001C54]/80 max-w-2xl mx-auto">
            We offer a variety of internationally recognized curricula designed
            to prepare students for success in a rapidly changing global
            environment.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`${program.color} rounded-2xl p-6 text-white hover:shadow-2xl transition-all hover:-translate-y-2 group`}
            >
              {/* Program Header */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-1">{program.title}</h3>
                <p className="text-[#F8C300] text-sm font-medium">
                  {program.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-white/80 text-sm mb-6 min-h-[80px]">
                {program.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <svg
                      className="w-4 h-4 text-[#F8C300]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={`/academics/${program.title.toLowerCase()}`}
                className="inline-flex items-center gap-2 text-[#F8C300] font-semibold group-hover:underline"
              >
                Learn More
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
