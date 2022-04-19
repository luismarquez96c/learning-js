//1. SE AGREGO DINAMICS IMPORTS: REALIZAR UN IMPORT DE FORMA DINAMICA
// ESTO SE AGREGO PARA QUE LA APLICACION NO CARGUE ARCHIVOS QUE SON NECESARIOS
const button  = document.getElementById('btn');
button.addEventListener('click', async function () {
    const module = await import('./file.js');//IMPORTAMOS EL ARCHIVO file.js DE FORMA DINÁMICA.
    console.log('Entro al metodo add event listener')
    module.hello();
});

//2. SE AGREGO EL TIPO BIG INT PARA TRABAJAR CON NUMEROS ENTEROS MAYORES A 2 ** 53.

const bigNumber1 =  9007199254740991;//IMPRIME EL MISMO NUMERO (porque no es necesario redondear)
const bigNumber2 =  90071992547409919;//LOS ULTIMOS DOS DIGITOS SON CAMBIADOS A 20, ES DECIR, APROXIMA EL 19 A 20
const bigNumber3 =  90071992547409919n;//IMPRIME EL MISMO NUMERO SIN APROXIMAR
//EL BIG INT SE AGREGA CONCATENANDO n AL FINAL DEL NUMERO ENTERO.

console.log(bigNumber1);
console.log(bigNumber2);
console.log(bigNumber3);

//-----------------------
const anotherBigNumber = BigInt(90071992547409919);//IMPRIME EL MISMO NUMERO PERO APROXIMADO
//ESTA ES OTRA FORMA DE CREAR UN BIG INT.
console.log(typeof anotherBigNumber);


//3. SE AGREGO EL METODO Promise.allSettled: QUE NOS DEVUELVE UNA PROMESA DESPUES DE QUE TODAS LAS PROMESAS SE HAYAN CUMPLIDO O RECHAZADO (NO IMPORTA SU ESTADO FINAL).
// EL METODO Promise.All ES RECHAZADA EN EL MOMENTO EN QUE UNA PROMESA DEL CONJUNTO ES RECHAZADA.

const promise1 = new Promise( (resolve, reject) => reject('reject1'));
const promise2 = new Promise( (resolve, reject) => resolve('resolve1'));
const promise3 = new Promise( (resolve, reject) => resolve('resolve2'));

Promise.allSettled( [promise1, promise2, promise3] )
    .then(console.log);
//IMPRIME ALGO ASI:
/**
 [
     { status: 'rejected', reason: 'reject1' },
     { status: 'fulfilled', value: 'resolve1' },
     { status: 'fulfilled', value: 'resolve2' }
]
*/

//4. SE AGREGO EL USO DE GLOBAL THIS

/*
antes se podia acceder al valor de la variable global de las siguientes formas. windows, self, frames, this
ahora se ha estandarizado la forma de acceder al valor global no solo en el navegador sino también desde node y otras.
*/

//console.log(window);//AL CORRERLO EN NODE DA ERROR PORQUE NO EXISTE EL OBJETO windows
console.log(globalThis);//DEVUELVE EL OBJETO GLOBAL.

//5. SE AGREGO EL OPERADOR Nullish QUE DEVUELVE SU OPERANDO DEL LADO DERECHO CUANDO EL OPERADOR DE LA IZQUIEDA ES NULL O UNDEFINED, DE LO CONTRARIO DEVUELVE EL OPERANDO DEL LADO IZQUIERO

const foo = undefined ?? 'default string';
console.log(foo);//IMPRIME default string

//-----------------------
const foo1 = 'String asignado' ?? 'default string';
console.log(foo1);//IMPRIME String asignado

//6. SE AGREGO EL OPERADOR OPTIONAL CHAINING

const user = {};
//console.log(user.profile.email)//DA ERROR
console.log(user?.profile?.email)//NO DA ERROR, IMPRIME UNDEFINED
