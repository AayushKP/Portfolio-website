import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

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
              Not the avg. “Full Stack Developer” from INDIA
            </p>
            <button className="mt-10 ml-16 w-32 bg-[white] h-12 text-2xl font-jersey rounded-lg">
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
    <div className="h-screen w-screen relative bg-[#262CBA]">
      <div className="h-full flex flex-col">
        {/* Top Section (Blue) */}
        <div className="h-2/3 w-full bg-[#101010]">
          <Navbar />
          <projectsBar />
        </div>
      </div>
    </div>
  );
}
function projectsBar() {
  return (
    <div className="border border-red-900 bg-white  mt-14 mx-10 h-96"></div>
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
  );
}

export default Routing;
