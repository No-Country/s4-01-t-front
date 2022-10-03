import React from "react";
import styles from './card.module.css';

import Image from 'react-bootstrap/Image'
import MenuImg from '../../assets/menu1.png';
import Container from "react-bootstrap/esm/Container";
import clocks from '../../assets/Outline.png';

const { card, tagText, coockingTime, tagAndTimeContainer, menuInfo, menuTitle } = styles



function CardWithMenu(props) {
    return (
        <div className={card}>
            <Image src={MenuImg} />
            <div className= {menuInfo} >
                <h4 className={menuTitle}>Lasagna de berenjenas</h4>
                <Container className={tagAndTimeContainer}>
                    <p className={tagText}>Vegetariano</p>
                    <Container className={coockingTime}>
                        <Image src={clocks}/> 45' 
                    </Container>
                </Container>

            </div>

        </div>
        )
}

export default CardWithMenu



/*  */