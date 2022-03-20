//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const {nombre} = persona;//nombre tiene como valor la extraccion
// de la propiedad nombre de persona

console.log(nombre)

const {edad: edad2, clave} = persona//extramos del objeto la propiedad edad y la asignamos
// a la constante que se crea con el nombre edad2
//se extra de objeto persona la propiedad clave y se asigna en constante clave
console.log(edad2)
console.log(clave)

//DESESTRUCTURACION EN LOS PARAMETROS
const obtenerContexto = ({nombre, clave, edad, rango = 'Capitan'}) => {
    //AL RECIBIR UN OBJETO SE TOMARÁN O EXTRAERAN LAS PROPIEDAD
    //NOMBRE, CLAVE, EDAD, RANGO (NO ES PROPIEDAD PERO TIENE DEFAULT VALUE)

    // console.log(nombre, clave, rango)

    return {
        nombreClave: clave,
        anios: edad,
        latitudLongitud: {
            latitud: 14.32156,
            longitud: -12.1321,
        }
    }
};

const avenger = obtenerContexto(persona);

// const {nombreClave, anios, latitudLongitud} = avenger;
// const {latitud, longitud} = latitudLongitud

const {nombreClave, anios, latitudLongitud: {latitud, longitud}} = avenger;
//ESTAMOS DESESTRUCTURANDO AL OBJETO latitudLongitud en las variable que lo componen
console.log(nombreClave, anios, latitud, longitud)