import { Field } from "formik";
import React from "react";

export const Flavors = ({ errors }) => {
  return (
    <article role="group" aria-labelledby="my-radio-group">
      <h3>Sabores</h3>
      <label className="radio-label">
        <Field type="radio" name="flavors" value="1" />
        Dulce
      </label>
      <label className="radio-label">
        <Field type="radio" name="flavors" value="3" />
        Agridulce
      </label>
      <label className="radio-label">
        <Field type="radio" name="flavors" value="2" />
        Salado
      </label>
      <div className="create-recipe__error">
        <p> {errors.flavors && errors.flavors}</p>
      </div>
    </article>
  );
};
