/**
 * FORMA UNO DE USAR FRAGMENTOS
 import React, { Fragment } from "react";
 */

/**
 * FORMA DOS DE USAR FRAGMENTOS
 */


//COMPONENTES BASADOS EN FUNCIONES -> Functional Components
// const PrimeraApp = () => {
//     //return <h1>Hola Mundo</h1>;// CUANDO RETORNAMOS UN SOLO ELEMENTO HTML NO HAY PROBLEMA HACERLO DIRECTAMENTE
//     return (//CUANDO RETORNAMOS VARIOS ELEMENTOS LO HACEMOS CON LA SINTAXIS PARA DEVOLVER ELEMENTOS IMPLICITOS.
        
//         //Fragment: componente que recibe otros elementos.
//         <Fragment>
//             <h1>Hola Mundo</h1>
//             <p>parrafo</p>
//         </Fragment>
//     );
// }

const PrimeraApp = () => {
    //return <h1>Hola Mundo</h1>;// CUANDO RETORNAMOS UN SOLO ELEMENTO HTML NO HAY PROBLEMA HACERLO DIRECTAMENTE
   
    const saludo = 'Hola mundo const';
    const booleano = true;
    const arreglo = [1,2,3,4,5];//AL IMPRIMIR ARREGLOS EN EL COMPONENTE, ESTE RECORRE SUS ELEMENTOS Y LOS CONCATENA
    const objeto = {//LOS OBJETOS NO SON VALIDOS PARA IMPRIMIRSE COMO VARIABLES EN COMPONENTES
                //LO PODEMOS IMPRIMIR COMO JSON.stringify(objeto)
        nombre: 'fernando',
        edad: 39,
    }

    return (//CUANDO RETORNAMOS VARIOS ELEMENTOS LO HACEMOS CON LA SINTAXIS PARA DEVOLVER ELEMENTOS IMPLICITOS.
        //LOS BOOLEANS NO LO VA A IMPRIMIR EN {} -> {true}
        //
        <>
            <h1>{ saludo }</h1>
            <p>{ booleano }</p>
            <p>{ arreglo }</p>
            {/* <p>{ objeto }</p> DARÁ ERROR */}
            <pre>{ JSON.stringify(objeto, null, 3) }</pre>
            <p>parrafo</p>
        </>
    );
}

export default PrimeraApp;