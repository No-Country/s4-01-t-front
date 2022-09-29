import React from "react";
import styles from '../../styles/cardsContainer.module.css'
import Card from 'react-bootstrap/Card';

import MenuImg from '../../assets/menu1.png';

const {card} = styles



function CardWithMenu(props) {
    return (
        <Card style={{ width: '16rem' }} className={card}>
            <Card.Img variant="top" src={MenuImg} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
              
                
            </Card.Body>
        </Card>
    )
}

export default CardWithMenu

