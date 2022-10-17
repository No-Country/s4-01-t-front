import React from "react";

import filter from '../../assets/filter.png';
import styles from './filterButton.module.css';


const {filterButton} = styles

function FilterButton(){
    return(
        <button className={filterButton}>
            <img src={filter} alt='filter'/>
            <p>Filtrar</p>
        </button> 
    )
}


export default FilterButton