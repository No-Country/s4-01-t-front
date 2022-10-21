import React, { useEffect, useState } from "react";
import styles from "./swipeScreen.module.css";
import data from "../../mockMenues.json";
import SwipeContainer from "../../components/swipeContainer/SwipeContainer";
import RecipesGrid from '../../components/recipesGrid/RecipesGrid';
import ButtonsContainer from "../../components/buttons/topButtons/ButtonsContainer";
import BotButton from "../../components/buttons/botButton/BotButton";


const { viewTitle, swipeAndLikes, rightContent, swipeTitle, leftContent, topButtons, botButtonBox } = styles;

function SwipeScreen() {
  const { menues } = data;

  return (
    <div className={swipeAndLikes}>
      

      <div style={{ display: 'flex', flexDirection: 'column' }}>


        <div className={topButtons}>
          <ButtonsContainer />
        </div>

        <div className={leftContent}>
          <h2 className={swipeTitle} >Deslizá y matcheá</h2>
          <SwipeContainer menues={menues} />
        </div>

        <div className={botButtonBox}>
          <BotButton />
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
