import React from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const ButtonReturn = ({ url, color, display_breakpoint }) => {
  const handleReturn = () => {
    console.log(url);
  };
  console.log(url);
  const { breakpoint, property } = display_breakpoint;
  const className =
    property === "block"
      ? `d-none d-${breakpoint}-block`
      : `d-${breakpoint}-none`;
  const styleBase = { "justify-self": "start", "flex-grow": "1" };

  return (
    <div className={className} style={styleBase}>
      <Link to={url} className={`text-${color}`}>
        <IconContext.Provider value={{ size: "2rem", color: { color } }}>
          <IoArrowBackCircleOutline></IoArrowBackCircleOutline>
        </IconContext.Provider>
      </Link>
    </div>
  );
};

export default ButtonReturn;
