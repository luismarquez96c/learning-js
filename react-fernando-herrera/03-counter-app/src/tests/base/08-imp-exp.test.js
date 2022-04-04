import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp.js';
import heroes from '../../datos/heroes.js';

describe('Pruebas en funciones de heroes', () => {
    
    test('Debe de retornar un heroe por id', () => {

        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find( heroe => heroe.id === id );

        expect( heroe ).toEqual(heroeData);
    
    })

    test('Debe de retornar un undefined si heroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById(id);

        expect( heroe ).toBe(undefined);
    
    })
    
    //TAREA:
    //EVALUAR HEROES DE D.C. -> TO EQUAL
    //  OTRA VARIABLE OWNER CON UN FILTER
    //EVALUAR LOS HEROES DE MARVEL
    //LENGTH == 2

    test('Debe de retornar los heroes de DC', () => {

        const heroes = getHeroesByOwner('DC');
        const heroesData = heroes.filter( h => h.owner === 'DC');

        expect( heroes ).toEqual(heroesData);
    
    })

    test('Debe de retornar 2 para los heroes de Marvel', () => {

        const countHeroesMarvel = getHeroesByOwner('Marvel');

        expect( countHeroesMarvel.length ).toBe(2);
    
    })
    

})
