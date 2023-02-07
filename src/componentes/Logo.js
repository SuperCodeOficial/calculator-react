import React from "react";
import lbmCodingLogo from '../images/lbm-coding.png';
import"../page/calculator.scss";

const Logo = (props) => (
    <div className='lbmcoding-logo-contenedor'>
        <img 
            src={lbmCodingLogo}
            className='lbmcoding-logo'
            alt='Logo de LBMCoding'
        />
        {props.imgLogo}
    </div>

);


export default Logo;