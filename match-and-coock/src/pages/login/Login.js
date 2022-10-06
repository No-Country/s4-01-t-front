import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./login.css";
import { login } from '../../actions/auth';

import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { Link, redirect } from "react-router-dom";


class Login extends Component
{
    constructor (props)
    {
        super(props);
        this.state = {
          email: '',
          password: '',
          successful: false
        };

        this.validationSchema = Yup.object().shape({
          email: Yup.string()
            .email("El correo electrónico es inválido.")
            .required("Este campo es obligatorio."),
          password: Yup.string().required('Este campo es obligatorio.'),
          passwordConfirmation: Yup.string()
             .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
        });

        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    }

    onChangeEmail(e) {
      this.setState({
        email: e.target.value,
      });
    }
  
    onChangePassword(e) {
      this.setState({
        password: e.target.value,
      });
    }

    handleLogin =  () => {

      this.setState({
        successful: false,
      });
      
      this.props
        .dispatch(
          login(this.state.email, this.state.password)
        )
        .then(() => {
          this.setState({
            successful: true,
          });
        })
        .catch(() => {
          this.setState({
            successful: false,
          });
        });
      
      if (this.state.successful) {
        redirect('/home');
      }

    }

    render ()
    {
        return (
          <div className="layout">
          <div className="d-flex flex-column">
            <div className="head ms-4 mt-4">
              <Link to="/cover" className="text-black">
                <IconContext.Provider value={{size: "2rem"}}>
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
                onSubmit={this.handleLogin}
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
                      onChange={this.onChangeEmail}

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
                      onChange={this.onChangePassword}

                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  { this.state.message !== '' && (
                  <ErrorMessage name="server" component="div" className="text-danger">
                    { this.state.message }
                  </ErrorMessage>
                  ) }
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
    }
}


export default Login;