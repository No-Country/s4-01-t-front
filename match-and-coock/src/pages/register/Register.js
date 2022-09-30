import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./register.css";

import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
class Register extends Component
{
    constructor (props)
    {
        super(props);
        this.initialValues = {
          fullname: '',
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          acceptTerms: false,
          
        };

        this.validationSchema = Yup.object().shape({
          username: Yup.string()
            .test(
              "len",
              "The username must be between 3 and 20 characters.",
              (val) =>
                val &&
                val.toString().length >= 3 &&
                val.toString().length <= 20
            )
            .required("This field is required!"),
          email: Yup.string()
            .email("This is not a valid email.")
            .required("This field is required!"),
          password: Yup.string()
            .test(
              "len",
              "The password must be between 6 and 40 characters.",
              (val) =>
                val &&
                val.toString().length >= 6 &&
                val.toString().length <= 40
            )
            .required("This field is required!"),
            acceptTerms: Yup.bool()
            .test(
              "true",
              "Checkbox must be activated.",
              (val) =>
                val === true
            )
            .required("This field is require")
        });
    }

    handleSubmit =  () => {
      console.log("submit");
    }

    render ()
    {
        return (
            <div>
            <div className="head ms-4 mt-4">
            <IconContext.Provider  value={{ size: "2rem"}} >
              <div >
                <IoArrowBackCircleOutline></IoArrowBackCircleOutline>
              </div>
              </IconContext.Provider>
            </div>
            <div className="m-4">
            <div className="register-form">
            
            <div className="box-title">
              <h3  className="title">Registrate y accede a todas las funciones de Match&Cook</h3>
            </div>
        <Formik
          initialValues={this.initialValues}
          validationSchema={this.validationSchema}
          onSubmit={this.handleSubmit}
        >
          {({ resetForm }) => (
            <Form>
            <div className="form-group">
                <label htmlFor="email"> Correo eletronico </label>
                <Field name="email" type="email" className="form-control rounded-pill gry form-field" placeholder="Ingresá tu correo electrónico" pattern='.' />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="form-group">
                <label>Nombre y apellido</label>
                <Field name="username" type="text"  className="form-control rounded-pill gry form-field" placeholder="Ingresá tu nombre y apellido" pattern='.' />
                <ErrorMessage
                  name="fullname"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="form-group">
                <label htmlFor="username">Nome de usuario</label>
                <Field name="username" type="text"  className="form-control rounded-pill gry form-field" placeholder="Ingresá tu nombre de usuario" pattern='.'/>
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-danger"
                />
              </div>

             

              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <Field
                  name="password"
                  type="password"
                  className="form-control rounded-pill gry form-field" placeholder="Ingresá tu contraseña" pattern='.'
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Repetir Contraseña</label>
                <Field
                  name="confirmPassword"
                  type="password"
                  className="form-control rounded-pill gry form-field" placeholder="Repetí tu contraseña" pattern='.'
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-danger"
                />
              </div>

              <div className="form-group form-check">
                <Field
                  name="acceptTerms"
                  type="checkbox"
                  className="form-check-input rounded-pill gry"
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
          
              <div className="form-group flex-btn">
                <button type="submit" className="btn btn-gradient rounded-pill ">
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
}


export default Register;