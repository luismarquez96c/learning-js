/**
 * EJEMPLO 1
 */
a = 2;
var a;

console.log(a);//imprime 2

/**
 * EJEMPLO 2
 */
console.log(b);//imprime undefined
var b = 2;

/**
 * EJEMPLO 3
 */

nameOfDog('Elmo');//SE PUEDE MANDAR A LLAMAR PORQUE LA PALABRA RESERVADA FUNCTION TIENE HOISTING Y TAMBIÉN EL CUERPO DE LA FUNCIÓN.
function nameOfDog(name){
    console.log(name);
}