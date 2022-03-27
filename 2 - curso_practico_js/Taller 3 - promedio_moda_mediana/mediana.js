//Mediana: el elemento en la mitad del conjunto.

const lista1 = [
    200,
    100,
    40000000,
    1000,
    500,
]


function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce( (acumulador = 0, elementoNuevo) => {
        return acumulador + elementoNuevo;
    } );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function esPar(numero){
    return numero % 2 === 0;
}

function calcularMediana(lista){

    lista.sort( (a,b) => {
        return a - b
    } );

    console.log(lista)

    const mitadLista = parseInt(lista1.length / 2);
    
    if( esPar(lista.length) ){
        const elem1 = lista[mitadLista - 1];
        const elem2 = lista[mitadLista];
    
        const mediana = calcularMediaAritmetica([elem1, elem2]);
        return mediana;
    }else{
        const mediana = lista[mitadLista];
        return mediana;
    }
}

console.log(calcularMediana(lista1))