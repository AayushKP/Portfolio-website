const icons = [
  { src: "/Home.png", alt: "Home", label: "Home" },
  { src: "/Project.png", alt: "Projects", label: "Projects" },
  { src: "/GitHub.png", alt: "GitHub", label: "GitHub" },
  { src: "/LinkedIn.png", alt: "LinkedIn", label: "LinkedIn" },
  { src: "/TwitterX.png", alt: "Twitter", label: "Twitter" },
];

function Navbar() {
  return (
    <div className="absolute top-5 w-2/5 h-20 left-3/4 transform -translate-x-1/2 bg-white/10 rounded-full mx-auto flex justify-center items-center gap-8 ">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="relative group h-16 w-16 transition-transform duration-300 hover:scale-110 active:scale-90"
        >
          <img src={icon.src} alt={icon.alt} className="cursor-pointer" />
          {/* Tooltip text */}
          <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-black text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
            {icon.label}
          </div>
        </div>
      ))}
    </div>
  );
}
export default Navbar;
