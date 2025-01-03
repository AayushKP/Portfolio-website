import React from "react";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";

function HomePage() {
  return (
    <div className="min-h-screen min-w-screen overflow-x-hidden bg-[#000000] flex flex-col px-10 relative">
      {/* Background pattern with proper z-index */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#9a98982b_1px,transparent_1px),linear-gradient(to_bottom,#aea5a524_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Main content wrapper */}
      <div className="h-full w-full relative z-10">
        {/* Navbar */}
        <div className="flex justify-center item-center mt-9 sticky md:mt-10">
          <div className="rounded-full bg-gradient-to-r from-cyan-700 via-purple-500 to-red-500 p-[2px]">
            <div className="inline-flex bg-[#0c0c0c] rounded-full z-10">
              <Navbar />
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="sm:pt-20 pt-16 flex items-center lg:justify-center sm:gap-4 gap-2 flex-col">
          <div className="font-sans lg:text-7xl sm:text-5xl text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#f1f1f1] via-[#e8e8e8] to-[#d1d1d1] whitespace-nowrap drop-shadow-lg z-10">
            HI ! THIS IS AAYUSH KASHYAP
          </div>

          <div className="font-joan text-md lg:text-4xl sm:text-2xl text-white">
            A Full Stack Web Developer from India
          </div>
          <div className="flex-wrap md:text-lg text-sm  text-white">
            UI-UX | Frontend | Backend Engineer
          </div>

          <div className="cursor-pointer bg-[#0f0f11e9] font-sans mt-4 rounded-xl p-3 text-[#8a8787] whitespace-nowrap transition-all duration-300 ease-in-out shadow-[0_4px_6px_-1px_rgba(88,199,250,1),0_5px_8px_rgba(88,199,250,0.3)] hover:shadow-[0_10px_15px_-3px_rgba(88,199,250,1),0_4px_6px_-2px_rgba(88,199,250,1)] sm:p-4 text-xs sm:text-base">
            Download CV
          </div>

          <div className="mt-5">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
