import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./cover.css";
import  CoverFoto from  "./Images/cover.png";
import Logo from "./Images/Logo.png"
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
// import { Link } from "react-router-dom";


const Cover = () => {
    return (
        <>
        
        <div id="layout" >
            <div id="background-large" className='container-sm background d-none d-md-block' style={{ backgroundImage:`url(${CoverFoto})` }}>


            </div>
            <div id='background' className='container-sm background md-bg-clear' style={{ backgroundImage:`url(${CoverFoto})` }}>
                    <div id='container'>
                        <div className="mask-content pb-5">
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
                                <div className='visibility'> 
                                <IconContext.Provider  value={{ size: "2rem", color: "#FFFFFF"}} >
                                        <IoArrowBackCircleOutline></IoArrowBackCircleOutline>
                                    </IconContext.Provider>
                                </div>
                            </div>
                            
                            <div className='mask-content-btn flex-center'>
                                {/*Ingresar*/}
                                <div className="form-group w-100 mw-1">
                                    {/* <Link to={"/login"} className=''> */}
                                        <button type="submit" className=" btn btn-gradient border-field box-shadow w-100">
                                            Ingresar
                                        </button>
                                    {/* </Link> */}
                                </div>
                        
                                <p className='text-white mb-2 mt-2'> o </p>
                                {/*Registrar*/}
                                <div className="form-group w-100 mw-1">
                                    {/* <Link to={"/register"} className=''> */}
                                        <button type="submit" className=" btn btn btn-outline-light rounded-30 border-field w-100">
                                            Registrarse
                                        </button>
                                    {/* </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
        
        </>

    //     <div className="container-sm">
    //         <div className='container-cover' >
        
    //             <div className="bg-image">
    //                 <img className='100vw bg-100vh'
    //                 src={CoverFoto}
    //                 alt="panquecas"
    //                 />
                    
    //             </div> 
    //     </div>
    //   </div>
  
    )
}
export default Cover