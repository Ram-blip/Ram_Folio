import { RevealOnScroll } from '../RevealOnScroll';

export const Projects = () => {
    const featured = [
      {
        title: 'Dual Presenter Live Streaming',
        desc: 'Real-time dual-stream live streaming application with presenter/participant roles using WebRTC and Mediasoup.',
        tech: ['React Js', 'WebRTC', 'Mediasoup', 'Node.js', 'Socket.io', 'Redux', 'Express Js'],
        link: '#'
      },
      {
        title: 'Blog App',
        desc: 'Full-stack blog platform with user authentication, CRUD features, and rich text editing built on the MERN stack.',
        tech: ['MongoDB', 'Express', 'React', 'Node.js'],
        link: '#'
      },
      {
        title: 'Optimized Test Suite Generator',
        desc: 'Implemented a comprehensive test suite optimization system for 7 benchmark programs using statement and branch coverage criteria combined with random, total and additional prioritization techniques.',
        tech: ['Python', 'C', 'Gcov', 'Docker', 'Git'],
        link: '#'
      },
      {
        title: 'Chicago Crime Analysis',
        desc: 'Comprehensive analysis of Chicago crime data (2001–2022) with interactive dashboards and insights.',
        tech: ['TypeScript', 'Next.js', 'Leaflet', 'PostgreSQL', 'RestAPI'],
        link: 'https://github.com/Ram-blip/Chicago-frontend'
        },
      {
        title: 'E-Scooter & Student Detection',
        desc: 'Real-time object detection system for monitoring e-scooters and students using YOLOv8 and Roboflow.',
        tech: ['YOLOv8', 'Roboflow', 'Python'],
        link: '#'
      },
      {
        title: 'Hydrochemical Analysis',
        desc: 'Developed a cross-platform desktop app with React and Electron.js for interactive hydrochemical data visualization and analysis.',
        tech: ['Python', 'Pandas', 'Matplotlib', 'React Js', 'Electron.js', 'Node.js', 'Express Js','HTML/CSS'],
        link: '#'
      },
      {
        title: 'Pac-Man Project',
        desc: 'Implemented foundational AI algorithms - BFS, DFS, A*, and Uniform Cost Search - to navigate Pacman through mazes, reach destinations, and consume all available food items',
        tech: ['Python', 'Algorithms', 'AI'],
        link: '#'
      },
    ];
  
    return (
      <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((proj, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all"
              >
                <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                <p className="text-gray-400 mb-4">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={proj.link}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        </RevealOnScroll>
      </section>
    );
  };
  