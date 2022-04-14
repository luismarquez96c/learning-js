//PARA HACER PETICIONES HTTP ES NECESAR INSTALAR LA DEPENDENCIA DE XMLHttpRequest
//Comando: npm install xmlhttprequest --save

// const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;//OBTENEMOS LA FUNCION CONSTRUCTORA

// const xmlhttprequest = require('xmlhttprequest');
//const XMLHttpRequest = xmlhttprequest.XMLHttpRequest;//OBTENIENDO FUNCIÓN CONSTRUCTURA
import {XMLHttpRequest} from 'xmlhttprequest';

const fetchData = (url_api) => {

    return new Promise( (resolve, reject) => {
        const xhttp = new XMLHttpRequest();//INSTANCIANDO FUNCIÓN CONSTRUCTORA
        xhttp.open('GET', url_api, true);
    
        xhttp.onreadystatechange = () => {//SOBREESCRIBIMOS onreadystatechange QUE POR DEFAULT ES NULL Y LE ASIGNAMOS UNA FUNCION PARA OBTENER NUESTRA RESPUESTA
    
            //ESTADOS DE LA PETICION: UNSENT = 0; OPENED = 1; HEADERS_RECEIVED = 2; LOADING = 3; DONE = 4;
            if(xhttp.readyState === 4){
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error ', url_api));
            }
        };
    
        xhttp.send();
    })
}

// module.exports = fetchData;
export default fetchData;