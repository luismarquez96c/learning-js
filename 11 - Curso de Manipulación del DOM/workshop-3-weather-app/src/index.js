import h from 'hyperscript'
const land = 'sp';
const apiKey = 'ce37cab01e6eaaa4d4edeb9e8a491c4d';
const baseUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&lang=${land}&q=`;

const weatherCardElement = document.querySelector('.weather-card');

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputElement = event.target.querySelector('input');

    const cityName = inputElement.value;

    const requestUrl = baseUrl + cityName;

    window.fetch( requestUrl )
        .then( response => response.json() )
        .then(json => {

            if(json.cod != '200'){
                weatherCardElement.style = 'display: none';
                throw Error('Pais no encontrado!');
            }

            writeDataIntoHtml(json);
        })
        .catch( console.log );

} );


const writeDataIntoHtml = ({ weather, main, wind, name, sys: {country} }) => {
    weatherCardElement.style = 'display: block';
    
    const countryResultElement = document.querySelector('.country-result');

    const {description} = weather[0];
    countryResultElement.innerHTML = description;

    const citySpanElement = weatherCardElement.querySelector('p.city > span');
    citySpanElement.innerHTML = '';
    citySpanElement.append(name);
    
    const temperatureSpanElement = weatherCardElement.querySelector('p.temperature > span');
    const tempAsCelsius = main.temp - 273.85;
    temperatureSpanElement.innerHTML = '';
    temperatureSpanElement.append( document.createTextNode(Math.trunc(tempAsCelsius) + "\u00B0 Celsius" ) );
    
    const humiditySpanElement = weatherCardElement.querySelector('p.humidity > span');
    humiditySpanElement.innerHTML = '';
    humiditySpanElement.append(main.humidity + " %");
    
    const windSpeedSpanElement = weatherCardElement.querySelector('p.wind-speed > span');
    windSpeedSpanElement.innerHTML = '';
    windSpeedSpanElement.append(wind.speed + 'm/s');

}