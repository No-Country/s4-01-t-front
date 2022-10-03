import { createSlice } from "@reduxjs/toolkit";
import { instance } from "../axios/axiosConfig";

const matchs = createSlice({
  name: "matchs",
  initialState: [],
  reducers: {
    add: (state, action) => {
      // state.push(action.payload)
      return action.payload;
    },
    remove: (state, action) => {
      /* const id = action.payload;
      const newState = state.filter((match) => match.id !== id); */
      return action.payload;
    },
  },
});

export const { add, remove } = matchs.actions;

//HAY QUE VER SI ACTUALIZAMOS REDUX CON LA LISTA ACTUALIZADA QUE DEVUELVE EL BACK O SIMPLEMENTE PUSHEAMOS AL ESTADO LA RECETA NUEVA, YA QUE NO HABRÍA DIFERENCIA. (capaz mejor pushear de a una, pero vemos)

export const addAction = (id_user, id_receta) => (dispatch) => {
  instance
    .post("/addFav", { id_user, id_receta })
    .then(({ data }) => {
      //ACÁ ESTAMOS RECIBIENDO LA LISTA ACTUALIZADA.
      //TAMPOCO HABRÍA DRAMA EN NO RECIBIRLA, YA QUE PODEMOS SIMPLEMENTE PUSHEAR LA RECETA CON EL MATCH
      dispatch(add(data));
    })
    .catch((err) => console.error(err));
};

export const removeAction = (id_user, id_receta) => (dispatch) => {
  instance.put("/recetas", { id_user, id_receta }).then(({ data }) => {
    dispatch(remove(data));
  });
};
