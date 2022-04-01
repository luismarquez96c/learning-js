/**
 * FUNCIONES HELPER
 */
const esPar = (numero) => numero % 2 === 0;

function calcularMediaAritmetica(lista){
    
    const sumaLista = lista.reduce( (acumulador = 0, elementoNuevo) => {
        return acumulador + elementoNuevo;
    } );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

/*
 * CALCULADORA DE MEDIANAS
*/
function calcularMedianaSalario(lista){
    const mitad = parseInt(lista.length / 2);

    if( esPar(lista.length) ){
        const elemento1 = lista[mitad - 1];
        const elemento2 = lista[mitad];

        return calcularMediaAritmetica( [elemento1, elemento2] );
    }else{
        return lista[mitad];
    }

}

/*
 * LÓGICA
*/

const salarios = colombia.map( persona => persona.salary );

salarios.sort( (a, b) => a - b );

const medianaGeneral = calcularMedianaSalario(salarios);

const sliceStart = parseInt(salarios.length * 0.9) ;//90 POR CIENTO DE LOS ELEMENTOS

const medianaTop10PorCiento = calcularMediaAritmetica(salarios.slice(sliceStart));

console.log({
    medianaGeneral,
    medianaTop10PorCiento,
})