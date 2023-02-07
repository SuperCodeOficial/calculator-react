import React from 'react';
import Logo from '../componentes/Logo';
import {Container, Row, Col} from 'react-bootstrap';
import Boton from '../componentes/Boton';
import Pantalla from '../componentes/Pantalla';
import BotonClear from '../componentes/BotonClear';
import './calculator.scss';

//Hook
import {useState} from 'react';
import {evaluate, prodDependencies} from 'mathjs';

function Calculator() {
  const [input, setInput] = useState('');
  const agregarInput = val => {
    setInput(input + val);
  };
  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input));
    }else{
      alert("Por favor ingrese valores para realizar los calculos");
    }
  };
  return (
    <>
      <Container className='calculator'>
        <Logo></Logo>
        <Row>
          <Col lg={12}>
            <div className='calculator-contenedor'>
              <Pantalla input={input}/>
              <div className='calculator-contenedor__fila'>
                <Boton manejarClic={agregarInput}>1</Boton>
                <Boton manejarClic={agregarInput}>2</Boton>
                <Boton manejarClic={agregarInput}>3</Boton>
                <Boton manejarClic={agregarInput}>+</Boton>
              </div>
              <div className='calculator-contenedor__fila'>
                <Boton manejarClic={agregarInput}>4</Boton>
                <Boton manejarClic={agregarInput}>5</Boton>
                <Boton manejarClic={agregarInput}>6</Boton>
                <Boton manejarClic={agregarInput}>-</Boton>
              </div>
              <div className='calculator-contenedor__fila'>
                <Boton manejarClic={agregarInput}>7</Boton>
                <Boton manejarClic={agregarInput}>8</Boton>
                <Boton manejarClic={agregarInput}>9</Boton>
                <Boton manejarClic={agregarInput}>*</Boton>
              </div>
              <div className='calculator-contenedor__fila'>
                <Boton manejarClic={calcularResultado}>=</Boton>
                <Boton manejarClic={agregarInput}>0</Boton>
                <Boton manejarClic={agregarInput}>.</Boton>
                <Boton manejarClic={agregarInput}>/</Boton>
              </div>
              <div className='calculator-contenedor__fila'>
                <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
              </div>
            </div>
          </Col>
        </Row>
    </Container>
    <div className='the-text'><h2>SuperMax</h2></div>
  </>
  )
}
export default Calculator;