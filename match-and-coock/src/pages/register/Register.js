import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./register.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { Link, redirect } from "react-router-dom";
import  CoverFoto from  "../Images/cover.png";
import ButtonReturn from '../../components/buttons/ButtonReturn/ButtonReturn';


class Register extends Component
{
    constructor (props)
    {
        super(props);
        this.state = {
          fullname: '',
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          acceptTerms: false,
          successful: false
        };

        this.validationSchema = Yup.object().shape({
          fullname: Yup.string().required("Este campo es obligatorio."),
          username: Yup.string().test(
              "len",
              "The username must be between 3 and 20 characters.",
              (val) =>
                val &&
                val.toString().length >= 3 &&
                val.toString().length <= 20
            ).required("Este campo es obligatorio."),
          email: Yup.string().email("This is not a valid email.").required("Este campo es obligatorio."),
          password: Yup.string().test(
              "len",
              "The password must be between 6 and 40 characters.",
              (val) =>
                val &&
                val.toString().length >= 6 &&
                val.toString().length <= 40
            ).required("Este campo es obligatorio."),
          acceptTerms: Yup.bool().test(
              "true",
              "Checkbox must be activated.",
              (val) =>
                val === true
            ).required("Este campo es obligatorio.")
        });

        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeFullname = this.onChangeFullname.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onConfirmPassword = this.onConfirmPassword.bind(this);
        this.onAcceptTerms = this.onAcceptTerms.bind(this);
    }

    onChangeFullname(e) {
      this.setState({
        fullname: e.target.value,
      });
    }

    onChangeUsername(e) {
      this.setState({
        username: e.target.value,
      });
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

    onConfirmPassword(e) {
      this.setState({
        confirmPassword: e.target.value,
      });
    }

    onAcceptTerms(e) {
      this.setState({
        acceptTerms: e.target.value,
      });
    }

    handleRegister =  () => {
      this.setState({
        successful: false,
      });
        
    }

    render ()
    {
        return (
          <div className="layout">
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

                  <div className='mask-content-btn flex-center'>
                    <div className="register-form">
                      <div className="box-title pl-r-30">
                        <h3 className="title">Registrate y accede a todas las funciones de
                        Match&Cook</h3>
                      </div>
                      <Formik
                        initialValues="{this.state}"
                        validationSchema={this.validationSchema}
                        onSubmit={this.handleRegister}
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
                                onChange={this.onChangeEmail}
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
                                onChange={this.onChangeFullname}
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
                                onChange={this.onChangeUsername}
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
                                onChange={this.onChangePassword}
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
                                onChange={this.onConfirmPassword}
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
                                onChange={this.onAcceptTerms}
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
              </div>
            </div>
          </div>
        );
    }
}

export default Register;