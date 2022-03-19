//CODIGO CUADRADO
console.group('Cuadrado')

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return Math.pow(lado, 2);
}

console.groupEnd()

//CODIGO TRIÁNGULO

console.group('Triángulo')
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
};

function areaTriangulo(base, altura){
    return base * altura / 2
}

function calcularAlturaTrianguloIsosceles(lado1, lado2, base){

    if( lado1 !== lado2 ){
        return
    }
         
    if( lado1 === base ){
        return
    }
    
    
    if( 
        base  > (lado1 * 2) || 
        lado1 > (base + lado1) 
    ){
        return
    }else{
        const altura = Math.sqrt( Math.pow(lado1, 2) - ( Math.pow(base, 2) / 4) )
        console.log(`La altura es ${altura}`)
        return altura

    }

}

console.groupEnd()

//CODIGO CÍRCULO
console.group('Círculo')

//Diámetro
function diametroCirculo(radio){
    return radio * 2;
}

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI
}

//Área
function areaCirculo(radio){
    return Math.PI * Math.pow(radio, 2)
}

// Aquí intereactuamos con el HTML

//CUADRADO
function calcularPerimetroCuadrado(){
    const input = document.getElementById('InputCuadrado')
    const value = input.value

    const perimetro = perimetroCuadrado(value)

    alert('El perimetro del cuadrado es: ' + perimetro + "cm")
}

function calcularAreaCuadrado(){
    const input = document.getElementById('InputCuadrado')
    const value = input.value

    const area = areaCuadrado(value)

    alert('El área del cuadrado es: ' + area + "cm^2")
}

//TRIANGULO
function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById('InputLadoUnoTriangulo')
    const lado2 = document.getElementById('InputLadoDosTriangulo')
    const base = document.getElementById('InputLadoTresTriangulo')

    const value1 = lado1.value
    const value2 = lado2.value
    const value3 = base.value

    const perimetro = perimetroTriangulo(value1 * 1, value2 * 1, value3 * 1)

    alert('El perimetro del triángulo es: ' + perimetro + "cm")
}

function calcularAreaTriangulo(){
    const lado1 = document.getElementById('InputLadoUnoTriangulo')
    const lado2 = document.getElementById('InputLadoDosTriangulo')
    const base = document.getElementById('InputLadoTresTriangulo')

    const value1 = lado1.value
    const value2 = lado2.value
    const baseValue = base.value

    const area = areaTriangulo(baseValue * 1, calcularAlturaTrianguloIsosceles(value1 * 1, value2 * 1, baseValue * 1))

    alert('El área del triángulo es: ' + area + "cm^2")
}


function calcularDiametroCirculo(){
    const input = document.getElementById('InputRadioCirculo')
    const radio = input.value

    const diametro = diametroCirculo(radio)

    alert('El diametro del circulo es: ' + diametro + "cm")
}

function calcularCircunferenciaCirculo(){
    const input = document.getElementById('InputRadioCirculo')
    const radio = input.value

    const perimetro = perimetroCirculo(radio)

    alert('El perimetro del circulo es: ' + perimetro + "cm")
}

function calcularAreaCirculo(){
    const input = document.getElementById('InputRadioCirculo')
    const radio = input.value

    const area = areaCirculo(radio)

    alert('El área del circulo es: ' + area + "cm^2")
}