import React, { useMemo, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import CardWithMenu from "../card/CardWithMenu";
import TinderCard from "react-tinder-card";
import Controler from "./Controler";
import FilterButton from "../buttons/FilterButton";
import styles from "./swipeContainer.module.css";
import { addMatch } from "../../features/matchs";

const { viewStyle, controlerAndFilter } = styles;

function SwipeContainer({ menues }) {
  const dispatch = useDispatch();

  const [currentIndex, setCurrentIndex] = useState(menues.length - 1);
  const [lastDirection, setLastDirection] = useState();
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(menues.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < menues.length - 1;

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);

    if (direction === "right") {
      dispatch(addMatch(menues[currentIndex]));
    }
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);

    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < menues.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <div className={viewStyle}>
      {menues.map(
        ({ RecipeTitle, DietType, PreparationTime, RecipeId }, index) => (
          <TinderCard
            ref={childRefs[index]}
            key={RecipeId}
            onSwipe={(dir) => swiped(dir, RecipeTitle, index)}
            onCardLeftScreen={() => outOfFrame(RecipeTitle, index)}
            preventSwipe={["up", " down "]}
          >
            <CardWithMenu
              title={RecipeTitle}
              menuType={DietType}
              time={PreparationTime}
            />
          </TinderCard>
        )
      )}
      <div className={controlerAndFilter}>
        {/* <FilterButton /> */}
        <Controler swipe={swipe} />
      </div>
    </div>
  );
}

export default SwipeContainer;
