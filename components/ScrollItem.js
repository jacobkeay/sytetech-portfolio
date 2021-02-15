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
      Get in touch below<i className="pl-2 fas fa-arrow-down"></i>
    </a>
  );
};

export default ScrollItem;
