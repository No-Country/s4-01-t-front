import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./login.css";

import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { Link, redirect } from "react-router-dom";
import  CoverFoto from  "../Images/cover.png";
import ButtonReturn from '../../components/buttons/ButtonReturn/ButtonReturn';


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
      
      if (this.state.successful) {
        redirect('/home');
      }

    }

    render ()
    {
        return (
          <div id="layout" >
            <div id="background-large" className='container-sm background' style={{ backgroundImage:`url(${CoverFoto})` }}>
            <ButtonReturn url='/' color="white" display_breakpoint={{breakpoint: 'md', property: 'block'}} />
            </div>

            <div id='background' className='container-sm background-transparent md-bg-clear'>
              <div id='container'>
                  <div className="mask-content pb-5">
                      <div className='mask-content-top' >
                      <ButtonReturn url='/' color="black" display_breakpoint={{breakpoint: 'md', property: 'none'}} />
                      <div className='visibility'> 
                      <IconContext.Provider  value={{ size: "2rem"}} >
                        <IoArrowBackCircleOutline className="not-in-pc"></IoArrowBackCircleOutline>
                      </IconContext.Provider>
                        </div>
                      </div>
                      
                      <div className='mask-content-btn flex-center flex-grow'>
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
                                  className="btn  btn-gradient rounded-pill  border-field box-shadow"
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
                </div>
              </div>
            </div>
          );
    }
}


export default Login;