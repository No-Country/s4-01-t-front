import React, { useState } from "react";
import style from "./recipeDetails.module.css";
const { buttons, active, ul_container, step_li } = style;

export const RecipeDetails = ({ steps, ingredients }) => {
  const [view, setView] = useState("Ingredientes");

  function handleClick(e) {
    const value = e.target.textContent;
    setView(value);
  }
  return (
    <>
      <div className={buttons}>
        <button
          onClick={handleClick}
          className={view === "Ingredientes" ? active : ""}
        >
          Ingredientes
        </button>
        <button
          onClick={handleClick}
          className={view === "Pasos" ? active : ""}
        >
          Pasos
        </button>
      </div>
      <div className={ul_container}>
        <ul>
          {view === "Ingredientes" &&
            ingredients.map((ingredient, i) => (
              <li key={i}>
                <p>• {ingredient}</p>
              </li>
            ))}

          {view === "Pasos" &&
            steps.map((step, i) => (
              <li className={step_li} key={i}>
                <p>
                  <span>{i + 1}</span>
                </p>
                <p>{step}</p>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
