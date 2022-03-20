const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [p1,p2] = personajes;//OBTIENE INDEX 0 Y 1
const [, personaje2] = personajes;//OBTIENE SOLO INDEX 1
const [, , p3, p4] = personajes;//OBTIENE INDEX 2 y el 3 (index 3 devuelve undefined)

console.log(p1, p2, personaje2, p3, p4);

const retornaArreglo = () =>{
    return ['ABC', 123]
}

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros)

//TAREA
//1. El primer valor del arreglo se llamara nombre
//2. El segundo valor del arreglo se llamara setNombre
const usarEstado = valor => {
    return [valor, () => {console.log('Hola mundo')}];
}

//SE OBTIENE INDEX 0 Y 1 QUE EQUIVALEN A UN STRING Y A UNA FUNCION
const [nombre, setNombre] = usarEstado('Goku_')

console.log(nombre)
setNombre();

