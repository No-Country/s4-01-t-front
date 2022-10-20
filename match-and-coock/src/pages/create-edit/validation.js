import * as Yup from "yup";
const supported_format = ["image/jpg", "image/jpeg", "image/png", "image/webp"];

const ingredeintsSchema = Yup.string().min(2, "Mínimo 2 caracteres");

export const validation = (steps, RecipeSteps) =>
  Yup.object().shape({
    file: Yup.mixed()
      .nullable()
      .required("Campo requerido")
      .test(
        "Formato de Imagen",
        "El archivo no es compatible",
        (value) => !value || (value && supported_format.includes(value?.type))
      ),
    title: Yup.string()
      .required("El título es requerido")
      .min(3, "Título muy corto")
      .max(30, "Título muy largo"),
    time: Yup.number()
      .required("Requerido")
      .max(999, "Máximo 999 minutos")
      .min(1, "Mínimo 1 minuto"),

    difficulty: Yup.string().required("Campo requerido"),
    flavors: Yup.string().required("Campo requerido"),
    moment: Yup.array().min(1, "Debe elegir al menos una opción"),
    type: Yup.array().min(1, "Debe elegir al menos una opción"),
    Ingredients: Yup.array(
      Yup.string()
        .min(3, "Mínimo de 3 strings")
        .required("Ingrediente requerido")
    ),
    RecipeSteps: Yup.array(
      Yup.string().min(3, "Mínimo de 3 strings").required("Paso requerido")
    ),
  });
