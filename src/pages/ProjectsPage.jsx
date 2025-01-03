import React from "react";
import Navbar from "../components/Navbar";

function ProjectsPage() {
  const projects = [
    {
      name: "ComuniQ",
      description:
        "A Real-Time Chat Application allowing communication in real time, media sharing, and channel creation.",
      techStack: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Socket.js",
        "Zustand",
        "Express.js",
      ],
      image: "/ComuniQ.png",
      link: "https://github.com/AayushKP/ComuniQ",
    },
    {
      name: "Postly",
      description:
        "A modern blog application using React.js, Hono, Prisma, PostgreSQL, and Cloudflare Workers.",
      techStack: [
        "React.js",
        "Tailwind CSS",
        "Cloudflare",
        "PostgreSQL",
        "Prisma",
        "Hono",
      ],
      image: "/Postly.png",
      link: "https://github.com/AayushKP/Postly",
    },
    {
      name: "LinkedIn Clone",
      description:
        "A LinkedIn clone with features like profile creation, connections, notifications, and text updates.",
      techStack: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Cloudinary",
        "Mailtrap",
        "Express.js",
      ],
      image: "/Linkedin-l.png",
      link: "https://github.com/AayushKP/Linkedin-clone",
    },
  ];

  const techstacks = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Recoil",
    "Zustand",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "Hono",
    "Cloudflare",
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#101010] flex flex-col px-10">
      <div className="mt-5 md:mt-10">
        <Navbar />
      </div>
      <div className="mt-10 sm:px-10 flex flex-1 flex-col lg:flex-row justify-center gap-10 items-center sm:justify-between w-full ">
        {/* Projects Section */}
        <div className="flex flex-1 flex-wrap gap-10 justify-center lg:w-[90%] mb-8 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full h-auto bg-[#ffffff2c] flex flex-col lg:flex-row gap-5 rounded-md p-5 group hover:scale-105 hover:-translate-y-2 transition duration-300 "
            >
              {/* Project Image */}
              <div className="flex-shrink-0 flex justify-center lg:items-center">
                <img
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  className="rounded-lg w-full max-w-[13rem]"
                />
              </div>

              {/* Project Info */}
              <div className="flex flex-col gap-3 text-center lg:text-left lg:items-start">
                <div className="text-4xl text-white font-jaro">
                  {project.name}
                </div>
                <div className="text-white">{project.description}</div>

                {/* Tech Stack and Link */}
                <div className="flex flex-wrap gap-2 mt-3 justify-center lg:justify-start">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-500 text-white text-sm px-3 py-1 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-400 text-white text-sm font-bold px-3 py-1 rounded-lg transform transition-transform hover:-translate-y-2"
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-[35%] bg-[#ffffff1a] p-8 rounded-lg overflow-y-auto border self-start border-gray-700 mt-5 lg:mt-0 group hover:scale-105 hover:-translate-y-2 mb-8 transition duration-300 ">
          <div className="text-3xl text-white font-jaro mb-5 text-center">
            Tech Stack
          </div>
          <div className="flex flex-wrap gap-3 justify-center items-center ">
            {techstacks.map((tech, idx) => (
              <span
                key={idx}
                className="bg-blue-500 text-white text-sm px-3 py-1 rounded-lg group hover:scale-105 hover:-translate-y-2 transition duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
