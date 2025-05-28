import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Next.js",
    "TypeScript",
    "Redux",
  ];
  const backendSkills = [
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "REST APIs",
    "GraphQL",
    "Firebase",
    "AWS",
    "Docker",
    "SQL",
    "Flask",
    "FastAPI",
  ];
  const allSkills = [...frontendSkills, ...backendSkills];

  return (
    <section
      id="about"
      className="
        relative overflow-hidden
        min-h-screen flex items-center justify-center
        py-20 px-4
        bg-gradient-to-br from-gray-900 via-black to-gray-800
        text-gray-100
      "
    >
      {/* animated circles exactly as in Home */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/5 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-emerald-300/5 rounded-full blur-xl animate-pulse delay-500" />
      </div>

      {/* your content, now above the circles */}
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2
              className="
                text-3xl md:text-4xl font-bold mb-4
                bg-gradient-to-r from-emerald-500 to-emerald-200
                bg-clip-text text-transparent
              "
            >
              About Me
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Passionate software developer focused on building scalable web
              applications and creating innovative solutions that make a
              difference.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <RevealOnScroll>
            <div
              className="
                bg-white/10 backdrop-blur-sm border border-white/20
                rounded-xl p-6 hover:bg-white/20 transition-all
              "
            >
              <h3 className="text-xl font-bold mb-4 text-emerald-400 flex items-center">
                <span className="mr-2">🎓</span> Education
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">M.S. Computer Engineering</h4>
                  <p className="text-gray-400 text-sm">
                    UC Riverside • 2023–2025 • GPA: 3.85
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">B.E. Computer Science</h4>
                  <p className="text-gray-400 text-sm">
                    Anna University • 2019–2023 • GPA: 3.6
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div
              className="
                bg-white/10 backdrop-blur-sm border border-white/20
                rounded-xl p-6 hover:bg-white/20 transition-all
              "
            >
              <h3 className="text-xl font-bold mb-4 text-emerald-400 flex items-center">
                <span className="mr-2">💼</span> Experience
              </h3>
              <div>
                <h4 className="font-semibold">Android Developer Intern</h4>
                <p className="text-gray-400 text-sm mb-2">
                  Exposys Data Labs • Apr–June 2022
                </p>
                <p className="text-gray-300 text-sm">
                  Built real-time chat features with Java, Android Studio, and
                  Firebase including private messaging and multimedia sharing.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll>
          <div
            className="
              bg-white/10 backdrop-blur-sm border border-white/20
              rounded-xl p-6 hover:bg-white/20 transition-all
            "
          >
            <h3 className="text-2xl font-semibold mb-4 text-emerald-400 flex items-center">
              <span className="mr-2">🛠️</span> Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {allSkills.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-emerald-400/20 text-emerald-200 py-1 px-3 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <style jsx>{`
        .reveal.visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};
