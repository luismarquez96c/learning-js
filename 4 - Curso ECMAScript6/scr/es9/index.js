// 1. SE AGREGO LA DESESTRUCTURACIÓN CON SPREAD OPERATOR
const obj1 = {
    name: 'Luis',
    age: 44,
    country: 'CL'
}

let {name, ...all} = obj1;//SE OBTIENE LA PROPIEDAD NAME DEL OBJETO obj Y EL RESTO DE PROPS SE GUARDA EN OTRO OBJETO LLAMADA ALL.
//ESTO ES PARA NO DESESTRUCTURAR TODAS LAS PROPIEDADES DE UN OBJETO O ARREGLO.
console.log(name, all);
console.log(name, all.name);//DEVOLVERA Luis, undefined PORQUE LA PROPIEDAD name YA NO EXISTE EN EL OBJETO.

// 2. SE AGREGO LA ANIDACIÓN DE OBJETOS O ARREGLOS EN UN SOLO OBJETO O ARREGLO CON LA AYUDA DE SPREAD OPERATOR

const obj2 = {
    name: 'Luis',
    age: 44,
}

const obj3 = {
    ...obj2,
    country: 'SV'
}

console.log(obj3);//DEVOLVERÁ UN OBJETO CON TRES PROPIEDADES: name, age, country


//---------------------------------

const numArr1 = [1,2,3,4];
const numArr2 = [ ... numArr1 , 9,8,7,6,5 ]

console.log(numArr2)// DEVUELVA LA UNION DE AMBOS ARREGLOS

// 3. SE AGREGO EL METODO PROMISE.FINALLY

const helloWorld = () => {
    return new Promise( (resolve, reject) => {
        (true)
            ? setTimeout( () => resolve('Hello World') , 3000 )
            : reject( new Error('Test Error') )
    } ) 
}

helloWorld()
    .then( console.log )//PASADOS TRES SEGUNDOS SE IMPRIMERA Hello World
    .catch( console.error)
    .finally( () => console.log('Finalizo') )//AL FINALIZAR EL .then O .catch SE MANZARÁ A LLAMAR EL CALLBACK

// 4. SE AGREGO LA AGRUPACIÓN DE BLOQUES DE REGEX Y PODER ACCEDER A CADA UNO DE ELLOS.

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;

const match = regexData.exec('2018-04-201');

const year = match[1];//DEVUELVE 2018
const month = match[2];//DEVUELVE 04
const day = match[3];//DEVUELVE 20, NO DEVUELVE EL 1 PORQUE ESE NO COINCIDE

console.log({year, month, day})