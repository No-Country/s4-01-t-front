import React, { Component, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";

import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { Link, redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../../../features/auth";

export const Login2 = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    successful: false,
    error: null,
  });

  const getStatus = (boolean, error) => {
    if (boolean) {
      setState({ ...state, successful: true });
    } else {
      setState({ ...state, error });
    }
  };

  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("El correo electrónico es inválido.")
      .required("Este campo es obligatorio."),
    password: Yup.string().required("Este campo es obligatorio."),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Las contraseñas no coinciden"
    ),
  });

  const onChangeEmail = (e) => {
    setState({
      ...state,
      email: e.target.value,
    });
  };

  const onChangePassword = (e) => {
    setState({
      ...state,
      password: e.target.value,
    });
  };

  const handleLogin = () => {
    /*    setState({
      ...state,
      successful: false,
    }); */

    dispatch(loginAction(state.email, state.password, getStatus));

    /*  if (state.successful) {
      redirect("/home");
    } */
  };

  return (
    <div className="layout">
      <div className="d-flex flex-column">
        <div className="head ms-4 mt-4">
          <Link to={-1} className="text-black">
            <IconContext.Provider value={{ size: "2rem" }}>
              <IoArrowBackCircleOutline />
            </IconContext.Provider>
          </Link>
        </div>
        <div className="login-form">
          <div className="box-title pl-r-30">
            <h3 className="title">Ingresá a tu cuenta</h3>
          </div>
          <Formik
            initialValues="{this.initialValues}"
            // validationSchema="{this.validationSchema}"
            onSubmit={handleLogin}
          >
            {({ resetForm }) => (
              <Form className="pl-r-30">
                <div className="form-group mb-4">
                  <label htmlFor="email"> Correo eletronico </label>
                  <Field
                    name="email"
                    type="email"
                    className="form-control form-field"
                    placeholder="Ingresá tu correo electrónico"
                    onChange={onChangeEmail}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="password">Contraseña</label>
                  <Field
                    name="password"
                    type="password"
                    className="form-control  form-field"
                    placeholder="Ingresá tu contraseña"
                    onChange={onChangePassword}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                </div>
                {state.message !== "" && (
                  <ErrorMessage
                    name="server"
                    component="div"
                    className="text-danger"
                  >
                    {state.message}
                  </ErrorMessage>
                )}
                <div className="form-group flex-btn mt-5 mb-4">
                  <button
                    type="submit"
                    className="btn btn-gradient rounded-pill  border-field box-shadow"
                  >
                    Ingresar
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
