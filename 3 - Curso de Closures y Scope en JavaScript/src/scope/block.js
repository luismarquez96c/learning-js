/**
 * EJEMPLO 1
 */
const fruits = () => {
    if(true){
        /**
         * LAS VARIABLES FUERON CREADAS DENTRO DEL SCOPE DE LA FUNCION
         * POR ENDE PUEDEN SER ACCEDIDAS DESDE CUALQUIER PARTE DE LA FUNCION
         */
        var fruit1 = 'piña para las niñas';
        var fruit2 = 'pera';
        var fruit3 = 'manzana';

        /**
         * LAS VARIABLES LET Y CONST TIENEN SCOPE DE BLOQUE Y NO DE FUNCIÓN.
         * SOLO PUEDEN SER ACCEDIDAS DESDE ESTE BLOQUE IF
         */
        let fruit4 = 'coco';
        const fruit5 = 'sandía';
        console.log(fruit4);
        console.log(fruit5);
    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
    
}

fruits();


/**
 * EJEMPLO 2
 */
let x = 1;
{
    let x = 2;
    console.log(x)//imprime 2
}
console.log(x)//imprime 1
//LO QUE PASO CON LA VARIABLE X ES PORQUE LET Y CONST TIENEN SCOPE DE BLOQUE


var y = 1;
{
    var y = 2;
    console.log(y)//imprime 2
}
console.log(y)//imprime 2
//LO ANTERIOR PASO PORQUE LAS VARIABLES DECLARADAS CON VAR NO TIENEN SCOPE DE BLOQUE
//SOLO TIENE SCOPE DE FUNCION LOCAL Y SCOPE GLOBAL.


/**
 * EJEMPLO 3
*/

const funcion = () => {
    for(var i = 0; i < 10; i++){
        setTimeout(() => {
            console.log(i)
        }, 1000);
    }
}

funcion();//IMPRIMERA 10 EN TODAS LAS ITERACIONES EL SCOPE DE FUNCION QUE TIENE VAR i

const funcion2 = () => {
    for(let i = 0; i < 10; i++){
        setTimeout(() => {
            console.log(i)
        }, 1000);
    }

    //console.log(i);//DARA ERROR PORQUE i PERTENECE AL BLOQUE FOR Y NO A LA FUNCIÓN
}

funcion2();//IMPRIMERA TODOS LOS VALORES DEL BUCLE DE FORMA CORRECTA.