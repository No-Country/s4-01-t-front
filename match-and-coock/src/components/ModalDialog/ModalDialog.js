import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import   "./ModalDialogo.css";
import {Modal, Button, InputGroup, Form } from 'react-bootstrap';
import FilterButton from "../buttons/FilterButton";
import  closeWhite from './Images/closeWhite.svg'
import  buscador from "./Images/buscador.svg"

const momentoDelDia = [
    "Desayuno",
    "Almuerzo" ,
    "Colación",
    "Cena"
];

const dificultad = [
    "Fácil",
    "Intermedio",
    "Avanzado"
];

const sabores = [
    "Dulce",
    "Salado"
];

const filtros = {
    'Momento del dia': momentoDelDia,
    'Dificultad': dificultad,
    'Sabores': sabores
};

const ModalDialog = (props) => {
  const [show, setShow] = useState(false);
  const [filters, setFilters] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleFilterTag = (e) => {
        console.log(e.target.checked, e.target.id)
        if (filters.indexOf(e.target.id) !== -1) {
            // Existe en filtros y tengo que guardar otro nuevo array para que renderice, uso el spread para guarda los valores anteriores// filter quita// devolve el restro
            let id = e.target.id;
            deleteFilter(id);
        } else {
            // No existe en filtros y tengo que guardar otro nuevo array para que renderice, uso el spread para guarda los valores anteriores//
            let new_filters = [...filters, e.target.id];
            setFilters(new_filters);
        }

        console.log(filters);
        
  }

  const handleDelete = (e) => {
    let id = e.target.dataset.filter;
    deleteFilter(id);
    document.querySelector(`#${id}`).checked = false;
  }

  const deleteFilter = (id) => {
    let new_filters = filters.filter(filter => filter !== id);
    setFilters(new_filters);
  }
  
    return (
    <>
      
      <FilterButton onClick={(handleShow)}></FilterButton> 
        
      <Modal  {...props}
       show={show} onHide={handleClose}
       centered
      
       >

        <Modal.Header closeButton>
          <Modal.Title>Filtros</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><img src={buscador} alt =""/></InputGroup.Text>
        <Form.Control className= "backgroundWhite"
          placeholder="Buscar ingrediente"
          aria-label="buscar"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

            {filters.length > 0 && (
                filters.map(filter => {
                    return (
                      <span class="badge rounded-pill bg-dark">{filter}
                          <img src={closeWhite}  onClick={handleDelete} data-filter={filter} alt="" />
                      </span>);
                })
            )}
            {Object.keys(filtros).map(key => {
                return (
                    <>
                        <h6>{key}</h6>
                        {filtros[key].map(element => {
                            return (
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id={element} onChange={toggleFilterTag} />
                                    <label class="form-check-label" for={element}>
                                        {element}
                                    </label>
                                </div>
                            )
                        })}
                        
                    </>
                )
            })}
        
        
        
        
        </Modal.Body>
        <Modal.Footer className=".d-inline-flex.">
       
          <button type="submit" className="btn btn-outline-light rounded-30 border-field text-black"  onClick={handleClose}>Eliminar</button>
          <button type="submit" className="btn  btn-gradient rounded-pill  border-field box-shadow" onClick={handleClose}>Aplicar</button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalDialog