const lista = [
    1,    2,    3,    1,    2,    3,    4,    2,    2,    2,    1,
];


function calcularModa( lista ){

    const listaConteo = {};

    lista.forEach( elemento =>{
        const elemenntoConteo = listaConteo[elemento];
        
        if(elemenntoConteo) listaConteo[elemento]++;
        else listaConteo[elemento] = 1
    
    } );

    const listaConteoAsArray = Object.entries(listaConteo)
    listaConteoAsArray.sort( ([, elementoA], [, elementoB]) => elementoA - elementoB )
    
    const [ , moda ] = listaConteoAsArray.pop();

    return moda;
}




console.log(calcularModa(lista));
