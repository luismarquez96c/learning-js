//1. SE AGREGO EL METODO String.replaceAll
// el metod replace solo reemplaza la primera coincidencia
// mientras que replaceAll cambia todas las coincidencias

//2. SE AGREGARON METODOS PRIVADOS EN CLASES Y METODOS GET Y SET
/**
 * ESTE TEMA NECESITA MAS PROFUNDIAZACIÓN
 * @todo PROFUNDIZAR
 */
class Message {
    #n;
    constructor(n){
        this.#n = n;
    }
    show(val){
        console.log(val + ' ' + this.#incrementN());

    };

    #incrementN(){
        return this.#n++;
    }

    get #n(){
        return this.n;
    }

    set #n(newN){
        this.n = newN;
    }
}

const message = new Message(1);
message.show('Hola');//Hola 1
message.show('Hola');//Hola 2
message.show('Hola');//Hola 3

//message.increment();//DA ERROR
//message.#increment();//DA ERROR

console.log(message.n);

// message.n = 10;

//3. SE AGREGO Promise.Any: se le pasa un arreglo de promesas, luego devuelve la respuesta de la primera promesa que se resuelve correctamente.

const promise1 = new Promise( (resolve, reject) => reject('1') );
const promise2 = new Promise( (resolve, reject) => resolve('2') );
const promise3 = new Promise( (resolve, reject) => resolve('3') );

Promise.any([promise1,promise2,promise3])
    .then(console.log);//IMPRIME DOS YA QUE ES LA PRIMERA PROMESA EN RESOLVERSE CORRECTAMENTE

//4. SE AGREGARON OBJETOS Weak Ref: UN OBJETO QUE MANTIENE UNA REFERENCIA DEBIL A OTRO OBJETO SIN EVITAR QUE ESTE OBJETO SEA RECOGIDO POR EL GARBAGE COLLECTOR
/**
 * @todo NECESITA PROFUNDIZACIÓN
 */
class AnyClass{
    constructor(element){
        this.ref = new WeakRef(element);
    }
}


//5. SE AGREGARON NUEVOS OPERADORES &&= ||= ??=

let isTrue1 = true;
let isFalse1 = false;

console.log(isTrue1 &&= isFalse1); //A isTrue1 se le asigna False, entonces imprime false
console.log(isTrue1);//el valor de isTrue1 ahora es false
console.log(isFalse1);//imprime false

//-------------------------------------

let isTrue2 = true;
let isFalse2 = false;

console.log(isTrue2 ||= isFalse2); //isTrue2 mantiene su valor de true, entonces imprime true
console.log(isTrue2);//isTrue2 sigue siendo true
console.log(isFalse2);//imprime false

//-------------------------------------------------
let isNull = null;//TAMBIÉN PUEDE SER undefined
let isNotNull = {};

console.log(isNull ??= isNotNull); //A isNull se le asigna {} (isNotNull), entonces imprime {}
console.log(isNull);//isNull ahora tiene el valor {}
console.log(isNotNull);//imprime {}