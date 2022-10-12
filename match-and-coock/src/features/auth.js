import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { instance } from "../axios/axiosConfig";

const initialState = null;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      return action.payload;
    },
    logout: (state) => {
      return null;
    },
    register: () => {},
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export const loginAction = (email, password, getStatus) => async (dispatch) => {
  instance
    .post("/login", {
      //completar con el path correspondiente
      email,
      password,
    })
    .then(({ data }) => {
      dispatch(data);
      getStatus(true);
    })
    .catch((err) => {
      //podemos lanzar alerta (sweatAlert2) o recibir una funcion para actualizar el estado de errores del formulario y así mostrarlo en ese componente.
      console.log(err);
      console.error(err);
      getStatus(false, err.message);
    });
};

const registerAction = (data) => (dispatch) => {
  instance
    .post("/register", data)
    .then(({ data }) => {
      //PODEMOS HACER EL LOGIN DIRECTAMENTE O  CONFIRMAR EL REGISTRO Y REEDIRIGIR A LOGIN.
      console.log(data);
    })
    .catch((error) => {
      /*  console.error(error); */
      //PODEMOS RECIBIR APARTE DE DATA, UNA FUNCION PARA MOSTRAR EL ERROR EN LA VISTA DE REGISTRO.
    });
};

export default authSlice.reducer;
