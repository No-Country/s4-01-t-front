import React from "react";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";
import step1 from "../../assets/helpScreen/step1.png";
import step2 from "../../assets/helpScreen/step2.png";
import styles from "./helpScreen.module.css";
import ArrowBack from "../../components/buttons/topButtons/arrow-left-circle.png";

const { helpScreen, stepsImage, viewTitle, paragraph, list } = styles;

function HelpScreen() {
  return (
    <>
      <Link to={-1} style={{ position: "relative", top: "10px", left: "10px" }}>
        <img src={ArrowBack} alt="back" />
      </Link>
      <Container className={helpScreen}>
        <h2 className={viewTitle}>
          ¿Cómo funciona
          <br></br>
          Swipe&Coock?
        </h2>

        <Container>
          <p className={paragraph}>
            Existen dos formas de matchear con tu receta:
          </p>
          <ol className={list}>
            <li>Podes deslizar la tarjeta hacia la derecha para matchear</li>
            <li>O apretar en el botón ♥ rojo.</li>
          </ol>
          <Image src={step1} className={stepsImage} />
        </Container>
        <Container>
          <p className={paragraph}>
            Si no querés matchear con la receta deslizala hacia la izquierda, o
            apretá el botón negro.
          </p>
          <Image src={step2} className={stepsImage} />
        </Container>
      </Container>
    </>
  );
}

export default HelpScreen;
