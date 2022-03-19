function auto( marca, modelo, annio ){
    this.marca = marca
    this.modelo = modelo
    this.annio = annio
}

const autoNuevo = new auto(
    'Toyota',
    'Corolla',
    2020
)

console.log(autoNuevo)