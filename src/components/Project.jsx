import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function Project({ title, description, imageUrl, onClick }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensure animation runs only once when it enters the view
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  return (
    <motion.div
      ref={ref}
      className={`w-[18rem] lg:w-[22rem] h-48 lg:h-64 bg-cover bg-center relative rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 ease-in-out custom-shadow custom-shadow-hover ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      onClick={onClick}
      whileHover={{
        scale: 1.05,
        translateY: -5,
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {/* Image Background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 group-hover:bg-black/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm truncate">{description}</p>
      </div>
    </motion.div>
  );
}

function ProjectsGrid() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "ComuniQ",
      description:
        "ComuniQ is a real-time chat application crafted for seamless communication through direct messages and group channels.",
      imageUrl:
        "https://res.cloudinary.com/aayush5183/image/upload/v1736045860/ComuniQ_guwqza.png",
      skills: [
        "React",
        "Tailwind",
        "Zustand",
        "Node.js",
        "Express",
        "Multer",
        "MongoDB",
        "Socket.io",
        "Cloudinary",
      ],
      live: "https://chat-comuniq.vercel.app/",
      github: "https://github.com/AayushKP/ComuniQ",
    },
    {
      title: "Postly",
      description:
        "Postly is a scalable cloud-based blog platform built with Hono.js, Cloudflare Workers, React, and TypeScript, offering serverless performance and real-time updates.",
      imageUrl:
        "https://res.cloudinary.com/aayush5183/image/upload/v1736048174/Postly_nizjwu.png",
      skills: [
        "React",
        "Tailwind",
        "Typescript",
        "Hono.js",
        "Prisma",
        "PostgresSQL",
        "Cloudflare workers",
      ],
      live: "https://postly-blog-go.vercel.app/",
      github: "https://github.com/AayushKP/Postly",
    },
    {
      title: "LinkedIn",
      description:
        "A fully functional LinkedIn clone leverages Mailtrap simulating email communications such as welcome emails, connection requests, and notifications during development.",
      imageUrl:
        "https://res.cloudinary.com/aayush5183/image/upload/v1736047720/Linnkedin_lruodn.png",
      skills: [
        "React",
        "Tailwind",
        "Node.js",
        "Express",
        "Multer",
        "MongoDB",
        "Cloudinary",
        "Mailtrap",
      ],
      live: "",
      github: "https://github.com/AayushKP/LinkedIn-Clone",
    },
    {
      title: "Dice-Game",
      description:
        "Dice-Game is a simple React game where users select a number and roll a dice, winning if the rolled number matches the selected one",
      imageUrl:
        "https://res.cloudinary.com/aayush5183/image/upload/v1736049271/Dice_Game_qwxcdv.png",
      skills: ["React", "Tailwind"],
      live: "",
      github: "https://github.com/AayushKP/Dice-Game-React",
    },
    {
      title: "ToDOO",
      description:
        "ToDOO is a task management app built with React.js and Tailwind CSS, using LocalStorage to save and persist tasks across sessions.",
      imageUrl:
        "https://res.cloudinary.com/aayush5183/image/upload/v1736057269/d29eccd0-1f28-472c-bf5f-ed0679ab2f90.png",
      skills: ["React", "Tailwind"],
      live: "https://keeper-todo.vercel.app/",
      github: "https://github.com/AayushKP/Todo",
    },
    {
      title: "Upload-IT",
      description:
        "Upload-IT is a file upload platform built with React.js, Tailwind CSS, and Multer that allows users to upload and manage files, while automatically applying a grayscale effect to images upon upload",
      imageUrl:
        "https://res.cloudinary.com/aayush5183/image/upload/v1736056978/af2db867-165a-47cf-bed9-ee9a1718019a.png",
      skills: ["React", "Tailwind", "Node.js", "Express", "Multer", "MongoDB"],
      live: "",
      github: "https://github.com/AayushKP/Upload-IT",
    },
  ];

  const openDialog = (project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="w-full px-4">
      {/* Projects Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            onClick={() => openDialog(project)}
          />
        ))}
      </div>

      <AnimatePresence>
        {isDialogOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Blur */}
            <motion.div
              className="absolute inset-0 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            ></motion.div>

            {/* Dialog Box */}
            <motion.div
              className="relative bg-gradient-to-r from-neutral-900 via-black to-neutral-900 w-[90%] sm:max-w-md md:max-w-md rounded-3xl shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <button
                className="absolute top-4 right-5 bg-black/30 w-10 h-10 flex justify-center items-center text-white p-2 rounded-full"
                onClick={closeDialog}
              >
                <RxCross1 />
              </button>

              {/* Image */}
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="w-full h-48 md:h-64 object-cover rounded-t-3xl"
              />

              {/* Content Section */}
              <div className="relative p-8 flex flex-col justify-end h-full text-gray-200">
                {/* External Link and GitHub Icons */}
                <div className="flex justify-start gap-6 mb-4">
                  {selectedProject.live && (
                    <motion.a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex justify-center items-center bg-gray-300 rounded-full text-black cursor-pointer"
                      whileHover={{ scale: 1.1, translateY: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaExternalLinkAlt className="text-xl" />
                    </motion.a>
                  )}

                  {selectedProject.github && (
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex justify-center items-center bg-gray-300 rounded-full text-black cursor-pointer"
                      whileHover={{ scale: 1.1, translateY: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaGithub className="text-xl" />
                    </motion.a>
                  )}
                </div>

                {/* Skills */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {selectedProject.skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full cursor-pointer"
                      whileHover={{ scale: 1.1, translateY: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold mb-2">
                  {selectedProject.title}
                </h2>

                {/* Description */}
                <p>{selectedProject.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProjectsGrid;
