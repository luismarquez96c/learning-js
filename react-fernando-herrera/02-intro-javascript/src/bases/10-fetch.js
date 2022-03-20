//DOCUMENTACION: 
//CREAR API: https://developers.giphy.com/dashboard/

const apiKey = 'KUQH6lmIU6fEYVnOCK0ipbIPMBvLQz7o';
//https://developers.giphy.com/docs/api/endpoint#random

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
//fetch devuelve una promera

peticion//la promesa que devuelve fetch tiene el metodo json el cual devuelve otra promesa
    .then(resp => resp.json() )//PODEMOS ENCADENAR LAS PROMESAS
    .then(({data}) => {//EN DATA VIENE OBJETO DATA, USAMOS DESESTRUCCTURACION PARA EXTRAER EL OBJETO DATA
        
        const {url} = data?.images?.original;//DESESTRUCTURACION

        const img = document.createElement('img');
        
        img.src = url;
        
        document.body.append(img)


    })
    .catch(console.warn)
