import React from "react";
import CardWithMenu from "../card/CardWithMenu";
import TinderCard from 'react-tinder-card'
import Controler from "./Controler";
import FilterButton from "../buttons/FilterButton";


function SwipeContainer() {

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
      }
      
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }

    return (
        <div>
        <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['up', 'down']}>
            <CardWithMenu />
        </TinderCard>

        <FilterButton/>

        <Controler/>
        </div>


    )
}

export default SwipeContainer
