import React from "react";

import Heart from "../../../assets/icons/heart.svg";
import Save from "../../../assets/icons/save.svg";

import style from "./user.module.css";
const { container, user, actions, img } = style;

export const UserActions = ({ user_img, creator }) => {
  return (
    <div className={container}>
      <div className={user}>
        <img src={user_img} className={img} alt="user" />
        <p>{creator}</p>
      </div>
      <div className={actions}>
        <button>
          <img src={Heart} alt="like" />
          Like
        </button>
        <button>
          <img src={Save} alt="save" />
          Guardar
        </button>
      </div>
    </div>
  );
};
