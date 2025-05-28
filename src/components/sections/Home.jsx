// src/components/sections/Home.jsx
import { RevealOnScroll } from "../RevealOnScroll";
import { useState, useEffect } from "react";
import Profile from "../../images/Profile.jpg";

export const Home = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowFullDescription(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="
        relative overflow-hidden
        min-h-screen flex items-center justify-center
        bg-gradient-to-br from-gray-900 via-black to-gray-800
        text-gray-100
        px-4 sm:px-6 lg:px-16
      "
    >
      {/* Animated circles (hidden on very small screens) */}
      <div className="absolute inset-0 hidden sm:block">
        <div className="absolute top-16 left-8 sm:top-20 sm:left-10 w-40 h-40 sm:w-72 sm:h-72 bg-emerald-500/5 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-16 right-8 sm:bottom-20 sm:right-10 w-56 h-56 sm:w-96 sm:h-96 bg-emerald-400/5 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-emerald-300/5 rounded-full blur-xl animate-pulse delay-500" />
      </div>

      <RevealOnScroll>
        <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Profile Card */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000" />
              <img
                src={Profile}
                alt="Ramsundar"
                className="
                  w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80
                  rounded-full object-cover
                  relative z-10
                  transition-transform duration-500 group-hover:scale-105
                "
              />
              <div className="absolute -top-3 -right-3 w-8 h-8 sm:w-10 sm:h-10 bg-emerald-500 rounded-full flex items-center justify-center animate-bounce delay-1000">
                <span className="text-white text-xs sm:text-base">⚛️</span>
              </div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 sm:w-10 sm:h-10 bg-emerald-400 rounded-full flex items-center justify-center animate-bounce delay-500">
                <span className="text-white text-xs sm:text-base">💻</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 text-center md:text-left">
            {/* Title */}
            <div>
              <div className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs sm:text-sm font-medium mb-2 sm:mb-4">
                👋 Welcome to my portfolio
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
                  Hi, I’m
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
                  Ramsundar
                </span>
              </h1>
            </div>

            {/* Dynamic Description */}
            <div className="min-h-[120px] relative">
              <div
                className={`
                  absolute inset-0 transition-all duration-1000
                  ${showFullDescription
                    ? "opacity-0 translate-y-4"
                    : "opacity-100 translate-y-0"}
                `}
              >
                <div className="text-xl sm:text-2xl font-semibold text-gray-300 mb-2 sm:mb-3">
                  Software Engineer
                </div>
                <div className="text-lg text-emerald-400 font-medium">
                  Full Stack Developer ║ Backend Developer ║ AI Enthusiast
                </div>
              </div>
              <div
                className={`
                  absolute inset-0 transition-all duration-1000
                  ${showFullDescription
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4"}
                `}
              >
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  I’m a software developer with a recent Master’s in Computer
                  Engineering (Mar 2025) from UC Riverside, passionate about building
                  real-time, scalable technologies that make a difference.
                </p>
              </div>
            </div>

            {/* Contact & Buttons */}
            <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4 justify-center md:justify-start">
              <a href="mailto:rkone003@ucr.edu" className="w-full sm:w-auto">
                <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl px-3 py-2 sm:px-4 sm:py-2 hover:border-emerald-500/50 hover:bg-gray-800/70 transition">
                  <svg
                    className="w-5 h-5 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-300 text-sm sm:text-base">
                    rkone003@ucr.edu
                  </span>
                </div>
              </a>
              <a href="tel:+19512033823" className="w-full sm:w-auto">
                <div className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl px-3 py-2 sm:px-4 sm:py-2 hover:border-emerald-500/50 hover:bg-gray-800/70 transition">
                  <svg
                    className="w-5 h-5 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-gray-300 text-sm sm:text-base">
                    +1 (951) 203-3823
                  </span>
                </div>
              </a>
            </div>

            <div className="pt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="
                  w-full sm:w-auto inline-flex items-center justify-center
                  px-6 py-3 sm:px-8 sm:py-4
                  bg-emerald-500 text-white font-semibold rounded-xl
                  transition hover:bg-emerald-400 hover:shadow-2xl hover:shadow-emerald-500/25 hover:-translate-y-1
                "
              >
                View My Work
              </a>
              <a
                href="https://drive.google.com/file/d/1_8GWwsva_KYlEXAxqsXgeTZm0J9qNecT/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-full sm:w-auto inline-flex items-center justify-center
                  px-6 py-3 sm:px-8 sm:py-4
                  border-2 border-emerald-500/50 text-emerald-400 font-semibold rounded-xl
                  transition hover:border-emerald-400 hover:bg-emerald-500/10 hover:-translate-y-1
                "
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
