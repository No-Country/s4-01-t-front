import { Field } from "formik";
import React from "react";
import { checksNames } from "./checkboxNames";

import "./checkboxs.css";

export const MomentDay = ({ errors, values }) => {
  return (
    <article>
      <h3>Momento del Día</h3>
      <div className="checkbox-container">
        {checksNames.map(({ name, id }) => {
          return (
            <label className="checkbox-container__label" key={name}>
              <Field
                type="checkbox"
                name="moment"
                value={String(id)}
                className="checkbox-container__input"
              />
              {name}
            </label>
          );
        })}
      </div>
      <div className="create-recipe__error">
        <p> {errors.moment && errors.moment}</p>
      </div>
    </article>
  );
};
