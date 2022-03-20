//Exportamos la constante llamada heroes
//Esto sirve para importalo desde otro archivo con:
//import {hereos} from './data/heroes.js'
//export const heroes = [ ESTE ARCHIVO LO UNICO QUE HACE ES 
                    //EXPORTAR ESTA CONSTANTE HEROES

//export default [// NO ES MUY RECOMENDABLE USARLO ASÍ
const heroes = [    
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

//const owners = ['DC', 'MARVEL'];

export const owners = ['DC', 'MARVEL'];//EXPORTACIÓN INDIVIDUAL

export default heroes ;//EXPORTACIÓN POR DEFAULT, LA MÁS RECOMENDABLE


//AMBAS SON EXPORTACIONES INDIVIDUALES
// export {
//     heroes,
//     owners
// }

// export {
//     heroes as default, // EXPORTACIÓN POR DEFAULT
//     owners// EXPORTACIÓN INDIVIDUAL
// }

