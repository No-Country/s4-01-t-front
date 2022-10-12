import "bootstrap/dist/css/bootstrap.min.css";
import "./cover.css";
import CoverFoto from "./Images/cover.png";
import Logo from "./Images/Logo.png";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Cover = () => {
  return (
    <>
      <div id="layout">
        <div
          id="background-large"
          className="container-sm background d-none d-md-block"
          style={{ backgroundImage: `url(${CoverFoto})` }}
        ></div>
        <div
          id="background"
          className="container-sm background md-bg-clear"
          style={{ backgroundImage: `url(${CoverFoto})` }}
        >
          <div id="container">
            <div className="mask-content pb-5">
              <div className="mask-content-top ">
                <Link to={"/swipe"}>
                  <IconContext.Provider
                    value={{ size: "2rem", color: "#FFFFFF" }}
                  >
                    <IoArrowBackCircleOutline></IoArrowBackCircleOutline>
                  </IconContext.Provider>
                </Link>

                <div className="">
                  <img src={Logo} className="" alt="logo" />
                </div>
                <div className="visibility">
                  <IconContext.Provider
                    value={{ size: "2rem", color: "#FFFFFF" }}
                  >
                    <IoArrowBackCircleOutline></IoArrowBackCircleOutline>
                  </IconContext.Provider>
                </div>
              </div>

              <div className="mask-content-btn flex-center">
                {/*Ingresar*/}
                <div className="form-group w-100 mw-1">
                  {/* <Link to={"/login"} className=''> */}
                  <Link
                    to={"login"}
                    className="text-white btn btn-gradient border-field box-shadow w-100"
                  >
                    Ingresar
                  </Link>
                  {/* </Link> */}
                </div>

                <p className="text-white mb-2 mt-2"> o </p>
                {/*Registrar*/}
                <div className="form-group w-100 mw-1">
                  {/* <Link to={"/register"} className=''> */}
                  <Link
                    to={"register"}
                    className=" btn btn btn-outline-light rounded-30 border-field w-100"
                  >
                    Registrarse
                  </Link>
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
  );
};
export default Cover;
