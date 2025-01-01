import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  const images = [
    "/img1.png",
    "/img2.png",
    "/img3.png",
    "/img4.png",
    "/img5.png",
    "/img6.png",
    "/img7.png",
    "/img8.png",
  ];

  return (
    <div className="h-screen w-screen relative">
      <div className="h-full flex flex-col">
        {/* Top Section (Blue) */}
        <div className="h-2/3 w-full bg-[#262CBA]">
          <Navbar />
          <div className="h-full w-full flex flex-col mt-20">
            <p className="text-4xl md:text-6xl lg:text-7xl ml-5 mt-5 md:ml-16 md:mt-16 text-white font-jaro">
              HI THERE!
            </p>
            <p className="text-4xl md:text-6xl lg:text-7xl ml-5 md:ml-16 text-white font-jaro">
              THIS IS{" "}
              <span className="text-5xl md:text-7xl lg:text-8xl font-jaro">
                AYUSH KASHYAP
              </span>
            </p>
            <p className="text-4xl mt-4 ml-5 md:ml-16 text-white font-serif">
              Full Stack Engineer from INDIA
            </p>
            <button className="mt-10 ml-16 w-32 bg-[white] h-12 text-2xl font-jersey rounded-lg hover:bg-slate-400 hover:text-white">
              RESUME
            </button>
          </div>
        </div>

        {/* Bottom Section (Black) */}
        <div className="h-1/3 w-full bg-[#101010] flex flex-col">
          <div className="flex flex-col ml-16 w-3/5 h-full">
            <p className="mt-12 text-white text-3xl font-jaro w-full">
              WHY HIRE ME?
            </p>
            <p className="mt-4 text-white text-2xl font-jersey w-full">
              Simple, I focus on delivering quality work that actually solves
              problems, not just quick fixes. If you want someone reliable who
              ensures the job gets done—and gets done well—I’m your guy!
            </p>
          </div>
        </div>

        {/* Central Image and Rotating Images */}
        <div className="absolute right-[1%] top-[66.67%] transform -translate-x-1/2 -translate-y-1/2">
          {/* Central Image */}
          <img
            src="/img.png"
            alt="Central Image"
            className="w-[160px] md:w-[200px] lg:w-[240px] h-auto relative z-10"
          />

          {/* Rotating Images */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[300px] h-[300px] relative rotate-animation">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`rotating-img-${index}`}
                  className="absolute w-[50px] h-[50px] rounded-full"
                  style={{
                    top: `calc(50% - 25px)`,
                    left: `calc(50% - 25px)`,
                    transform: `rotate(${
                      index * (360 / images.length)
                    }deg) translate(150px) rotate(-${
                      index * (360 / images.length)
                    }deg)`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="h-full w-full bg-[#101010] flex flex-col px-10 ">
      {/* Navbar */}
      <div className="w-full  h-20">
        <Navbar />
      </div>

      {/* Content Section */}

      <div className="mt-24 flex flex-1 justify-evenly">
        <div className="w-[60%] flex flex-col  justify-between gap-4">
          <div className="h-1/3 bg-[#ffffff2c] flex gap-5 flex-row rounded-md p-5 group hover:transform hover:transition-transform hover:scale-105 hover:translate-y-[-5px]">
            <div className=" h-full rounded-lg ">
              <img
                src="/ComuniQ.png"
                alt=""
                className="h-auto rounded-lg max-w-52"
              />
            </div>
            <div className="w-full flex flex-col gap-3">
              <div className="text-4xl text-white font-jaro ">
                ComuniQ : A Real Time Chat Application
              </div>
              <div className="text-white">
                Comuniq is a real time chat application which allows users to
                communicate in real time,media sharing and channel creation.
              </div>
              <div className="flex gap-2">
                <span className="bg-blue-500 font-sans text-white p-1 rounded-lg">
                  React.js{" "}
                </span>
                <span className="bg-blue-500 font-sans text-white p-1 rounded-lg">
                  Tailwind CSS{" "}
                </span>
                <span className="bg-blue-500 font-sans text-white p-1 rounded-lg">
                  Node.js
                </span>
                <span className="bg-blue-500 font-sans text-white p-1 rounded-lg">
                  MongoDB
                </span>
                <span className="bg-blue-500 font-sans text-white p-1 rounded-lg">
                  Socket.js
                </span>
                <span className="bg-blue-500 font-sans text-white p-1 rounded-lg">
                  Zustand
                </span>
                <span className="bg-blue-500 font-sans text-white p-1 rounded-lg">
                  Express.js
                </span>

                <span className="bg-yellow-400 cursor-pointer text-white p-1 px-2 font-bold rounded-lg transform transition-transform hover:-translate-y-2">
                  <Link to="https://github.com/AayushKP/ComuniQ">Link</Link>
                </span>
              </div>
            </div>
          </div>

          <div className="h-1/3 bg-[#ffffff2c] flex gap-5 flex-row rounded-md p-5 group hover:transform hover:transition-transform hover:scale-105 hover:translate-y-[-5px]">
            <div className=" h-full rounded-lg ">
              <img src="/Postly.png" alt="" className=" rounded-lg max-w-52" />
            </div>
            <div className="w-full flex flex-col gap-3">
              <div className="text-4xl text-white font-jaro ">
                Postly : The Blog Application
              </div>
              <div className="text-white">
                Postly is a modern blog application built with React.js, Hono on
                Cloudflare Workers for edge computing, Prisma as the ORM, and
                PostgreSQL for data storage, ensuring high performance and
                scalability.
              </div>
              <div className="flex gap-2">
                <span className="bg-blue-500 font-sans text-white p-1 rounded-lg">
                  React.js{" "}
                </span>
                <span className="bg-blue-500 font-sans text-white p-1 rounded-lg">
                  Tailwind CSS{" "}
                </span>
                <span className="bg-blue-500 font-sans text-white p-1 rounded-lg">
                  Cloudflare
                </span>
                <span className="bg-blue-500 font-sans text-white p-1 rounded-lg">
                  Workers
                </span>
                <span className="bg-blue-500 font-sans text-white p-1 rounded-lg">
                  Postgresql
                </span>
                <span className="bg-blue-500 font-sans text-white p-1 rounded-lg">
                  Hono
                </span>
                <span className="bg-blue-500 font-sans text-white p-1 rounded-lg">
                  Prisma
                </span>

                <span className="bg-yellow-400 cursor-pointer text-white p-1 px-2 font-bold rounded-lg transform transition-transform hover:-translate-y-2">
                  <Link to="https://github.com/AayushKP/Postly">Link</Link>
                </span>
              </div>
            </div>
          </div>

          <div className="h-1/3 bg-[#ffffff2c] flex gap-5 flex-row rounded-md p-5 group hover:transform hover:transition-transform hover:scale-105 hover:translate-y-[-5px]">
            <div className=" h-full rounded-lg ">
              <img
                src="/ComuniQ.png"
                alt=""
                className="h-full rounded-lg max-w-52"
              />
            </div>
            <div className="w-full flex flex-col gap-3">
              <div className="text-4xl text-white font-jaro ">
                ComuniQ : A Real Time Chat Application
              </div>
              <div className="text-white">
                Comuniq is a real time chat application which allows users to
                communicate in real time,media sharing and channel creation.
              </div>
              <div className="flex gap-2">
                <span className="bg-blue-500 font-sans text-white p-1 rounded-lg">
                  React.js{" "}
                </span>
                <span className="bg-blue-500 font-sans text-white p-1 rounded-lg">
                  Tailwind CSS{" "}
                </span>
                <span className="bg-blue-500 font-sans text-white p-1 rounded-lg">
                  Node.js
                </span>
                <span className="bg-blue-500 font-sans text-white p-1 rounded-lg">
                  MongoDB
                </span>
                <span className="bg-blue-500 font-sans text-white p-1 rounded-lg">
                  Socket.js
                </span>
                <span className="bg-blue-500 font-sans text-white p-1 rounded-lg">
                  Zustand
                </span>
                <span className="bg-blue-500 font-sans text-white p-1 rounded-lg">
                  Express.js
                </span>

                <span className="bg-yellow-400 cursor-pointer text-white p-1 px-2 font-bold rounded-lg transform transition-transform hover:-translate-y-2">
                  <Link to="https://github.com/AayushKP/ComuniQ">Link</Link>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[30%] bg-[#ffffff2c] rounded-md flex-col flex px-7 py-7">
          <div className="font-jaro text-white text-6xl text-center">
            SKIILS
          </div>
          <div className="mt-5 w-full  flex flex-row gap-5 justify-evenly">
            <div className="w-1/4 h-14 text-center flex items-center transform transition-transform hover:-translate-y-2 justify-center text-2xl rounded-full bg-[#262CBA] cursor-pointer  font-jaro text-white">
              HTML
            </div>
            <div className="w-1/4 h-14 text-center flex items-center transform transition-transform hover:-translate-y-2 justify-center text-2xl rounded-full bg-[#262CBA] cursor-pointer  font-jaro text-white">
              CSS
            </div>
            <div className="w-2/4 h-14 text-center flex items-center transform transition-transform hover:-translate-y-2 justify-center text-xl rounded-full bg-[#262CBA] cursor-pointer  font-jaro text-white">
              Javascript
            </div>
          </div>

          <div className="mt-5 w-full flex flex-row gap-5 justify-evenly">
            <div className="w-2/5 h-14 text-center flex items-center transform transition-transform hover:-translate-y-2 justify-center text-2xl rounded-full bg-[#262CBA] cursor-pointer font-jaro text-white">
              React JS
            </div>
            <div className="w-2/5 h-14 text-center flex items-center transform transition-transform hover:-translate-y-2 justify-center text-xl rounded-full bg-[#262CBA] cursor-pointer  font-jaro text-white">
              Tailwind CSS
            </div>
            <div className="w-2/5 h-14 text-center flex items-center transform transition-transform hover:-translate-y-2 justify-center text-xl rounded-full bg-[#262CBA] cursor-pointer  font-jaro text-white">
              Typescript
            </div>
          </div>

          <div className="mt-5 w-full flex flex-row gap-5 justify-evenly ">
            <div className="w-1/3 h-14 text-center flex items-center transform transition-transform hover:-translate-y-2 justify-center text-2xl rounded-full bg-[#262CBA] cursor-pointer  font-jaro text-white">
              Firebase
            </div>
            <div className="w-1/3 h-14 text-center flex items-center transform transition-transform hover:-translate-y-2 justify-center text-3xl rounded-full bg-[#262CBA]  font-jaro text-white">
              Git
            </div>

            <div className="w-1/3 h-14 text-center flex items-center transform transition-transform hover:-translate-y-2 justify-center text-2xl rounded-full bg-[#262CBA] font-jaro text-white">
              GitHub
            </div>
          </div>

          <div className="mt-5 w-full flex flex-row gap-5 justify-evenly ">
            <div className="w-1/3 h-14 text-center flex items-center transform transition-transform hover:-translate-y-2 justify-center text-2xl rounded-full bg-[#262CBA] cursor-pointer  font-jaro text-white">
              Zustand
            </div>
            <div className="w-1/3 h-14 text-center flex items-center transform transition-transform hover:-translate-y-2 justify-center text-2xl rounded-full bg-[#262CBA] cursor-pointer  font-jaro text-white">
              Redux
            </div>
            <div className="w-1/3 h-14 text-center flex items-center transform transition-transform hover:-translate-y-2 justify-center text-2xl rounded-full bg-[#262CBA] cursor-pointer  font-jaro text-white">
              Recoil
            </div>
          </div>

          <div className="mt-5 w-full flex flex-row gap-5 justify-evenly ">
            <div className="w-2/4 h-14 text-center flex items-center transform transition-transform hover:-translate-y-2 justify-center text-xl rounded-full bg-[#262CBA] cursor-pointer  font-jaro text-white">
              Node.js
            </div>
            <div className="w-2/4 h-14 text-center flex items-center transform transition-transform hover:-translate-y-2 justify-center text-xl rounded-full bg-[#262CBA] cursor-pointer  font-jaro text-white">
              Express.js
            </div>
            <div className="w-2/4 h-14 text-center flex items-center transform transition-transform hover:-translate-y-2 justify-center text-xl rounded-full bg-[#262CBA] cursor-pointer  font-jaro text-white">
              Mongo DB
            </div>
          </div>

          <div className="mt-5 w-full flex flex-row gap-5 justify-evenly">
            <div className="w-1/4 h-14 text-center flex items-center transform transition-transform hover:-translate-y-2 justify-center text-xl rounded-full bg-[#262CBA] cursor-pointer  font-jaro text-white">
              Prisma
            </div>
            <div className="w-1/3 h-14 text-center flex items-center transform transition-transform hover:-translate-y-2 justify-center text-xl rounded-full bg-[#262CBA] cursor-pointer  font-jaro text-white">
              PostgreSQL
            </div>
            <div className="w-1/3 h-14 text-center flex items-center transform transition-transform hover:-translate-y-2 justify-center text-xl rounded-full bg-[#262CBA] cursor-pointer  font-jaro text-white">
              Cloudflare
            </div>
          </div>

          <div className="mt-5 w-full flex flex-row gap-5 justify-evenly">
            <div className="w-3/4 h-14 text-center flex items-center justify-center text-xl rounded-full transform transition-transform hover:-translate-y-2 bg-[#262CBA] cursor-pointer  font-jaro text-white">
              Data Structures
            </div>
            <div className="w-1/3 h-14 text-center flex items-center justify-center text-2xl rounded-full transform transition-transform hover:-translate-y-2 bg-[#262CBA] cursor-pointer  font-jaro text-white">
              OOPS
            </div>
            <div className="w-1/3 h-14 text-center flex items-center justify-center text-xl rounded-full transform transition-transform hover:-translate-y-2 bg-[#262CBA] cursor-pointer  font-jaro text-white">
              DBMS
            </div>
          </div>
        </div>
      </div>
      <div className="h-16 w-full"></div>
    </div>
  );
}


function Navbar() {
  const icons = [
    { src: "/Home.png", alt: "Home", label: "Home" },
    { src: "/Project.png", alt: "Projects", label: "Projects" },
    {
      src: "/GitHub.png",
      alt: "GitHub",
      label: "GitHub",
      link: "https://github.com/AayushKP",
    },
    {
      src: "/LinkedIn.png",
      alt: "LinkedIn",
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/aayush-kashyap-240655257/",
    },
    {
      src: "/TwitterX.png",
      alt: "Twitter",
      label: "Twitter",
      link: "https://twitter.com/aayuk_5183",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="absolute top-5 w-2/5 h-20 left-3/4 transform -translate-x-1/2 bg-white/10 rounded-full mx-auto flex justify-center items-center gap-8">
      <div className="flex gap-8">
        {" "}
        {/* Wrap the icons in a div */}
        {icons.map((icon, index) => (
          <div
            key={index}
            className="relative group h-16 w-16 transition-transform duration-300 hover:scale-110 active:scale-90 cursor-pointer"
            onClick={() => {
              if (icon.label === "Projects") {
                navigate("/projects");
              } else if (icon.label === "Home") {
                navigate("/");
              } else {
                window.open(icon.link, "_blank");
              }
            }}
          >
            <img src={icon.src} alt={icon.alt} />
            {/* Tooltip text */}
            <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-black text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {icon.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Routing;
