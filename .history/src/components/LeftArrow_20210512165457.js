import React from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const LeftArrow = ({ prevSlide }) => {
  return (
    <button
      style={{ justifyContent: "center", alignItems: "center", fontSize: '24px' }}
      onClick={prevSlide}
    >
      <FaArrowAltCircleLeft />
    </button>
  );
};

export default LeftArrow;
