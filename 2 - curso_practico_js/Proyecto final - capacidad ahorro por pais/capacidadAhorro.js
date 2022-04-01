/**
 * INIT METHODS
 */

const createOptionToCountrySelect = (pais) => {
    const option = document.createElement('option');
    option.value = pais;
    option.textContent = pais;
    return option;
}

const countrySelectElement1 = document.getElementById('country1')
const countrySelectElement2 = document.getElementById('country2');

paisesArray.forEach( pais => {
    countrySelectElement1.appendChild(createOptionToCountrySelect(pais));
    countrySelectElement2.appendChild(createOptionToCountrySelect(pais));
} );


const dataCountry1Element = document.getElementById('country-data1');
const dataCountry2Element = document.getElementById('country-data2');


const rellenarDataPais = (paisSeleccionado, paisElemento) => {
    
    const salariosCountry = salariosPaises[paisSeleccionado];
    paisElemento.innerHTML = '';

    salariosCountry.forEach( ( {salary, fixedCost, saving} ) => {
        
        const parrafo = document.createElement('p');

        // const 
        const textSalario = document.createTextNode('Salario: ');
        const textGasto = document.createTextNode(', Gasto fijo: ');
        const textAhorro = document.createTextNode(', ahorro: ');

        const spanSalario = document.createElement('span');
        spanSalario.textContent =  '$' + salary;

        const spanGasto = document.createElement('span');
        spanGasto.textContent =  '$' + fixedCost;

        const spanAhorro = document.createElement('span');
        spanAhorro.textContent =  '$' + saving;


        parrafo.appendChild(textSalario)
        parrafo.appendChild(spanSalario)

        parrafo.appendChild(textGasto)
        parrafo.appendChild(spanGasto)

        parrafo.appendChild(textAhorro)
        parrafo.appendChild(spanAhorro)

        paisElemento.appendChild(parrafo);
    } );

    const countrySubtitle1 = document.getElementById('country-title1');
    const countrySubtitle2 = document.getElementById('country-title2');

    countrySubtitle1.innerHTML = countrySelectElement1.value;
    countrySubtitle2.innerHTML = countrySelectElement2.value;

};

rellenarDataPais(countrySelectElement1.value, dataCountry1Element);
rellenarDataPais(countrySelectElement2.value, dataCountry2Element);

/**
 * FIN INIT METHOS
 */

countrySelectElement1.addEventListener( 'change', () =>{
    rellenarDataPais(countrySelectElement1.value, dataCountry1Element);
});

countrySelectElement2.addEventListener( 'change', () =>{
    rellenarDataPais(countrySelectElement2.value, dataCountry2Element);

} );


const numEsPar = num => num % 2 === 0;

const calcularMediaAritmetica = (lista) => {

    const sumaElemento = lista.reduce( (suma = 0, elemento) => suma + elemento );

    console.log(sumaElemento, ' ', lista.length);

    const media = sumaElemento / lista.length;

    return media;
}

const calcularMediana = (lista) => {

    const listalength = lista.length;
    const mitadLista = parseInt( listalength / 2 );

    let mediana;
    if(numEsPar( listalength )) {
        const elem1 = lista[mitadLista - 1];
        const elem2 = lista[mitadLista];

        mediana = calcularMediaAritmetica( [elem1, elem2] );
    }else{
        mediana = lista[mitadLista];
    }

    return mediana;

}

/**
 * INTERACCION CON NAVEGADOR
 */

document.getElementById('calcularResultados')
    .addEventListener( 'click', () => {
        
        const pais1Value = countrySelectElement1.value;
        const pais2Value = countrySelectElement2.value;

        if( ! Boolean(validarOpcionesPais(pais1Value, pais2Value)) ){
            return;
        }

        /**
         * CALCULOS
         */
        const porcentajeAhorroPais1 = salariosPaises[pais1Value].map( ({salary, saving}) => saving / salary);
        const porcentajeAhorroPais2 = salariosPaises[pais2Value].map( ({salary, saving}) => saving / salary);

        const mediaAhorroPais1 = calcularMediaAritmetica(porcentajeAhorroPais1);
        const medianaAhorroPais1 = calcularMediana(porcentajeAhorroPais1);

        const mediaAhorroPais2 = calcularMediaAritmetica(porcentajeAhorroPais2);
        const medianaAhorroPais2 = calcularMediana(porcentajeAhorroPais2);

        /**
         * ESCRIBIENDO RESULTADOS EN FRONTEND
         */
        const pais1 = {
            media: mediaAhorroPais1,
            mediana: medianaAhorroPais1,
            nombre: pais1Value
        }

        const pais2 = {
            media: mediaAhorroPais2,
            mediana: medianaAhorroPais2,
            nombre: pais2Value
        }

         imprimirResultadoPaises(pais1, pais2);
} );


const imprimirResultadoPaises = (
     {media: media1, mediana: mediana1, nombre: nombre1}, 
     {media: media2, mediana: mediana2, nombre: nombre2} 
     ) => {

    const resultMediaElement1 = document.getElementById('media1');
    const resultMedianaElement1 = document.getElementById('mediana1');
    resultMediaElement1.innerText = media1;
    resultMedianaElement1.innerText = mediana1;
    
    const resultMediaElement2 = document.getElementById('media2');
    const resultMedianaElement2 = document.getElementById('mediana2');
    resultMediaElement2.innerText = media2;
    resultMedianaElement2.innerText = mediana2;

    const resultsConclusionElement = document.getElementById('country-result');
    resultsConclusionElement.style.display = 'block';
    let mensaje = '';

    if(mediana1 > mediana2) mensaje = `${nombre1} es más ahorrador que ${nombre2}`;
    else mensaje = `${nombre2} es más ahorrador que ${nombre1}`;

    resultsConclusionElement.innerText = mensaje;


    document.getElementById('country-results-conclusion').style.display = 'block';
}

const validarOpcionesPais = (pais1, pais2) =>{
    if( !pais1 ){
        alert( 'pais1 posee una opcion invalida: ' + pais1 );
        return
    }

    if( !pais2 ){
        alert( 'pais2 posee una opcion invalida: ' + pais2 );
        return
    }

    if( pais1 === pais2 ){
        alert('Pais 1 no puede ser igual a pais 2')
        return
    }

    if(!paisesArray.includes( pais1 )){
        console.log('Pais 1: opción invalida (' + pais1 + ')');
        return
    }

    if(!paisesArray.includes( pais2 )){
        console.log('Pais 2: opción invalida (' + pais2 + ')');
        return
    }

    return true;
}