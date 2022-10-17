import React from "react";
import RecipesGrid  from "../../components/recipesGrid/RecipesGrid";
import mockMenues from '../../mockMenues.json';
import styles from './likedScreen.module.css';

const { 
    styledScreen,
    styledTitle
} = styles;




function LikedScreen(){

    const {menues} = mockMenues

    return(
        
        <div className={styledScreen}>
            <h2 className={styledTitle}>Tus recetas likeadas</h2>
                <RecipesGrid menues = {menues}/>            
        </div>

    )
}


export default LikedScreen