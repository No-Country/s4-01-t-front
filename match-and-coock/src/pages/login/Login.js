import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./login.css";

import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

class Login extends Component
{
    constructor (props)
    {
        super(props);
        this.initialValues = {
          email: '',
          password: ''
        };

        this.validationSchema = Yup.object().shape({
          email: Yup.string()
            .email("El correo electrónico es inválido.")
            .required("Este campo es obligatorio."),
          password: Yup.string()
            .test(
              "len",
              "The password must be between 6 and 40 characters.",
              (val) =>
                val &&
                val.toString().length >= 6 &&
                val.toString().length <= 40
            )
            .required("Este campo es obligatorio."),
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
            <Link to={"/cover"} className='text-black'>
              <IconContext.Provider  value={{ size: "2rem"}} >
                <IoArrowBackCircleOutline></IoArrowBackCircleOutline>
                
              </IconContext.Provider>
            </Link>
           
            </div>
            <div className="m-4">
            <div className="login-form">
            
            <div className="box-title">
              <h3  className="title">Ingresá a tu cuenta</h3>
            </div>
        <Formik
          initialValues={this.initialValues}
          validationSchema={this.validationSchema}
          onSubmit={this.handleSubmit}
        >
          {({ resetForm }) => (
            <Form>
            <div className="form-group mb-4">
                <label htmlFor="email"> Correo eletronico </label>
                <Field name="email" type="email" className="form-control form-field" placeholder="Ingresá tu correo electrónico" />
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
                  className="form-control  form-field" placeholder="Ingresá tu contraseña"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="form-group flex-btn mt-5">
                <button type="submit" className="btn btn-gradient rounded-pill  border-field box-shadow">
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
    }
}


export default Login;