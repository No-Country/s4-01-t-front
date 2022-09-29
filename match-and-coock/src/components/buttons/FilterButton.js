import React from "react";
import styles from '../../styles/cardsContainer.module.css';
import filter from '../../assets/filter.png';


function FilterButton(){
    return(
        <button className={styles.filterButton}>
            <img src={filter} alt='filter'/>
            <p>Filtrar</p>
        </button> 
    )
}


export default FilterButton