import React from "react";
import ReactDOM from "react-dom";
import PrimeraApp from "./PrimeraApp";
import './index.css';
const divRoot = document.querySelector('#root');

//saludo es lo que quiero mostrar
//divRoot es dónde lo quiero mostrar

//ENVIANDO ARGUMENTOS A COMPONENTE PrimeraApp
// ReactDOM.render( <PrimeraApp saludo = {123} />, divRoot);
                                    // los numeros se envian como expresion de javascript

//ReactDOM.render( <PrimeraApp saludo='Hola, Soy Goku' subtitulo = 'Enviando subtitulo' />, divRoot);
ReactDOM.render( <PrimeraApp saludo='Hola, Soy Goku' />, divRoot); 
