import React from "react";
import RecipesGrid  from "../../components/recipesGrid/RecipesGrid";
import mockMenues from '../../mockMenues.json';
import styles from './matchedScreen.module.css';

const { 
    styledScreen,
    styledTitle
} = styles;




function MatchedScreen(){

    const {menues} = mockMenues

    return(
        
        <div className={styledScreen}>
            <h2 className={styledTitle}>Tus recetas matcheadas</h2>
                <RecipesGrid menues = {menues}/>            
        </div>

    )
}


export default MatchedScreen