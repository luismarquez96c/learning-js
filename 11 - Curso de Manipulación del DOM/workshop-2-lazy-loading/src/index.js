import h from 'hyperscript';
import { registerImage } from "./lazy";
import { cleanObserver } from "./lazy";
import { cleanReport } from "./lazy";

const mininum = 1;
const maximum = 122;

const random = () => Math.floor( Math.random() * (maximum - mininum) ) + mininum;


const createImageNode = () => {
    // const container = document.createElement('div');
    // container.className = 'image--item';
    const container = h('div.image--item');
    
    // const imagen = document.createElement('img');
    // imagen.className = 'mx-auto';
    // imagen.width = '320';
    // imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;
    
    const imagen = h('img.mx-auto', {
        width: '320',
        'data-src': `https://randomfox.ca/images/${random()}.jpg`,
    });

    container.appendChild(imagen);
    return container;
    
} ;

const app = document.getElementById('images');

const addButton = document.querySelector('.main--btn');

const addImage = (event) => {
    const newImagen = createImageNode();
    app.append(newImagen);

    registerImage(newImagen);
} 

addButton.addEventListener('click', addImage);


const cleanButton = document.querySelector('.main--btn ~ button');

cleanButton.addEventListener('click', () => {

    app.innerHTML = '';
    cleanObserver();
    cleanReport();

});
