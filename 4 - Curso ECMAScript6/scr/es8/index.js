//1. SE AGREGO el método Object.entries() que devuelve un arreglo llave/valor
const data = {
    fronted: 'Oscar',
    backend: 'Luis',
    design: 'Culei'
};

const entries = Object.entries(data);
console.log(entries);//DEVUELVE MI OBJETO COMO UN ARREGLO DE ARREGLOS (2 X 2)

//2. SE AGREGO el método Object.values() QUE DEVUELVE UN ARREGLO CON LOS VALORES DE LAS PROPIEDADES DE MI OBJETO

const data2 = {
    fronted: 'Oscar',
    backend: 'Luis',
    design: 'Culei'
};
const values = Object.values(data2);
console.log(values);//DEVUELVE MI OBJETO COMO UN ARREGLO DE UNA DIMENSIÓN


//3. SE AGREGO EL METODO String.prototype.padStart el cual rellenar la cadena actual con una 
//  cadena dada ha modo que la cadena actual alcance una longitud dada.

const string = 'Hello';

console.log( string.padStart(16, "* ") );//* * * * * *Hello

//TAMBIÉN SE AGREGO EL METODO padEnd Y FUNCIONA IGUAL QUE padStart PERO EMPEZANDO A RELLENAR
//DESDE EL FINAL
console.log( string.padEnd(16, " *") );//Hello * * * * * 

//4. SE AGREGO EL USO DE Trailing commas O TAMBIÉN LLAMADAS Final commas

const data3 = {
    fronted: 'Oscar',
    backend: 'Luis',
    design: 'Culei',//ESTO ES UN Trailing coma
};


//5. SE AGREGARON LAS keywords Asycn y Await
const helloWorld = () => {
    return new Promise( (resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000) 
        : reject(new Error('Test Error'));
    } );
}

const helloAsync = async () => {

};