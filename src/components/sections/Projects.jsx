// src/components/sections/Projects.jsx
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const featured = [
    {
      title: "Dual Presenter Live Streaming",
      desc: "Real-time dual-stream live streaming app with presenter/participant roles using WebRTC & Mediasoup.",
      tech: ["React.js", "WebRTC", "Mediasoup", "Node.js", "Socket.io", "Redux", "Express.js"],
      link: "https://github.com/Ram-blip/Video_Conferencing",
    },
    {
      title: "BlogVerse",
      desc: "Full-stack blog platform with auth, CRUD, and rich text editing on the MERN stack.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      link: "https://github.com/Ram-blip/Blogverse",
    },
    {
      title: "Optimized Test Suite Generator",
      desc: "Test-suite optimizer for 7 benchmarks using coverage criteria and prioritization techniques.",
      tech: ["Python", "C", "Gcov", "Docker", "Git"],
      link: "https://github.com/ucr-cs206/cs206-project-mutants",
    },
    {
      title: "Chicago Crime Analysis",
      desc: "Interactive dashboards & insights on Chicago crime data (2001–2022) with maps and charts.",
      tech: ["TypeScript", "Next.js", "Leaflet", "PostgreSQL", "REST API"],
      link: "https://github.com/Ram-blip/Chicago-frontend",
    },
    {
      title: "E-Scooter & Student Detection",
      desc: "Real-time object detection for e-scooters & students using YOLOv8 & Roboflow.",
      tech: ["YOLOv8", "Roboflow", "Python"],
      link: "https://github.com/Ram-blip/Scooter-Student-Detection",
    },
    {
      title: "Hydrochemical Analysis",
      desc: "Cross-platform desktop app for hydrochemical data viz & analysis with Electron.",
      tech: ["Python", "Pandas", "Matplotlib", "React.js", "Electron.js", "Node.js"],
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4367090",
    },
    {
      title: "Pac-Man AI",
      desc: "Implemented BFS, DFS, A*, & UCS algorithms to navigate Pac-Man through mazes.",
      tech: ["Python", "Algorithms", "AI"],
      link: "https://github.com/Ram-blip/Pacman-AI",
    },
  ];

  return (
    <section
      id="projects"
      className="
        relative overflow-hidden
        min-h-screen flex items-center justify-center
        py-20 px-4
        bg-gradient-to-br from-gray-900 via-black to-gray-800
        text-gray-100
      "
    >
      {/* Animated Background Circles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/5 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/5 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-emerald-300/5 rounded-full blur-xl animate-pulse delay-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <RevealOnScroll>
          <h2
            className="
              text-3xl md:text-4xl font-bold mb-12 text-center
              bg-gradient-to-r from-emerald-400 to-emerald-200
              bg-clip-text text-transparent
            "
          >
            Featured Projects
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {featured.map((proj) => (
            <RevealOnScroll key={proj.title}>
              <div
                className="
                  flex flex-col h-full
                  bg-white/10 backdrop-blur-sm
                  border border-white/20
                  rounded-xl p-6
                  hover:bg-white/20 transition
                "
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {proj.title}
                </h3>
                <p className="text-gray-300 mb-4 flex-grow">
                  {proj.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        bg-emerald-400/20 text-emerald-200
                        py-1 px-3 rounded-full text-sm
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-auto inline-block text-center
                    bg-emerald-400 text-gray-900 font-medium
                    py-2 px-4 rounded-full
                    hover:bg-emerald-500 transition
                  "
                >
                  View Project
                </a>
              </div>
            </RevealOnScroll>
          ))}
        </div>
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
