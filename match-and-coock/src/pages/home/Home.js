import React, { useState } from "react";
import { Slider } from "../../components/slider/Slider";
import recipeImg from "../../assets/images/mock_recipe.svg";
import headerImg from "./../../assets/images/logo-photoshop.svg";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import NavBar  from "../../components/NavBar/NavBar";

const {
  container,
  header,
  link,
  title,
  subTitle,
  h3,
  section_container,
  recipe_day,
  img_header,
} = styles;

export const Home = ({ stateSwipe, loadingSwipe }) => {
  // const [user, setUser] = useState(null);
  const [user, setUser] = useState(null);
  // Enviar el usuario para loguear
  const handdleLogin = () => {
    setUser({'nombre':'Isa'});
  }
  
  return (
    <>
      <NavBar logged={user}></NavBar>
      <main className={container}>
        <h1 className={title}>Matcheá con tu próxima comida</h1>
        <h2 className={subTitle}>
          ¿No sabés qué cocinar hoy? Nosotros te ayudamos a encontrar tu próxima
          receta. {";)"}
        </h2>
        <section className={header}>
          <picture>
            <img src={headerImg} alt="match-menu" className={img_header} />
          </picture>

          <Link to={"swipe"} className={link}>
            ¡Probalo acá!
          </Link>
        </section>

        <section className={section_container}>
          <h3 className={h3}>Mejores Valoradas</h3>
          {stateSwipe?.length > 0 && <Slider data={stateSwipe} />}
        </section>

        <section className={section_container}>
          <h3 className={h3}>Descubrí nuevas recetas</h3>
          {stateSwipe?.length > 0 && <Slider data={stateSwipe} />}
        </section>

        <section className={section_container}>
          <h3 className={h3}>Receta del día</h3>
          <article className={recipe_day}>
            <img src={recipeImg} alt="recipe-img" />
          </article>
        </section>
      </main>
    </>
  );
};
