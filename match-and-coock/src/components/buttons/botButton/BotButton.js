import React from "react";
import { Image, Button } from "react-bootstrap";
import styles from './botButton.module.css';
import helpButton from './Vector.png';


const { boxPosition } = styles


function BotButton() {
    return (

        <div>
            <Button style={{
                backgroundColor: 'white',
                borderColor: 'white',
                marginLeft: '100%'
            }}>
                <Image src={helpButton} />
            </Button>
        </div>
    )
}



export default BotButton