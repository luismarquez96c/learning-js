import fetchData from '../utils/fetchData.js';

const API = 'https://rickandmortyapi.com/api/character/';


const obtenerData = async (API) => {
    try{

        const data = await fetchData(API);
        const character = await fetchData(`${API}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);
        
        console.log(data.info.count);
        console.log( character.name );
        console.log( origin.dimension );

    }catch(error){
        console.log(error);
    }

};

console.log('before');
obtenerData(API);
console.log('after');