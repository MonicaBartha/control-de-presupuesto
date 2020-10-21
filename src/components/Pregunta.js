import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';


const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta}) => {
    // definir el state
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    // funcion que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad( parseInt(e.target.value, 10) )
    }
    // Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();
    // Validar con un nuevo state, del error
    // si la cantidad en menor a 1, se ejecuta el error
    if( cantidad < 1 || isNaN( cantidad )) {
        guardarError(true);
        return
    } 

    // si se pasa la validacion
    guardarCantidad(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPregunta(false);
    }
    return (
        <Fragment>
            { error ? <Error mensaje="El presupuesto es Incorrecto" /> : null}
            <h2>Coloca tu presupuesto</h2>
            <form
            onSubmit={agregarPresupuesto}
            >
                <input
                type="number"
                className="u-full-width"
                placeholder="Coloca tu presupuesto" 
                onChange={definirPresupuesto}
                />
                <input 
                type="submit"
                className="button-primary u-full-width"
                value="Definir Presupesto"
                />
            </form>
        </Fragment>
    )
}

Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired, 
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}

export default Pregunta;