import { createSlice } from "@reduxjs/toolkit";
import { instance } from "../axios/axiosConfig";

const likesSlice = createSlice({
  name: "likes",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      const recipeId = action.payload;
      return state.filter((recipe) => recipe !== recipeId);
    },
    getLikes: (state, action) => {
      return action.payload; //ARRAY DE RECETAS
    },
  },
});

export const { add, remove, get } = likesSlice.actions;

export const addLikeAction = (id_user, id_recipe) => (dispatch) => {
  instance
    .post("/likes", { id_recipe, id_user })
    .then(({ data }) => {
      dispatch(add(id_recipe));
    })
    .catch((err) => console.error(err));
};

export const removeLikeAction = (id_user, id_recipe) => (dispatch) => {
  instance
    .put("/likes", { id_recipe, id_user })
    .then(({ data }) => {
      dispatch(remove(id_recipe));
    })
    .catch((err) => console.error(err));
};

export default likesSlice.reducer;
