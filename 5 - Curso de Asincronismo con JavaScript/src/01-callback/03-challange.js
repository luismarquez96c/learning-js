//PARA HACER PETICIONES HTTP ES NECESAR INSTALAR LA DEPENDENCIA DE XMLHttpRequest
//Comando: npm install xmlhttprequest --save

const API = 'https://rickandmortyapi.com/api';

// const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;//OBTENEMOS LA FUNCION CONSTRUCTORA
const xmlhttprequest = require('xmlhttprequest');
const XMLHttpRequest = xmlhttprequest.XMLHttpRequest;//OBTENIENDO FUNCIÓN CONSTRUCTURA

const fetchData = (url_api, callback) => {
    const xhttp = new XMLHttpRequest();//INSTANCIANDO FUNCIÓN CONSTRUCTORA
    xhttp.open('GET', url_api, true);

    xhttp.onreadystatechange = (event) => {//SOBREESCRIBIMOS onreadystatechange QUE POR DEFAULT ES NULL Y LE ASIGNAMOS UNA FUNCION PARA OBTENER NUESTRA RESPUESTA

        /*  ESTADOS DE LA PETICION:
            UNSENT = 0; OPENED = 1; HEADERS_RECEIVED = 2; LOADING = 3; DONE = 4;
        */

        if(xhttp.readyState === 4){
            if( xhttp.status === 200 ){
                callback(null, JSON.parse(xhttp.responseText));
            }else{
                const error = new Error('Error: ' + url_api);
                return callback(error, null);
            }
        }
    }

    xhttp.send();

}

console.log(new Date)
const url_character = `${API}/character`;

//MANDO A LLAMAR LA FUNCION fetchData LA CUAL MANDARÁ A LLAMAR A MI FUNCIÓN CALLBACK
fetchData(url_character, (error1, data1) => {
    if(error1) return console.error(error1);
    
    fetchData( `${url_character}/${data1.results[0].id}`, (error2, data2) => {
        if(error2) return console.error(error2);
        
        fetchData(`${data2.origin.url}`, (error3, data3) => {
            if(error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
            console.log(new Date)
        });
        
    });
    
});
