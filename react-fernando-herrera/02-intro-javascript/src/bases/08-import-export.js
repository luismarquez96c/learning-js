//https://www.udemy.com/course/react-cero-experto/learn/lecture/19636418#content

//PARA QUE ESTO FUNCIONE HAY DOS OPCIONES
//1. heroes.js debe de tener la extension .mjs
//2. En el package.json agregar la propiedad "type": "module",
//import { heroes } from "./data/heroes.js";//IMPORT DE UN EXPORT QUE NO ES POR DEFECTO
//import heroes from './data/heroes.js';//import sin llaves, cuando se hizo un export default
//EN UN EXPORT DEFAULT NO SE LE PONE NOMBRE A LO QUE SE EXPORTA, ASI QUE EN EL IMPORT EL HEROES
//NO ES EL NOMBRE DEL ARCHIVO NI DEL ARREGLO, NOSOTROS LO DEFINIMOS
//ES DECIR, HEROES PODRÍA LLAMARSE heroes_array SI QUISIERAMOS
//import {heroes,owners} from './data/heroes.js' IMPORTACION CUANDO AMBOS RECURSOS NO SON POR DEFECTO
//OWNERS NO ES EXPORTACIÓN POR DEFECTO
import heroes, {owners} from './data/heroes.js';//IMPORTACION DE HEROES (POR DEFECTO) Y OWNERS (EXPORTACION INDIVIDUAL)

const getHeroeById = id => heroes.find( heroe => heroe?.id === id );
export default getHeroeById;

// console.log(getHeroeById(2));

export const getHeroeByOwner = owner => heroes.filter(heroe => heroe.owner === owner)
// console.log(getHeroeByOwner('Marvel'))

// console.log(owners)