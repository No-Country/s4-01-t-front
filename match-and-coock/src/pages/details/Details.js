import React, { useState } from "react";
import { mock } from "./mock";

import styles from "./details.module.css";
import { Header } from "../../components/details_components/header/Header";
import { UserActions } from "../../components/details_components/user_actions/UserActions";
import { RecipeDetails } from "../../components/details_components/recipe_details/RecipeDetails";
const { container } = styles;

export const Details = () => {
  const { creator, ingredients, steps, user_img } = mock;

  return (
    <section className={container}>
      <div>
        <Header {...mock} />
        <UserActions user_img={user_img} creator={creator} />
      </div>
      <RecipeDetails steps={steps} ingredients={ingredients} />
    </section>
  );
};
