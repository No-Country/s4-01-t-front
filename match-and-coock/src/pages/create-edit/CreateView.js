import React from "react";

import "./createView.css";
import { FormComponent } from "../../components/create_recipe/FormComponent/FormComponent";

export const CreateView = () => {
  const initialValues = {
    file: null,
    title: "",
    time: "",
    moment: [],
    difficulty: "",
    flavors: "",
    type: [],
    Ingredients: [""],
    RecipeSteps: [""],
  };
  return (
    <section className="create-recipe">
      <h2>Crear Receta</h2>
      <FormComponent initialValues={initialValues} />
    </section>
  );
};
