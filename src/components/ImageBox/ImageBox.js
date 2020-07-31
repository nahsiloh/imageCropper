import React from "react";

import "./ImageBox.style.scss";

const ImageBox = ({ className, style, text }) => {
  return (
    <div className={className} style={style}>
      <p className="image-box-text">{text}</p>
    </div>
  );
};

export default ImageBox;
