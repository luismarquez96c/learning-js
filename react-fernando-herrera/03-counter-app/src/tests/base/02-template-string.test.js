// import '@testing-library/jest-dom'; //import para obtener la ayuda de los metodos de jest

//PREVIAMENTE SE EXPORTO getSaludo de forma especifica
import { getSaludo } from "../../base/02-template-string.js";


describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe de retornar hola nombre', () => {
        const nombre = 'Luis';

        const saludo = getSaludo(nombre);

    
    })

    test('getSaludo debe de retornar Hola Carlos! si no hay argumento nombre ', () => {
    
        const saludo = getSaludo();
        expect( saludo ).toBe('Hola Carlos!');

    })
    
    
})
