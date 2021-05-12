import React from "react";

const TextBox = ({ text }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "28vw",
      }}
    >
      <h2>{text}</h2>
    </div>
  );
};

export default TextBox;
