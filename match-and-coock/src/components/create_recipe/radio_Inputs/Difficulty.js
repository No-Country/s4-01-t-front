import { Field } from "formik";
import React from "react";

export const Difficulty = ({ errors }) => {
  return (
    <article role="group" aria-labelledby="my-radio-group">
      <h3>Dificultad</h3>
      <label className="radio-label">
        <Field type="radio" name="difficulty" value="1" />
        Fácil
      </label>
      <label className="radio-label">
        <Field type="radio" name="difficulty" value="2" />
        Intermedio
      </label>
      <label className="radio-label">
        <Field type="radio" name="difficulty" value="3" />
        Difícil
      </label>
      <div className="create-recipe__error">
        <p> {errors.difficulty && errors.difficulty}</p>
      </div>
    </article>
  );
};
