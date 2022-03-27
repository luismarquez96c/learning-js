//Media aritmetica o promedio:
//Moda: es el elemento que mas se repite de la lista

const lista = [
    100,
    200,
    300,
    500,
]


function calcularMediaAritmetica(lista){
    
    // let sumaLista = 0;
    // for( let i = 0 ; i < lista.length ; i++ ){
    //     sumaLista += lista[i];
    // }

    const sumaLista = lista.reduce( (acumulador = 0, elementoNuevo) => {
        return acumulador + elementoNuevo;
    } );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

const mediaAritmetica = calcularMediaAritmetica([1,14,151,98]);

console.log(mediaAritmetica);