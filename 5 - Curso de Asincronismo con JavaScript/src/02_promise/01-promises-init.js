const somethingWillHappen = () => {
    return new Promise( (resolve, reject) => {
        if(true){
            resolve('Todo bien');
        }else{
            reject('Ocurrió un error!!');
        }
    });
}

const somethingWillHappen2 = () => {
    return new Promise( (resolve, reject) => {
        if(true){
            setTimeout( ()=> resolve( 'Todo bien 2' ) , 3000 );
        }else{
            const error = new Error('Ocurrió un error 2!!');
            reject(error);
        }
    });
}

//PROMISE.ALL DEVUELVE UN ARREGLO CON TODAS LAS RESPUESTAS CUANDO TODAS LAS PROMESAS SE RESOLVIERON CORRECTAMENTE
//O DEVUELVE EL ERROR DEL PRIMER REJECT ENCONTRADO
Promise.all( [somethingWillHappen(), somethingWillHappen2()] )
    .then( response => console.log(response) )//[ 'Todo bien', 'Todo bien 2' ]
    .catch(console.log);