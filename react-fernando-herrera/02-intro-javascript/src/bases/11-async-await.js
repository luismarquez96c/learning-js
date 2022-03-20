//1. async INDICA QUE ALGO FUNCIONA DE FORMA ASINCRONA O EN PARALELO
//2. await INDICA QUE UNA PROMESA SERÁ RESUELTA DE FORMA AUTOMATICA Y EN SECUENCIA
//ES DECIR, SIMILA SINCRONIZCO O PROMESAS ENCADENADAS.

const getImage = async() =>{//EL ASYNC NO ESTÁ ATADO A AWAIT,
    //PERO AWAIT SÍ ESTÁ ATADO A ASYNC.
    
    try {
        const apiKey = 'KUQH6lmIU6fEYVnOCK0ipbIPMBvLQz7o';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await respuesta.json();

        const {url} = data?.images?.original;

        const imagen = document.createElement('img');
        imagen.src = url;

        document.body.append(imagen);
    } catch (error) {
        //MANEJO DEL ERROR
    }


}

getImage();