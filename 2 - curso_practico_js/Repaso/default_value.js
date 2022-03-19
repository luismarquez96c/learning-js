let dato;

// con if
if (!dato) { dato = 10 }

// con cortocircuito
console.log(Boolean(dato)) // return false
dato ||= 10; // se asigna 10 si dato es false
dato &&= 10; // se asigna 10 si dato es true
// en nuestro caso funcionará dato ||= 10 porque dato inicialmente es undefined
