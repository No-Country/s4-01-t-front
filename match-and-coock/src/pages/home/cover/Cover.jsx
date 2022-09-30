import 'bootstrap/dist/css/bootstrap.min.css';
import "./cover.css";
import  CoverFoto from  "./Images/cover.png";
import Logo from "./Images/Logo.png"
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Cover = () => {
    return (
        <div className='content-cover'>
            <div className="bg-image">
                <img
                src={CoverFoto}
                className="mw-100 mh-100"
                alt="panquecas"
                />
                <div className="mask" >
                    <div className="mask-content mt-4 mx-4 pb-5">
                        <div className='mask-content-top ' >
                            
                                <IconContext.Provider  value={{ size: "2rem", color: "#FFFFFF"}} >
                                    <IoArrowBackCircleOutline></IoArrowBackCircleOutline>
                                </IconContext.Provider>
                           
                            <div className="">
                                    <img
                                        src={Logo}
                                        className=""
                                        alt="logo"
                                                />
                            </div>
                            <div className='none'> 
                            <IconContext.Provider  value={{ size: "2rem", color: "#FFFFFF"}} >
                                    <IoArrowBackCircleOutline></IoArrowBackCircleOutline>
                                </IconContext.Provider></div>
                        </div>
                        <div className='mask-content-btn flex-center mb-6'>
                        {/*Ingresar*/}
                        
                            <div className="form-group w-100">
                                <Link to={"/login"} className=''>
                                    <button type="submit" className=" btn btn-gradient rounded-pill  border-field box-shadow w-100">
                                        Ingresar
                                    </button>
                                </Link>
                            </div>
                       
                            <p className='text-white mb-2 mt-2'> o </p>
                        {/*Registrar*/}
                        <div className="form-group w-100">
                            <Link to={"/register"} className=''>
                                <button type="submit" className=" btn btn btn-outline-light rounded-pill  border-field box-shadow w-100">
                                    Registrarse
                                </button>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}
export default Cover