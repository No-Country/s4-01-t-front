import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Offcanvas, Button } from 'react-bootstrap';  
import {LinkContainer} from 'react-router-bootstrap'
import Logo from "../../pages/Images/LogoDark.png"
import Fork from "./Images/Fork.svg";
import Heart from "./Images/Heart.svg" ;
import Logout from "./Images/Logout.svg";
import Save from "./Images/Save.svg";
import Add from "./Images/Add.svg"
import User from "./Images/User.svg"
import "./NavBar.css";
import ButtonRegister from '../buttons/ButtonRegister/ButtonRegister';
import ButtonLogin from '../buttons/ButtonLogin/ButtonLogin';


const NavBar = ({logged}) => {
    const className = logged ? '' : 'd-md-none';
  return (
    <div >
    <Navbar expand={false}>
    <Container fluid> 
        <Link>
            <Navbar.Brand to="/" ><img src={Logo} alt ="#"/></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="offcanvasNavbar" className={className} />
            <Navbar.Offcanvas  
                id="offcanvasNavbar"  
                aria-labelledby="offcanvasNavbarLabel"  
                placement="end" 
                className="hide-pc"  >  
                    <Offcanvas.Header closeButton>  
                        <Offcanvas.Title id="offcanvasNavbarLabel"><img src={Logo} alt="#"/></Offcanvas.Title>  
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="mr-auto">
                            {logged && (
                                <>
                                    <LinkContainer to="/login">
                                        <Nav.Link  className="fw-bolder d-flex flex-row"> 
                                            <p className=''>Mi cuenta</p>
                                            <span className= "ms-2"><img src={User} alt="#"/></span> 
                                    </Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/about">
                                        <Nav.Link  className="fw-bolder d-flex flex-row">
                                        <p className=''>Mis recetas creadas</p>
                                            <span className= "ms-2"><img src={Fork} alt="#"/></span> 
                                        </Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/about">
                                        <Nav.Link  className="fw-bolder d-flex flex-row">
                                            <p className=''>Crear Recetas</p>
                                            <span className= "ms-2"><img src={Add} alt="#"/></span>
                                        </Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/about">
                                        <Nav.Link className="fw-bolder d-flex flex-row">
                                            <p className=' '>Mis recetas likeadas</p>
                                            <span><img src={Heart} alt="#"/></span>
                                        </Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/about">
                                        <Nav.Link className="fw-bolder d-flex flex-row">
                                        <p className=''>Mi favoritos</p>
                                        <span className= "ms-2"><img src={Save} alt="#"/></span>
                                        </Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/about">
                                        <Nav.Link className="fw-bolder d-flex flex-row">
                                        <p className=' '>Cerrar sesión</p>
                                        <span className= "ms-2"><img src={Logout} alt="#"/></span></Nav.Link>
                                    </LinkContainer>
                                </>
                            )}
                            {!logged && (
                                <>
                                    <LinkContainer to="/login">
                                        <Nav.Link className="fw-bolder d-flex flex-row">
                                        <p className=''>Ingresar</p>
                                        <span className= "ms-2"><img src={User} alt="#"/></span>
                                        </Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/register">
                                        <Nav.Link className="fw-bolder d-flex flex-row">
                                        <p className=' '>Registrarse</p>
                                        <span className= "ms-2"><img src={Logout} alt="#"/></span></Nav.Link>
                                    </LinkContainer>
                                </>
                            )}
                        </Nav>
                    </Offcanvas.Body>
            </Navbar.Offcanvas>
      {!logged && (
        <>
            <div className='desktop-btns'>
                <ButtonLogin />
                <ButtonRegister />
            </div>
        </>
      )}
    </Container>
    </Navbar>
    </div>
  )
   
   
  
}
export default NavBar