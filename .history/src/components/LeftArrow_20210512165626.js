import React from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const LeftArrow = ({ prevSlide }) => {
  return (
    <button
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
        margin: '8px',
        cursor: 'pointer'
      }}
      onClick={prevSlide}
    >
      <FaArrowAltCircleLeft />
    </button>
  );
};

export default LeftArrow;
