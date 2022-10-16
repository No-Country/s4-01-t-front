import React, { useEffect } from "react";

import Like from "../../assets/Controler/Vector.png";
import NotLike from "../../assets/Controler/plus.png";
import Image from "react-bootstrap/esm/Image";
import styles from "./controler.module.css";

const { controler, redCircle, blackCircle } = styles;

function Controler({ swipe }) {
  return (
    <div className={controler}>
      <div className={blackCircle}>
        <Image src={NotLike} onClick={() => swipe("left")} />
      </div>
      <div className={redCircle} onClick={() => swipe("right")}>
        <Image src={Like} />
      </div>
    </div>
  );
}

export default Controler;
