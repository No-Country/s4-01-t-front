import axios from "axios";
import { Field, FieldArray, Form, Formik } from "formik";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAlert } from "../../alerts/alerts";
import { MomentDay } from "../checkboxs/MomentDay";
import { Type_food } from "../checkboxs/Type_food";
import { Input_img } from "../input_img/Input_img";
import { Difficulty } from "../radio_Inputs/Difficulty";
import { Flavors } from "../radio_Inputs/Flavors";
import { CreateFields } from "../steps_ingredients/CreateFields";
import { validation } from "./validation";

export const FormComponent = ({ initialValues, method }) => {
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const changeNavigate = () => navigate("/");

  /* const handle = (e) => {
    setImg(URL.createObjectURL(e.target.files[0]));
    const formData = new FormData();
    formData.append("fileupload", e.target.files[0]);
    setfirst(formData.get("fileupload"));
  };
 */
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={({
        time,
        title,
        file,
        moment,
        difficulty,
        flavors,
        type,
        Ingredients,
        RecipeSteps,
      }) => {
        createAlert(navigate);
        try {
          method("/create", {
            PreparationTime: time,
            RecipeTitle: title,
            Ingredients,
            Recipe_DietTypes: type,
            Recipe_TimesOfDay: moment,
            RecipePicturePath: file,
            RecipeSteps,
            DifficultyLevelId: difficulty,
            FlavorId: flavors,
            AppUserId: user.id,
          });
        } catch (error) {
          console.error(error);
        }
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
  );
};
