import React from "react";
import { Field, FieldArray, Form, Formik } from "formik";
import { validation } from "./validation";
import { Input_img } from "../../components/create_recipe/input_img/Input_img";
import { MomentDay } from "../../components/create_recipe/checkboxs/MomentDay";
import { Type_food } from "../../components/create_recipe/checkboxs/Type_food";
import { CreateFields } from "../../components/create_recipe/steps_ingredients/CreateFields";
import { Flavors } from "../../components/create_recipe/radio_Inputs/Flavors";
import { Difficulty } from "../../components/create_recipe/radio_Inputs/Difficulty";

import "./createView.css";

export const CreateView = () => {
  return (
    <section className="create-recipe">
      <h2>Crear Receta</h2>
      <Formik
        initialValues={{
          file: null,
          title: "",
          time: "",
          moment: [],
          difficulty: "",
          flavors: "",
          type: [],
          Ingredients: [""],
          RecipeSteps: [""],
        }}
        validationSchema={validation}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, errors, setFieldValue }) => (
          <Form>
            <Input_img
              setFieldValue={setFieldValue}
              values={values}
              errors={errors}
            />

            <article>
              <h3 className="create-recipe--label">Título</h3>
              <Field
                name="title"
                max="3"
                type="text"
                placeholder="Ingresá el título de la receta"
              />
              <div className="create-recipe__error">
                <p> {errors.title && errors.title}</p>
              </div>
            </article>

            <article>
              <h3 className="create-recipe--label">Ingredientes</h3>
              <FieldArray name="Ingredients">
                {({ push, remove }) =>
                  values.Ingredients.map((el, index, arr) => {
                    return (
                      <CreateFields
                        key={index}
                        index={index}
                        name={"Ingredients"}
                        push={push}
                        remove={remove}
                        errors={errors}
                        length={arr.length - 1}
                      />
                    );
                  })
                }
              </FieldArray>
            </article>

            <article>
              <h3>Pasos</h3>
              <div className="">
                <FieldArray name="RecipeSteps">
                  {({ push, remove }) =>
                    values.RecipeSteps.map((el, index, arr) => {
                      return (
                        <CreateFields
                          key={index}
                          index={index}
                          name={"RecipeSteps"}
                          push={push}
                          remove={remove}
                          errors={errors}
                          length={arr.length - 1}
                        />
                      );
                    })
                  }
                </FieldArray>
              </div>
            </article>
            <article>
              <label htmlFor="time">Tiempo</label>
              <br />
              <Field
                style={{ width: "170px" }}
                name="time"
                type="number"
                max="1000"
                placeholder="Ingresar los minutos"
              />
              <div className="create-recipe__error">
                <p> {errors.time && errors.time}</p>
              </div>
            </article>

            <MomentDay errors={errors} />
            <Difficulty errors={errors} />
            <Flavors errors={errors} />
            <Type_food errors={errors} />

            <button
              className={`create-recipe__submit ${
                Object.entries(errors).length !== 0 && "button-disabled"
              }`}
              type="submit"
            >
              Publicar
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};
