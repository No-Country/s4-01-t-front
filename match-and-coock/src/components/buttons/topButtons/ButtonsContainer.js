import React from "react";
import styles from './buttonsContainer.module.css';
import FilterButton from "../FilterButton";
import BackArrow from './arrow-left-circle.png';
import {Image} from "react-bootstrap";
import filter from '../../../assets/filter.png';
import like from './heart.png';
import logo from './logo.png';



const { buttonsContainer, logoCtn, filterButton, likeButton, backButton } = styles


function ButtonsContainer() {
    return (

        <div className={buttonsContainer}>
            <button className={backButton}>
                <Image src={BackArrow} />
            </button>

            <div className={logoCtn}>                
                    <Image src={logo}/>
                    Match&Cook                
            </div>

            <button className={likeButton}>
                <Image src={like} />
            </button>


            <button className={filterButton}>
                <Image src={filter} />
                Filtrar
            </button>
        </div>

        
    )
}




export default ButtonsContainer


