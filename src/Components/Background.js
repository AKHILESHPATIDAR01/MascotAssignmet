import React from "react";

const Background = ({ selectedImg }) => {
  // console.log(selectedImg);

  return (
    <div className="img-box">
      <img src={selectedImg} alt="slideimage" />
    </div>
  );
};

export default Background;
