import React from "react";
import { Link } from "react-router-dom";
import "./ButtonRegister.css";

function ButtonRegister() {
  return (
    <div>
      <div className="form-group w-100 mw-1">
        <Link to={"/auth/register"}>
          <button
            type="submit"
            className="btn btn-outline-light rounded-30 border-field w-100 white-to-black-md"
          >
            Registrarse
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ButtonRegister;
