import React , { useState } from 'react';

import PropTypes from 'prop-types'

/**
 * EVENTOS
 */
// const CounterApp = ({value}) => {
//     /**
//      * EVENTOS EN REACT: https://es.reactjs.org/docs/events.html 
//      */
//     const handleAdd = (e) => {
//         console.log(e)
//     }

//     return <>
//         <h1>CounterApp</h1>
//         <h2>{value}</h2>
//         <button onClick={ handleAdd } >+1</button>
//     </>;

// }

// CounterApp.propTypes = {
//     value: PropTypes.number
// };

/**
 * HOOKS : useState
 */
const CounterApp = ({value}) => {

    //  ESTE HOOK DEVUELVE UN ARREGLO CON EL VALOR DEL STATE Y LA FUNCIÓN QUE PUEDE MODIFICAR EL VALOR DEL STATE
    const [counter, setCounter] = useState(value);

    //handleAdd
    const handleAdd = (e) => {
        setCounter(counter + 1);//SOLO ESTA FUNCIÓN PUEDE MODIFICAR EL STATE
                //CUANDO SE LLAMA ESTA FUNCION REACT VUELVE A RENDERIZAR LA PARTE QUE CAMBIO
    
        //SI NO SE CUENTA CON EL VALOR DEL COUNTER SE PUEDE HACER DE LA SIGUIENTE MANERA:
        //setCounter( (previosCounter => previosCounter + 1) );
        //setCounter recibe una función que recibe el parametro counter
    }

    const handleReset = () => setCounter(value);

    const handleSubtract = () => setCounter(counter - 1);

    return <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>
        <button onClick={ handleAdd } >+1</button>
        <button onClick={ handleReset }>Reset</button>
        <button onClick={ handleSubtract }>-1</button>
    </>;

}

CounterApp.propTypes = {
    value: PropTypes.number
};

export default CounterApp;
