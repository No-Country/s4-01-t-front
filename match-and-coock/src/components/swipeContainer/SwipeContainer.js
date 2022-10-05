import React from "react";
import CardWithMenu from "../card/CardWithMenu";
import TinderCard from 'react-tinder-card'
import Controler from "./Controler";
import FilterButton from "../buttons/FilterButton";
import styles from './controler.module.css';

const {positioned, viewStyle} = styles;

const menues = [

  {
    menuTitle: 'Lasagna de berenjena',
    menuType: 'Vegetariano',
    time:'45'
  },
  {
    menuTitle: 'Fondue de calabaza',
    menuType: 'Salado',
    time:'85'
  },
  {
    menuTitle: 'Lasagna de berenjena',
    menuType: 'Vegetariano',
    time:'45'
  },
  {
    menuTitle: 'Nuggets de pollo',
    menuType: 'Salado',
    time:'45'
  },
  {
    menuTitle: 'Hamburguesas veganas',
    menuType: 'Sin TACC',
    time:'120'
  }

]


function SwipeContainer() {

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
      }
      
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }

    return (
        <div className={viewStyle}>

          {menues.map((menu)=>
            <TinderCard className={positioned} onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['up', ' down ']} >
                  <CardWithMenu title = {menu.menuTitle} menuType={menu.menuType} time={menu.time}/>
            </TinderCard>
          )}


          

          <FilterButton/>

          <Controler/>
        </div>


    )
}

export default SwipeContainer
