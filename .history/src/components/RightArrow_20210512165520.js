import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

const RightArrow = ({ nextSlide }) => {
  return (
    <button
      style={{display: 'flex', justifyContent: "center", alignItems: "center", fontSize: '24px' }}
      onClick={nextSlide}
    >
      <FaArrowAltCircleRight />
    </button>
  );
};

export default RightArrow;
