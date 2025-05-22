// src/components/sections/Home.jsx
import { RevealOnScroll } from "../RevealOnScroll";
import Profile from "../images/Profile.jpg";


export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black text-gray-100"
    >
      <RevealOnScroll>
        <div className="flex flex-col-reverse md:flex-row items-center px-4 md:px-8 lg:px-16">
          
          {/* ——— Text Block ——— */}
          <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-emerald-500 to-emerald-200 bg-clip-text text-transparent">
              Hi, I’m Ramsundar
            </h1>
            <p className="text-gray-400 text-lg mb-6 max-w-md mx-auto md:mx-0">
              I’m a software developer with a recent Master’s in Computer
              Engineering (Mar 2025) from University of California-Riverside, passionate about building
              real-time, scalable technologies.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              
              {/* View Projects */}
              <a
                href="#projects"
                className="bg-emerald-400 text-white py-3 px-6 rounded font-medium transition-transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                View Projects
              </a>

              {/* Resume (opens Drive link in new tab) */}
              <a
                href="https://drive.google.com/file/d/1_8GWwsva_KYlEXAxqsXgeTZm0J9qNecT/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-b-gray-200 text-emerald-400 py-3 px-6 rounded font-medium transition-transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                Resume
              </a>
            </div>
          </div>

          {/* ——— Image Block ——— */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={Profile}
              alt="Ramsundar"
              className="w-44 h-44 md:w-56 md:h-56 rounded-full object-cover border-4 border-gray-500 shadow-xl transition-transform hover:scale-105"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
