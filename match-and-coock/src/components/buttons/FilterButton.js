import React, {useState} from "react";
import filter from "../../assets/filter.png";
import styles from "./filterButton.module.css";

const { filterButton } = styles;

const  FilterButton = ({onClick}) => {
  
  
  return (
    <button className={filterButton} onClick={onClick} >
      <img src={filter} alt="filter" />
      <span>Filtrar</span>
    </button>
  );
}

export default FilterButton;
