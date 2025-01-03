import React, { useEffect } from "react";

// Infinite Scroll Component
const InfiniteScroll = ({
  items,
  speed = "normal",
  direction = "left",
  className,
}) => {
  useEffect(() => {
    // Add animation to scrollers if user prefers reduced motion
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  const addAnimation = () => {
    const scrollers = document.querySelectorAll(".scroller");

    scrollers.forEach((scroller) => {
      // Add `data-animated="true"` for animation
      scroller.setAttribute("data-animated", "true");

      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      // Duplicate each item and add `aria-hidden` to prevent it from being announced by screen readers
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  };

  // Map through the items to render them
  const renderedItems = items.map((item, index) => (
    <li key={index} className="p-4 bg-blue-500 text-white rounded-md shadow-lg">
      <div className="icon text-3xl mb-2">{item.icon}</div>
      <span>{item.title}</span>
    </li>
  ));

  return (
    <div
      className={`scroller ${className}`}
      data-speed={speed}
      data-direction={direction}
    >
      <ul className="tag-list scroller__inner flex gap-4">{renderedItems}</ul>
    </div>
  );
};

// Example usage of the component
const items = [
  { title: "HTML", icon: <i className="fab fa-html5" /> },
  { title: "CSS", icon: <i className="fab fa-css3" /> },
  { title: "Tailwind CSS", icon: <i className="fab fa-twitter" /> },
  { title: "JavaScript", icon: <i className="fab fa-js-square" /> },
  { title: "TypeScript", icon: <i className="fab fa-github" /> },
  { title: "Node.js", icon: <i className="fab fa-node" /> },
  { title: "Express.js", icon: <i className="fab fa-node" /> },
  { title: "MongoDB", icon: <i className="fab fa-node" /> },
  { title: "Prisma", icon: <i className="fab fa-github" /> },
  { title: "Postgres", icon: <i className="fab fa-github" /> },
  { title: "Cloudflare", icon: <i className="fab fa-cloudflare" /> },
  { title: "Firebase", icon: <i className="fab fa-firefox" /> },
  { title: "Zustand", icon: <i className="fab fa-react" /> },
  { title: "Recoil", icon: <i className="fab fa-react" /> },
];

const App = () => {
  return (
    <div className="w-full py-10">
      <InfiniteScroll items={items} speed="slow" direction="left" />
      <InfiniteScroll items={items} speed="slow" direction="right" />
    </div>
  );
};

export default App;
