var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700}
]

var nombreArticulos = articulos.map( function (articulo, index, articulos) {
    console.log(`${articulo.nombre} ${index} ${articulos.length}`)

    return articulo.nombre
} )

console.log(nombreArticulos)