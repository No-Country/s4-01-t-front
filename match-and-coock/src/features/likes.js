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

export const addLikeAction = (AppUserId, RecipeId) => (dispatch) => {
  instance
    .post("/likes", { AppUserId, RecipeId })
    .then(({ data }) => {
      dispatch(add(RecipeId));
    })
    .catch((err) => console.error(err));
};

export const removeLikeAction = (AppUserId, RecipeId) => (dispatch) => {
  instance
    .put("/likes", { AppUserId, RecipeId })
    .then(({ data }) => {
      dispatch(remove(RecipeId));
    })
    .catch((err) => console.error(err));
};

export default likesSlice.reducer;
