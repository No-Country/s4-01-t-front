import "bootstrap/dist/css/bootstrap.min.css";
import "./cover.css";
import  CoverFoto from  "../../Images/cover.png";
import Logo from "../../Images/Logo.png"
import LogoDark from "../../Images/LogoDark.png"
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import ButtonReturn from '../../../components/buttons/ButtonReturn/ButtonReturn';
import ButtonRegister from '../../../components/buttons/ButtonRegister/ButtonRegister';
import ButtonLogin from '../../../components/buttons/ButtonLogin/ButtonLogin';

const Cover = () => {
    return (
        <>
        
        <div id="layout" >
        
            <div id="background-large" className='container-sm background' style={{ backgroundImage:`url(${CoverFoto})` }}>
                <ButtonReturn url='/' color="white" display_breakpoint={{breakpoint: 'md', property: 'block'}} />
            </div>

            <div id='background' className='container-sm background md-bg-clear' style={{ backgroundImage:`url(${CoverFoto})` }}>
                    <div id='container'>
                        <div className="mask-content pb-5 justify-content-beetween">
                            <div className='mask-content-top' >
                                <ButtonReturn url='/' color="white" display_breakpoint={{breakpoint: 'md', property: 'none'}} />
                                <div className="logo-container">
                                        <img
                                            src={Logo}
                                            className="logo"
                                            alt="logo"
                                        />
                                        <img
                                            src={LogoDark}
                                            className="logo-dark"
                                            alt="logo"
                                        />
                                </div>
                            </div>
                            
                            <div className='mask-content-btn flex-center pb-3'>
                                {/*Ingresar*/}
                                <div className="form-group w-100 mw-1">
                                    <ButtonLogin />   
                                </div>
                        
                                <p className='text-white mb-2 mt-2'> o </p>
                                {/*Registrar*/}
                                <div className="form-group w-100 mw-1">
                                <ButtonRegister />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
        
        </>
  
    )
}
export default Cover