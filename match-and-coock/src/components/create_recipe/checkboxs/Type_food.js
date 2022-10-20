import { Field } from "formik";
import React from "react";
import { types_food } from "./checkboxNames";

export const Type_food = ({ errors }) => {
  return (
    <article>
      <h3>Tipo de Alimentación</h3>
      <div className="checkbox-container">
        {types_food.map((type) => (
          <label className="checkbox-container__label" key={type}>
            <Field
              type="checkbox"
              name="type"
              value={type}
              className="checkbox-container__input"
            />
            {type}
          </label>
        ))}
      </div>
      <div className="create-recipe__error">
        <p> {errors.type && errors.type}</p>
      </div>
    </article>
  );
};
