// 1. SE AGREGO EL METODO array.flat QUE APLANA UN OBJETO DE MAS DE UNA DIMENSIÓN

let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat());//RECIBE COMO ARGUMENTO, LA CANTIDAD DE NIVELES QUE DEBE DE SUBIR PARA APLANAR
//POR DEFECTO SERÁ NIVEL 1 SINO SE LE PASA EL ARGUMENTO
//EL CONSOLO.LOG ANTERIOR DEVUELVE: [ 1, 2, 3, 1, 2, 3, [ 1, 2, 3 ] ]
//APLANO SOLO 1 NIVEL MÁS

console.log(array.flat(2));// DEVUELVE [ 1, 2, 3, 1, 2, 3, 1, 2, 3], APLANO DOS NIVELES

// 2. SE AGREGO EL METODO .flapMap QUE ES COMO EJECUTAR UNA FUNCION .map Y LUEGO EJECUTAR LA FUNCIÓN .flat.

let array2 = [1,2,3,4,5];

console.log( array2.flatMap( (elem) => [elem, elem * 2] ) );// DEVUELVE [ 1, 2, 2, 4,  3, 6, 4, 8, 5, 10 ]

// 2. SE AGREGO EL METODO trimStart Y trimEnd LOS CUALES QUITAN ESPACIOS AL PRINCIPIO Y FINAL DEL STRING;
let hello = 'hello';
console.log(hello.trim());//ESTE METODO YA EXISTÍA
console.log(hello.trimStart);
console.log(hello.trimEnd);

// 3. SE AGREGO DE OPCIONAL CATCH BINDING: PASAR DE FORMA OPCIONAL EL PARAMETRO DE ERROR AL BLOQUE CATCH

try{
    throw new Error('Error de prueba');
}catch{
    
}

// 4. SE AGREGO EL METODO fromEntries QUE CONVIERTE UNA ESTRUCTURA CLAVE/VALOR EN UN OBJETO
//ES DECIR, LA INVERSA DEL METODO entries();

const entries = [
    ['name', 'Luis'],
    ['age', 44],
    ['country', 'SV'],
]

console.log( Object.fromEntries(entries) )//DEVOLVERÁ UN OBJETO CON LAS PROPS: name, age, country Y SUS CORRESPONDIENTES VALORES
//console.log( Object.fromEntries( [1,2,3,4] ) )//DARÁ ERROR PORQUE EL INDEX 0 NO ES UNA ENTRY CLAVE/VALOR, SINO QUE TIENE EL VALOR 1


// 5. AGREGAR UNA DESCRIPCIÓN A LOS SIMBOLS
// USO DE SYMBOLS: https://latteandcode.medium.com/javascript-conoces-el-tipo-symbol-197c8338924a

let mySymbol = `My Simbol`;
let symbol = Symbol(mySymbol);

console.log(symbol.description);//IMPRIME My Simbol