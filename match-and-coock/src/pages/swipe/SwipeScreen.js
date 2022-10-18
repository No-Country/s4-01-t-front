import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import styles from "./swipeScreen.module.css";
import data from "../../mockMenues.json";
import SwipeContainer from "../../components/swipeContainer/SwipeContainer";
import RecipesGrid from '../../components/recipesGrid/RecipesGrid';
import ButtonsContainer from "../../components/buttons/buttonsContainer/ButtonsContainer";

const { viewTitle, swipeAndLikes, rightContent, leftContent, centerContent, recipes } = styles;

function SwipeScreen() {
  const { menues } = data;

  return (
    <div className={swipeAndLikes}>

      <div>
        <div>
          <ButtonsContainer />
        </div>

        <div >
          <h2 className={viewTitle}>Deslizá y matcheá</h2>
          <SwipeContainer menues={menues} />
        </div>

      </div>


      <div className={rightContent}>
        <h2 className={viewTitle}>Tus recetas matcheadas</h2>
        <RecipesGrid menues={menues} />
      </div>

    </div>

  );

}

export default SwipeScreen;
