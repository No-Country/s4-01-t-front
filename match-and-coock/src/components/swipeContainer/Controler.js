import React from "react";

import Like from '../../assets/Controler/Vector.png';
import NotLike from '../../assets/Controler/plus.png';
import Image from "react-bootstrap/esm/Image";
import styles from './controler.module.css';

const {controler, redCircle, blackCircle} = styles;






function Controler() {
    return (

        <div className={controler}>
            <div className={blackCircle}> 
                <Image src={NotLike}/>
            </div>
            <div className={redCircle} >
                <Image src={Like} />
            </div>
        </div>


    )
}

export default Controler