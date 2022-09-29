import React, { useState } from 'react';
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card';
import MenuCard from '../components/card/MenuCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../styles/cardsContainer.module.css';
import FilterButton from '../components/buttons/FilterButton';

import CardWithMenu from '../components/card/CardWithMenu';




function SwipeScreen() {

    const characters = db
    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }


    return (

    <>
        <Container>
            <header style={{ backgroundColor: 'red', textAlign: 'center' }}>Header</header>
        </Container>  

        <Container  className={styles.viewContainer}>                
                <h2 className={styles.viewTitle}>Deslizá y matcheá</h2>                
            
            <CardWithMenu/>

            <FilterButton/> 
        </Container>


        

    </>





        
    )
}





const db = [
    {
        name: 'Ensalada Vegana',
        url: "https://www.freeiconspng.com/img/2951"
    },
    {
        name: 'Erlich Bachman',
        url: './img/erlich.jpg'
    },
    {
        name: 'Monica Hall',
        url: './img/monica.jpg'
    },
    {
        name: 'Jared Dunn',
        url: './img/jared.jpg'
    },
    {
        name: 'Dinesh Chugtai',
        url: './img/dinesh.jpg'
    }
]



function SwipeContainer() {
    const characters = db
    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }

    return (
        <div >
            <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
            <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />


            {characters.map((character) =>
                <Container className={styles.SwipeContainer} style={{ backgroundColor: 'red' }}>

                    <Row>

                        <Col xs={6} >
                            <TinderCard className='swipe' key={character.name} preventSwipe='up' onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>

                                <MenuCard title={character.name} />

                            </TinderCard>
                        </Col>

                    </Row>

                </Container>
            )}



        </div>
    )
}

export default SwipeScreen