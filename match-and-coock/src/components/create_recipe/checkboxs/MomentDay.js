import { Field } from "formik";
import React from "react";
import { checksNames } from "./checkboxNames";

import "./checkboxs.css";

export const MomentDay = ({ errors }) => {
  return (
    <article>
      <h3>Momento del Día</h3>
      <div className="checkbox-container">
        {checksNames.map((check) => (
          <label className="checkbox-container__label" key={check}>
            <Field
              type="checkbox"
              name="moment"
              value={check}
              className="checkbox-container__input"
            />
            {check}
          </label>
        ))}
      </div>
      <div className="create-recipe__error">
        <p> {errors.moment && errors.moment}</p>
      </div>
    </article>
  );
};
