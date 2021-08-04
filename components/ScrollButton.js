import React, { useState, useEffect } from "react";

const ScrollButton = ({ itemName }) => {
  const [anchorTarget, setAnchorTarget] = useState(null);

  useEffect(() => {
    setAnchorTarget(document.getElementById(itemName));
  }, [itemName]);

  const handleClick = (event) => {
    event.preventDefault();
    anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <a
      href="#"
      className="bg-transparent hover:bg-blue-400 text-blue-400 font-semibold hover:text-white p-4 border border-blue-400 hover:border-transparent rounded inline-block mt-5 cursor-pointer mouse transition ease-in duration-200"
      onClick={handleClick}
      aria-label={`Scroll to ${itemName}`}
    >
      <i className="fas fa-arrow-right"></i> Get in Touch!
    </a>
  );
};

export default ScrollButton;
