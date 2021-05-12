import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const RightArrow = ({ nextSlide }) => {
  return (
    <button
      style={{ justifyContent: "center", alignItems: "center" }}
      onClick={nextSlide}
    >
      <FaArrowAltCircleRight />
    </button>
  );
};

export default RightArrow;
