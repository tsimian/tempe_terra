import React from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";

const GoTop = () => {
  // Detects when to display arrow button
  document.addEventListener("scroll", (e) => {
    if (document.documentElement.scrollTop > 400) {
      document.querySelector("#goTop").style.opacity = "100%";
    } else {
      document.querySelector("#goTop").style.opacity = "0%";
    }
  });

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return <BsArrowUpCircleFill id="goTop" onClick={goTop} size={36} />;
};

export default GoTop;
