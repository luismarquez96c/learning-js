/**
 * FORMA UNO DE USAR FRAGMENTOS
 import React, { Fragment } from "react";
 */


//COMPONENTES BASADOS EN FUNCIONES -> Functional Components
// const PrimeraApp = () => {
//     //return <h1>Hola Mundo</h1>;// CUANDO RETORNAMOS UN SOLO ELEMENTO HTML NO HAY PROBLEMA CON HACERLO DIRECTAMENTE
//     return (//CUANDO RETORNAMOS VARIOS ELEMENTOS LO HACEMOS CON LA SINTAXIS PARA DEVOLVER OBJETOS IMPLICITOS.
        
//         //Fragment: componente que recibe otros elementos.
//         <Fragment>
//             <h1>Hola Mundo</h1>
//             <p>parrafo</p>
//         </Fragment>
//     );
// }

// const PrimeraApp = () => {
//     //return <h1>Hola Mundo</h1>;// CUANDO RETORNAMOS UN SOLO ELEMENTO HTML NO HAY PROBLEMA CON HACERLO DIRECTAMENTE
   
//     const saludo = 'Hola mundo const';
//     const booleano = true;
//     const arreglo = [1,2,3,4,5];//AL IMPRIMIR ARREGLOS EN EL COMPONENTE, ESTE RECORRE SUS ELEMENTOS Y LOS CONCATENA
//     const objeto = {//LOS OBJETOS NO SON VALIDOS PARA IMPRIMIRSE COMO VARIABLES EN COMPONENTES
//                 //LO PODEMOS IMPRIMIR COMO JSON.stringify(objeto)
//         nombre: 'fernando',
//         edad: 39,
//     }

//     return (//CUANDO RETORNAMOS VARIOS ELEMENTOS LO HACEMOS CON LA SINTAXIS PARA DEVOLVER OBJETOS IMPLICITOS.
//         //LOS BOOLEANS NO LO VA A IMPRIMIR EN {} -> {true}
//         //
//         <>
//             <h1>{ saludo }</h1>
//             <p>{ booleano }</p>
//             <p>{ arreglo }</p>
//             {/* <p>{ objeto }</p> DARÁ ERROR */}
//             <pre>{ JSON.stringify(objeto, null, 3) }</pre>
//             <p>parrafo</p>
//         </>
//     );
// }

/**
 * COMUNICACION ENTRE COMPONENTES - PROPS
 */

//  const PrimeraApp = (props) => {//UNA FORMA DE RECIBIR PARAMETROS/PROPS
//     const PrimeraApp = ({saludo = 'Hola mundo por defecto'}) => {//DESESTRUCTURANDO OBJETO props EN SU PROPIEDAD saludo
//         //SI SALUDO NO SE ENVIA ENTONCES NO SE EMPRIMIRÁ NADA Y NO DARÁ ERROR.
//         return (
//             <>
//                 <h1>{ saludo }</h1>
//                 <p>Mi primera aplicación</p>
//             </>
//         );
//     }    

/**
 * PROP TYPES */        
import PropTypes from "prop-types";        
    const PrimeraApp = ({saludo, subtitulo = 'Esto es un subtitulo'}) => {
        return (
        <>
            <h1>{ saludo }</h1>
            <p>{subtitulo}</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    // numero: PropTypes.number.isRequired,
}


/**
 * DEFAULT PROPS
 */
PrimeraApp.defaultProps = {
    subtitulo: 'Ejemplo de subtitulo'
}

export default PrimeraApp;