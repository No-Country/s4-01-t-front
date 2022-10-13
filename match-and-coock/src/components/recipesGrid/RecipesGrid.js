import React from "react";
import mockMenues from '../../mockMenues.json';
import CardWithMenu from '../card/CardWithMenu';
import styles from './recipesGrid.module.css';
import { useDispatch, useSelector } from "react-redux";
import {getMatchs} from '../../features/matchs';
import LikedCard from '.././likedCard/LikedCard';


const { responsiveGrid , likedCard} = styles;




function RecipesGrid({ menues }) {


  const matchs = useSelector((state)=> state.matchs)
  const dispatch = useDispatch();
  

  
  const arrayMenues = menues;
  console.log(arrayMenues);
 
  



  return (

    <div className={responsiveGrid}>

     {
        arrayMenues.map(menu => {
          return (
            <div >              
               <LikedCard
                title={menu.menuTitle}
                menuType={menu.menuType}
                time={menu.time}                              
              /> 
              
            </div>)

        })

      }


    </div>
  )
}





export default RecipesGrid