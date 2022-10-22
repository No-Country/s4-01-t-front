import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import IconCheck from "../../assets/icons/check.svg";

const MySwal = withReactContent(Swal);

export const createAlert = (navigate) => {
  MySwal.fire({
    allowOutsideClick: false,
    title: "Sweet!",
    text: "¡Listo! Se publicó tu receta exitosamente.",
    imageUrl: IconCheck,
    imageWidth: 350,
    imageHeight: 200,
    imageAlt: "Custom image",

    confirmButtonText: "Ir al inicio",
    customClass: {
      confirmButton: "create-alert_btn",
    },
  }).then((el) => {
    if (el.isConfirmed) {
      /* navigate("/"); */
    }
  });
};
