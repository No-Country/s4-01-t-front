import React from "react";
import styles from './recipesGrid.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getMatchs } from '../../features/matchs';
import LikedCard from '.././likedCard/LikedCard';



const { responsiveGrid, likedCard } = styles;


function RecipesGrid({ menues }) {

  const matchs = useSelector((state) => state.matchs)
  const dispatch = useDispatch();

  const arrayMenues = menues;
  console.log(arrayMenues);

  return (
    <div className={responsiveGrid}>

      {
        arrayMenues.slice(0, 4).map(menu => {
          return (
            <LikedCard
              title={menu.menuTitle}
              menuType={menu.menuType}
              time={menu.time}
            />
          )

        })

      }


    </div>
  )
}





export default RecipesGrid