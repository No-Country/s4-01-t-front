import React from "react";
import { useParams } from "react-router-dom";
import { FormComponent } from "../../components/create_recipe/FormComponent/FormComponent";
import { useFetch } from "../../hooks/useFetch";
import { putData } from "../../services/putData";

export const Edite_recipe = () => {
  const { id } = useParams();

  const { state } = useFetch("recipe");
  /*  AGREGAR ID  Y SACAR LOS DATOS DEL STATE PARA RELLENAR EL INITIALVALUES*/

  const initialValues = {
    file: null,
    title: "ale",
    time: "212",
    moment: ["Desayuno"],
    difficulty: "Fácil",
    flavors: "Dulce",
    type: ["Keto"],
    Ingredients: ["Camaron", "remolacha"],
    RecipeSteps: ["prender fuego", "apagar fuego"],
  };

  return (
    <section className="create-recipe">
      <h2>Editar receta</h2>
      {state?.length > 0 ? (
        <FormComponent
          initialValues={initialValues}
          userId={id}
          idRecipe={state.id}
          method={putData}
        />
      ) : (
        "cargando"
      )}
    </section>
  );
};
