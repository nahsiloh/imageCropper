import React from "react";

import { ReactComponent as Logo } from "../../assets/svg/addImage.svg";

import "./CreatePage.style.scss";
import ImageBox from "../../components/ImageBox/ImageBox";

const border = {
  style: {
    width: "440px",
    paddingBottom: "640px",
    backgroundColor: "#C4C4C4",
    position: "absolute",
  },
  text: "REQUIRED BORDER",
};

const thumbnail = {
  style: {
    width: "360px",
    paddingBottom: "560px",
    backgroundColor: "#CDABAB",
    position: "absolute",
    top: "40px",
  },
  text: "IGTV THUMBNAIL SIZE",
};

const safeZone = {
  style: {
    width: "360px",
    paddingBottom: "360px",
    backgroundColor: "white",
    position: "absolute",
    top: "140px",
  },
  text: "SAFE TEXT ZONE",
};

const CreatePage = () => {
  return (
    <div className="createPage">
      <ImageBox className="border" style={border.style} text={border.text} />
      <ImageBox
        className="thumbnail"
        style={thumbnail.style}
        text={thumbnail.text}
      />
      <ImageBox
        className="safe-zone"
        style={safeZone.style}
        text={safeZone.text}
      />
      <form className="form">
        <label>Logo</label>
        <input type="file" />
      </form>
    </div>
  );
};

export default CreatePage;
