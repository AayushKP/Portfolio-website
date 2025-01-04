import React from "react";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";

function HomePage() {
  return (
    <div className="min-h-screen min-w-screen overflow-hidden bg-[#000000] flex flex-col px-10 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ada5a52b_1px,transparent_1px),linear-gradient(to_bottom,#ada5a52b_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_40%_at_50%_0%,#000_70%,transparent_100%)] md:[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Main content wrapper */}
      <div className="h-full w-full relative z-10">
        {/* Navbar */}
        <div className="fixed left-1/2 transform -translate-x-1/2 z-20 flex justify-center items-center mt-8 md:mt-10">
          <div className="rounded-full bg-gradient-to-r from-cyan-700 via-purple-500 to-red-500 p-[2px]">
            <div className="inline-flex bg-[#0c0c0c] rounded-full z-10">
              <Navbar />
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="flex-1 flex flex-col items-center justify-center gap-3 md:gap-4 mt-40 md:mt-48 px-4 sm:px-10">
          <h1 className="font-sans lg:text-7xl sm:text-5xl text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-red-500 whitespace-nowrap drop-shadow-lg z-10 text-center">
            HI! THIS IS AAYUSH KASHYAP
          </h1>
          <h2 className="font-joan text-xl lg:text-4xl sm:text-2xl text-center text-white">
            A Full Stack Web Developer{" "}
            <span className="hidden md:inline">from India</span>
          </h2>
          <p className="md:text-lg text-sm text-center text-white">
            UI-UX | Frontend | Backend{" "}
            <span className="hidden md:inline">Engineer</span>
          </p>

          <div className="cursor-pointer bg-[#0f0f11e9] font-sans mt-4 rounded-xl p-3 text-[#8a8787] whitespace-nowrap transition-all duration-300 ease-in-out shadow-[0_4px_6px_-1px_rgba(88,199,250,1),0_5px_8px_rgba(88,199,250,0.3)] hover:shadow-[0_10px_15px_-3px_rgba(88,199,250,1),0_4px_6px_-2px_rgba(88,199,250,1)] sm:p-4 text-xs sm:text-base">
            Download CV
          </div>

          <div className="md:mt-5">
            <Skills />
          </div>

          {/* About Me */}
          <div className="w-full max-w-2xl pt-6 pb-8 px-6 md:px-16 mx-auto bg-gradient-to-r from-black/30 via-[#9d58bd51] to-black/40 backdrop-blur-xl shadow-lg rounded-xl">
            <h2 className="text-sm md:text-3xl font-bold text-white mb-4 text-center">
              ABOUT ME
            </h2>
            <p className="md:text-md text-sm text-white font-sans text-center">
              Hi, I'm a passionate developer with experience in creating
              intuitive and dynamic web applications.{" "}
              <span className="hidden md:inline">
                I love working with modern web technologies and bringing ideas
                to life.
              </span>
            </p>
          </div>

          {/* Projects */}
          <div className="w-full max-w-lg mt-10 flex justify-center items-center bg-gradient-to-r from-black/30 via-cyan-500/50 to-black/40 backdrop-blur-xl shadow-lg rounded-xl">
            <h3 className="text-white text-3xl font-bold py-4">PROJECTS</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
