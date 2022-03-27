import React from "react";
import ReactDOM from "react-dom";
import PrimeraApp from "./PrimeraApp";
import './index.css';
const divRoot = document.querySelector('#root');

//saludo es lo que quiero mostrar
//divRoot es dónde lo quiero mostrar
ReactDOM.render( <PrimeraApp />, divRoot);