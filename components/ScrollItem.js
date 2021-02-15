import React, { useState, useEffect } from "react";

const ScrollItem = ({ itemName }) => {
  const [anchorTarget, setAnchorTarget] = useState(null);

  useEffect(() => {
    setAnchorTarget(document.getElementById(itemName));
  }, [itemName]);

  const handleClick = event => {
    event.preventDefault();
    anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <a
      href="#"
      className="text-blue-400 inline-flex items-center mt-3"
      onClick={handleClick}
      aria-label={`Scroll to ${itemName}`}
    >
      Get in touch below
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-4 h-4 ml-2"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </a>
  );
};

export default ScrollItem;
