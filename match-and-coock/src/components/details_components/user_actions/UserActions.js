import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Heart from "../../../assets/icons/heart.svg";
import Save from "../../../assets/icons/save.svg";
import { addLikeAction } from "../../../features/likes";
import { addMatchAction } from "../../../features/matchs";

import style from "./user.module.css";
const { container, user, actions, img } = style;

export const UserActions = ({ user_img, creator, RecipeId }) => {
  const userName = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className={container}>
      <div className={user}>
        <img src={user_img} className={img} alt="user" />
        <p>{creator}</p>
      </div>
      <div className={actions}>
        <button onClick={() => dispatch(addLikeAction(userName.id, RecipeId))}>
          <img src={Heart} alt="like" />
          Like
        </button>
        <button onClick={dispatch(addMatchAction(userName, RecipeId))}>
          <img src={Save} alt="save" />
          Guardar
        </button>
      </div>
    </div>
  );
};
