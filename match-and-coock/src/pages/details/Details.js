import React from "react";
import { mock } from "./mock";

import styles from "./details.module.css";
import { Header } from "../../components/details_components/header/Header";
import { UserActions } from "../../components/details_components/user_actions/UserActions";
import { RecipeDetails } from "../../components/details_components/recipe_details/RecipeDetails";
import { useFetch } from "../../hooks/useFetch";

import { useLocation } from "react-router";
const { container } = styles;

export const Details = () => {
  const { state: id } = useLocation();

  const { loading, state } = useFetch();

  const { UserName, Ingredients, RecipeSteps, UserPicturePath } = mock;

  return (
    <section className={container}>
      <div>
        <Header {...mock} />
        <UserActions user_img={UserPicturePath} creator={UserName} />
      </div>
      <RecipeDetails steps={RecipeSteps} ingredients={Ingredients} />
    </section>
  );
};
