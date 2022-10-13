import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import styles from "./swipeScreen.module.css";
import data from "../../mockMenues.json";
import SwipeContainer from "../../components/swipeContainer/SwipeContainer";
import RecipesGrid from '../../components/recipesGrid/RecipesGrid'

const { viewTitle, swipeAndLikes, rightCtn } = styles;

function SwipeScreen() {
  const { menues } = data;

  return (
    <div className={swipeAndLikes}>
      <div style={{width:'40%'}}>
        <h2 className={viewTitle}>Deslizá y matcheá</h2>
        <SwipeContainer menues={menues} />
      </div>
      <div style={{width:'60%', display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
        <h2 className={viewTitle}>Tus recetas likeadas</h2>
        <RecipesGrid menues={menues} />
      </div> */
    </div>

  );

}

export default SwipeScreen;
