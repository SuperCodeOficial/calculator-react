import React from "react";
import"../page/calculator.scss";

const BotonClear = (props) => (
    <div className='boton-clear' onClick={props.manejarClear}>
        {props.children}
    </div>
);
export default BotonClear;