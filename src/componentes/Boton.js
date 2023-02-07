import React from "react";
import"../page/calculator.scss";

function Boton(props){
    const esOperador = valor => {
        return isNaN (valor) && (valor !== '.') && (valor !== '=');
    };
    <div className="boton"></div>
    return (
            <button className={`boton-contenedor ${esOperador(props.children) ? 'boton-operador' : ''}`.trimEnd()}
            onClick={() => props.manejarClic(props.children)}>
            {props.children}
            </button>
        
    );
}
export default Boton;