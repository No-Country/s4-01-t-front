import React from "react";
import styles from './buttonsContainer.module.css';
import FilterButton from "../FilterButton";
import BackArrow from './arrow-left-circle.png';
import { Image, Button } from "react-bootstrap";
import filter from '../../../assets/filter.png'


const { buttonsContainer, like_button } = styles


function ButtonsContainer() {
    return (

        <div className={buttonsContainer}>
            <Button style={{
                 backgroundColor: 'white',
                 borderColor: 'white',
                 marginRight:'60%',
                 marginTop:'0.4%',                
                 }}>
                <Image src={BackArrow} />
            </Button>

            <Button style={{
                backgroundColor: 'white',
                color: 'black',
                borderColor: 'white',
                paddingLeft: '2.5%',
                paddingRight: '2.5%',
                paddingTop: '0.8%',
                paddingBottom: '0.3%',
                fontSize: 'medium',
                boxShadow: '2px 6px 6px grey',
                borderRadius:'45px',
                width:'max-content',
                marginLeft:'20%',
                marginTop:'0.4%',
                position:'absolute',
                left:'8%'

                
            }}>
                <Image src={filter} />
                Filtrar
            </Button>
        </div >
    )
}





export default ButtonsContainer


