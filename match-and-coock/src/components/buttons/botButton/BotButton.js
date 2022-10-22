import React from "react";
import { Image, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import styles from "./botButton.module.css";
import helpButton from "./Vector.png";

const { boxPosition } = styles;

function BotButton() {
  const location = useNavigate();

  return (
    <div>
      <Button
        onClick={() => location("/help")}
        style={{
          backgroundColor: "white",
          borderColor: "white",
          marginLeft: "100%",
        }}
      >
        <Image src={helpButton} />
      </Button>
    </div>
  );
}

export default BotButton;
