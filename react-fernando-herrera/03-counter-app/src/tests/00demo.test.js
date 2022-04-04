
//https://jestjs.io/

//Cuando creamos nuestra aplicación react configura jest para testing
//Jest busca archivos con terminación .test.js y busca la función test
//y la ejecutra
//El primer argumento de test() es lo que la prueba hace y el segundo argumento
//es un callback
// test('should ', () => {
    
// })

//LA FUNCION DESCRIBE A GRUPA UN SET DE TESTS
describe('Pruebas en el archivo 00demo.test.js', () => {
    test('deben de ser iguales los strings', () => {
    
        //1. inicialización
        const mensaje = 'Hola Mundo';
    
        //2. estimulo
        const mensaje2 = `Hola Mundo`;
    
        //3. observar el comportamiento
        expect(mensaje).toBe(mensaje2);
    
    })

    
})

