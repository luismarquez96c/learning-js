import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones.js';

describe('Pruebas en 05-funcones.js', () => {
    test('getUser debe de retornar un objeto ', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        //EL METODO toEqual se usa para evaluar que dos objetos tienen las mismas propiedades y valores
        //EL METODO toStrictEqual evalua además el  tipo de datos (===)
        expect( user ).toEqual(userTest);
    })

    //PROBAR GET USUARIO ACTIVO
    //DEBE DE RETORNAR UN OBJETO
    //EVALUAR UN OBJETO

    test('getUsuarioActivo debe de retornar un objeto', () => {

        const username = 'Luis';

        const userTest = {
            uid: 'ABC567',
            username,
        };

        const user = getUsuarioActivo(username);

        expect( user ).toEqual(userTest);

    })
       
})
