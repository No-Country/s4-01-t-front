import React from "react";
import style from "./header.module.css";

import Flame from "../../../assets/icons/flame.svg";

import Timer from "../../../assets/icons/timer.svg";
import { UserActions } from "../user_actions/UserActions";

const {
  header,
  img_recipe,
  recipe_resume,
  resume_container,
  recipe_type,
  recipe_difficulty,
} = style;

export const Header = ({
  img,
  title,
  type_recipe,
  difficulty,
  preparation_time,
}) => {
  function difficultRename(text) {
    let name = text.toLowerCase();
    if (name === "avanzado") name = " alta";
    if (name === "intermedia") name = " media";
    if (name === "fácil") name = " baja";
    return name;
  }

  return (
    <header className={header}>
      <img className={img_recipe} src={img} alt="recipe" />
      <div className={resume_container}>
        <h2>{title}</h2>
        <div className={recipe_resume}>
          <p className={recipe_type}>{type_recipe}</p>
          <p className={recipe_difficulty}>
            <span>
              <img src={Flame} alt="flame" />
            </span>
            Dificultad:<span> {difficultRename(difficulty)}</span>
          </p>
          <p>
            <span>
              <img src={Timer} alt="clock" />
            </span>
            {preparation_time}'
          </p>
        </div>
      </div>
    </header>
  );
};
