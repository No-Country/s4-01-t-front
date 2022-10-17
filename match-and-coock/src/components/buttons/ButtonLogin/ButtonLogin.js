import React from 'react'
import { Link} from "react-router-dom";
import './ButtonLogin.css';

function ButtonLogin() {
  return (
    <div>
       <div className="form-group w-100 mw-1">
            <Link to={"/login"} className=''>
                <button type="submit" className="btn btn-gradient border-field box-shadow w-100">
                    Ingresar
                </button>
            </Link>
        </div>
    </div>
  )
}

export default ButtonLogin
