import { createSlice } from "@reduxjs/toolkit";
import { instance } from "../axios/axiosConfig";

const matchSlice = createSlice({
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
    getMatchs: (state, action) => {
      return action.payload;
      //SE LLAMA AL INICIAR LA APP PARA TOMAR LOS MATCHS QUE TIENE EL USUARIO DESDE EL LOGIN
    },
  },
});

export const { add, remove } = matchSlice.actions;

//HAY QUE VER SI ACTUALIZAMOS REDUX CON LA LISTA ACTUALIZADA QUE DEVUELVE EL BACK O SIMPLEMENTE PUSHEAMOS AL ESTADO LA RECETA NUEVA, YA QUE NO HABRÍA DIFERENCIA. (capaz mejor pushear de a una, pero vemos)

export const addMatchAction = (id_user, id_receta) => (dispatch) => {
  instance
    .post("/addFav", { id_user, id_receta })
    .then(({ data }) => {
      //Recibimos la lista actualizada
      dispatch(add(data));
    })
    .catch((err) => console.error(err));
};

export const removeMatchAction = (id_user, id_receta) => (dispatch) => {
  instance.put("/recetas", { id_user, id_receta }).then(({ data }) => {
    dispatch(remove(data));
    //Recibimos las lista actualizada
  });
};

export default matchSlice.reducer;
