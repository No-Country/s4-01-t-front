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
  RecipePicturePath,
  RecipeTitle,
  DietTypes,
  DifficultyLevelDescription,
  PreparationTime,
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
      <img className={img_recipe} src={RecipePicturePath} alt="recipe" />
      <div className={resume_container}>
        <h2>{RecipeTitle}</h2>
        <div className={recipe_resume}>
          {DietTypes.map((el) => (
            <p key={el} className={recipe_type}>
              {el}
            </p>
          ))}

          <p className={recipe_difficulty}>
            <span>
              <img src={Flame} alt="flame" />
            </span>
            Dificultad:
            <span> {difficultRename(DifficultyLevelDescription)}</span>
          </p>
          <p>
            <span>
              <img src={Timer} alt="clock" />
            </span>
            {PreparationTime}'
          </p>
        </div>
      </div>
    </header>
  );
};
