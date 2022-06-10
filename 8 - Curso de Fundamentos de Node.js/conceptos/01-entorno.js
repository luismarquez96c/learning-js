//1. VARIABLES DE ENTORNO: llamado -> NOMBRE=Luis node conceptos\entorno.js
let saludo = process.env.NOMBRE || 'sin nombre';

//llamado sería: NOMBRE=Luis WEB=loquesea.com node conceptos\entorno.js
let web = process.env.WEB || 'sin web';

console.log(`Hola ${saludo}`);//Imprime: Hola Luis
console.log(`Hola mi web es ${web}`);//Imprime: Hola mi web es loquesea.com


//ESTA VARIABLE DE ENTORNO VIENE DE LAS VARIABLES DE WINDOWS.
console.log(`Mi nombre: ${process.env.MI_NOMBRE}`)

