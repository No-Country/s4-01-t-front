import React, { Component, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./register.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export const Register2 = () => {
  const [state, setState] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
    successful: false,
  });

  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Este campo es obligatorio."),
    username: Yup.string()
      .test(
        "len",
        "The username must be between 3 and 20 characters.",
        (val) =>
          val && val.toString().length >= 3 && val.toString().length <= 20
      )
      .required("Este campo es obligatorio."),
    email: Yup.string()
      .email("This is not a valid email.")
      .required("Este campo es obligatorio."),
    password: Yup.string()
      .test(
        "len",
        "The password must be between 6 and 40 characters.",
        (val) =>
          val && val.toString().length >= 6 && val.toString().length <= 40
      )
      .required("Este campo es obligatorio."),
    acceptTerms: Yup.bool()
      .test("true", "Checkbox must be activated.", (val) => val === true)
      .required("Este campo es obligatorio."),
  });

  const onChangeFullname = (e) => {
    setState({
      ...state,
      fullname: e.target.value,
    });
  };

  const onChangeUsername = (e) => {
    setState({
      ...state,
      username: e.target.value,
    });
  };

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

  const onConfirmPassword = (e) => {
    setState({
      ...state,
      confirmPassword: e.target.value,
    });
  };

  const onAcceptTerms = (e) => {
    setState({
      ...state,
      acceptTerms: e.target.value,
    });
  };

  const handleRegister = () => {
    /* 
    AGREGAR "POST" HACIA EL BACK
    */
    setState({
      ...state,
      successful: false,
    });
  };

  {
    return (
      <div className="layout">
        <div className="d-flex flex-column ">
          <div className="head ms-4 mt-4">
            <Link to={-1} className="text-black">
              <IconContext.Provider value={{ size: "2rem" }}>
                <div>
                  <IoArrowBackCircleOutline />
                </div>
              </IconContext.Provider>
            </Link>
          </div>
          <div className="register-form">
            <div className="box-title pl-r-30">
              <h3 className="title">
                Registrate y accede a todas las funciones de Match&Cook
              </h3>
            </div>
            <Formik
              initialValues="{this.state}"
              // validationSchema="{this.validationSchema}"
              onSubmit={handleRegister}
            >
              {({ resetForm }) => (
                <Form className="pl-r-30">
                  <div className="form-group mb-4">
                    <label htmlFor="email"> Correo eletronico </label>
                    <Field
                      name="email"
                      type="email"
                      className="form-control rounded-pill gry form-field"
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
                    <label>Nombre y apellido</label>
                    <Field
                      name="fullname"
                      type="text"
                      className="form-control rounded-pill gry form-field"
                      placeholder="Ingresá tu nombre y apellido"
                      onChange={onChangeFullname}
                    />
                    <ErrorMessage
                      name="fullname"
                      component="div"
                      className="text-danger"
                    />
                  </div>

                  <div className="form-group mb-4">
                    <label htmlFor="username">Nome de usuario</label>
                    <Field
                      name="username"
                      type="text"
                      className="form-control rounded-pill gry form-field"
                      placeholder="Ingresá tu nombre de usuario"
                      onChange={onChangeUsername}
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="text-danger"
                    />
                  </div>

                  <div className="form-group mb-4">
                    <label htmlFor="password">Contraseña</label>
                    <Field
                      name="password"
                      type="password"
                      className="form-control rounded-pill gry form-field"
                      placeholder="Ingresá tu contraseña"
                      onChange={onChangePassword}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-danger"
                    />
                  </div>

                  <div className="form-group mb-4">
                    <label htmlFor="confirmPassword">Repetir Contraseña</label>
                    <Field
                      name="confirmPassword"
                      type="password"
                      className="form-control rounded-pill gry form-field"
                      placeholder="Repetí tu contraseña"
                      onChange={onConfirmPassword}
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-danger"
                    />
                  </div>

                  <div className="form-group  mb-4 form-check">
                    <Field
                      name="acceptTerms"
                      type="checkbox"
                      className="form-check-input rounded-pill gry"
                      onChange={onAcceptTerms}
                    />
                    <label htmlFor="acceptTerms" className="form-check-label">
                      I have read and agree to the Terms
                    </label>
                    <ErrorMessage
                      name="acceptTerms"
                      component="div"
                      className="text-danger"
                    />
                  </div>

                  <div className="form-group flex-btn mb-4">
                    <button
                      type="submit"
                      className=" btn btn btn-gradient  rounded-30 border-field w-100 "
                    >
                      Registrarse
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    );
  }
};
