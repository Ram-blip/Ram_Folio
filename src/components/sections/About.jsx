import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = [
      "React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Next.js", "TypeScript", "Redux"
    ];
  
    const backendSkills = [
      "Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL", "Firebase", "AWS", "Docker", "SQL", "Flask", "FastAPI"
    ];
  
    return (
      <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
  
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>
  
            {/* Skills Grid with reduced spacing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl p-4 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
  
              <div className="rounded-xl p-4 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>M.S. in Computer Engineering</strong> - University of California, Riverside (2023-2025) (GPA:3.85/4.0)
                </li>
                <li>
                  <strong>B.E. in Computer Science and Engineering</strong> - Anna University (2019-2023) (GPA:3.6/4.0)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-6">
                <div>     
                <h4 className="text-lg font-semibold text-white mb-1">
                  Android App Developer Intern at Exposys Data Labs (Apr 2022 – June 2022)
                  </h4>
                  <p className="text-gray-400 text-base pl-4">
                  Developed and deployed a real-time chat feature in an Android application utilizing Java, Android Studio, and Google Firebase, incorporating functionalities such as private messaging, group chats, and multimedia sharing.
                  </p>
                </div>
  
              </div>
            </div>
          </div>
        </div>
        </RevealOnScroll>
      </section>
    );
  };