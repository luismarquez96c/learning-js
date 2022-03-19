var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700}
]

const articulosBaratos = articulos.some( function (articulo, index, arrayCompleto) {
    console.log(`${articulo.costo} - ${index} - ${arrayCompleto.length}`)

    return articulo.costo <= 700;
} )

console.log(articulosBaratos)