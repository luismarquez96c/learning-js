const getUsuarioActivo = (nombre) => ({
    uid: 'ABC123456',
    username: nombre
});//PODEMOS DEVOLVER OBJETOS IMPLICITOS EN ARROW FUNCTIONS
// PARA ELLO DEBEMOS DE ENVOLVER EL OBJETO EN PARENTESIS
// SINO, JS NO SABRÍA DIFERENCIAR ENTRAS LAS LLAVES DEL 
// ARROW FUNCTION Y LAS LLAVES DEL OBJETO

const usuarioActivo = getUsuarioActivo('Luis');

console.log(usuarioActivo)