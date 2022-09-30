import React from "react";
import { Slider } from "../../components/slider/Slider";
import { useFetch } from "../../hooks/useFetch";

import recipeImg from "../../assets/images/mock_recipe.svg";
import headerImg from "./../../assets/images/headerFood.svg";
import styles from "./home.module.css";
import { Link } from "react-router-dom";

const {
  container,
  header,
  link,
  title,
  subTitle,
  h3,
  section_container,
  recipe_day,
} = styles;

export const Home = () => {
  const { loading, state } = useFetch("/food");

  return (
    <main className={container}>
      <h1 className={title}>Matcheá con tu próxima comida</h1>
      <h2 className={subTitle}>
        ¿No sabés qué cocinar hoy? Nosotros te ayudamos a encontrar tu próxima
        receta. {";)"}
      </h2>
      <section className={header}>
        <picture>
          <img src={headerImg} alt="match-menu" />
        </picture>
        
          <a href="#" className={link}>
            ¡Probalo acá!
          </a>
        
        
      </section>

      <section className={section_container}>
        <h3 className={h3}>Mejores Valoradas</h3>
        {state?.length > 0 && <Slider data={state} />}
      </section>

      <section className={section_container}>
        <h3 className={h3}>Descubrí nuevas recetas</h3>
        {state?.length > 0 && <Slider data={state} />}
      </section>

      <section className={section_container}>
        <h3 className={h3}>Receta del día</h3>
        <article className={recipe_day}>
          <img src={recipeImg} alt="recipe-img" />
        </article>
      </section>
    </main>
  );
};
