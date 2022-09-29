import React from "react";
import styles from '../../styles/cardsContainer.module.css'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import clock from '../../assets/Outline.png';
import Image from 'react-bootstrap/Image'

import MenuImg from '../../assets/menu.png';




function MenuCard(props) {
  return (

    <Container style={{ width: '90%', marginLeft: '5%' }} >
      <Card style={{ width: '100%' }}>
        <div className={styles.menuCards}>
          <Card.Img variant="top" src={MenuImg} style={{ width: '30%' }} />
          <Card.Body className={styles.cardBody} >
            <Card.Title>{props.title}</Card.Title>
            <Container className={styles.tagAndTimeContainer}>
              <Container className={styles.tagText}>Menu Type</Container>
              <Container className={styles.coockingTime}>
                <Image src={clock}/> 60´
              </Container>
            </Container>


          </Card.Body>

          <Card.Body>

          </Card.Body>
        </div>
      </Card>
    </Container>


  );
}



export default MenuCard