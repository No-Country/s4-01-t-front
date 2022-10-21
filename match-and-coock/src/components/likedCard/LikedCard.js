import React from "react";
import styles from './likedCard.module.css';
import clocks from '../../assets/Outline.png';
import MenuImg from '../../assets/menu1.png';
import { Image } from "react-bootstrap";

const {
    card,
    tagText,
    coockingTime,
    tagAndTimeContainer,
    menuInfo,
    menuTitle,
    styledImage
  } = styles;

function LikedCard(props) {
    return (
      <div className={card}>
        <Image src={MenuImg} className={styledImage} />
        <div className={menuInfo}>
          <h4 className={menuTitle}>{props.title}</h4>
          <div className={tagAndTimeContainer}>
            <p className={tagText}>{props.menuType}</p>
            <div className={coockingTime}>
              <Image src={clocks} /> {props.time}'
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default LikedCard;