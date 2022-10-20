import React from "react";
import { Field } from "formik";
import PlusIcon from "../../../assets/icons/plus.svg";
import RemoveIcon from "../../../assets/icons/close.svg";

export const CreateFields = ({ index, name, push, remove, errors, length }) => {
  const condition = name === "RecipeSteps";

  const textAddButton = condition ? "Agregar paso" : "Agregar ingrediente";
  const placeholder = condition ? "Ingresar paso" : "Ingresá un ingrediente";

  return (
    <div key={index} className="create-fields-container">
      <div style={{ display: "flex" }}>
        <Field
          name={`${name}.${index}`}
          placeholder={placeholder}
          type="text"
        />
        {index > 0 && (
          <button
            className="create-recipe__delete-btn"
            onClick={() => remove(index)}
          >
            <img src={RemoveIcon} alt="close" />
          </button>
        )}
      </div>

      {length == index && (
        <button onClick={() => push("")} className="create-recipe__add-btn">
          <img src={PlusIcon} alt="" /> {textAddButton}
        </button>
      )}

      <div className="create-recipe__error">
        <p> {(errors[name] && errors[name][index]) || ""}</p>
      </div>
    </div>
  );
};
