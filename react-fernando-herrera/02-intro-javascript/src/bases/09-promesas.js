//DOCUMENTACION: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

import getHeroeById, {getHeroeByOwner} from "./bases/08-import-export.js";

/**
 * PARTE 1
 */
// const promesa = new Promise( (resolve, reject) =>{//EL CALLBACK SE EJECUTA DE FORMA SINCRONA AL CREAR LA PROMESA
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         resolve(heroe);//MARCAMOS LA PRIMESA COMO EXITOSA CON EL METODO RESOLVE
//         //RESOLVE ENVIA COMO ARGUMENTO EL OBJETO heroe A LA FUNCION THEN
//         // reject('No se puedo encontrar el héroe');//REJECT MARCA LA PROMESA COMO FALLIDA. ENVIA UN PARAMETRO QUE SE USADO POR EL CALLBACK DEL METOD CATCH
//     }, 2000);
// } );

// promesa.then((heroe) => {//heroe FUE ENVIADO POR LA LLAMADA A RESOLVE DENTRO DE LA PROMESA
//     console.log(heroe)
// }).catch( err => console.warn(err) )//err FUE ENVIADO POR REJECT


/**
 * PARTE 2
 */
const getHeroeByIdAsync = id => {

    return new Promise( (resolve, reject) =>{
        setTimeout(() => {
            const heroe = getHeroeById(id);

            //OPCION 1
            // heroe && resolve(heroe);//if
            // heroe || reject(`Heroe con id ${id} no encontrado`);//else
            
            //OPCION 2
            if(heroe) resolve(heroe);
            else reject(`Heroe con id ${id} no encontrado`);
            
        }, 2000);
    } );

};

getHeroeByIdAsync(2)
    // .then( heroe =>console.log(heroe))
    // .catch( err => console.warn(err))
    .then( console.log )
    .catch( console.warn )