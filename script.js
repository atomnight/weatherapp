const apid = "33e9861f5dbc5e9a3968678e2c2377f6";

const searchInput = document.querySelector("[data-search]")

const feelsLikeText = document.getElementById("feelsLike");
const humidityText = document.getElementById("humidity");
const pressureText = document.getElementById("pressure");
const seaLevelText = document.getElementById("seaLevel");
const temperatureText = document.getElementById("temperature");

const windDirectionText = document.getElementById("windDir");
const windGustText = document.getElementById("windGust");
const windSpeedText = document.getElementById("windSpeed");

const weatherDescriptionText = document.getElementById("weatherDesc");
    
// if user press search // add a try catch later
searchInput.addEventListener('search', () => {
    city = searchInput.value;
    displayWeatherContent(city);
}); 

async function displayWeatherContent(city) {
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=33e9861f5dbc5e9a3968678e2c2377f6`, {mode: 'cors'})
        const weatherData = await response.json();
        feelsLikeText.innerText = `Feels like: ${weatherData.list[0].main.feels_like}`;
        humidityText.innerText = `Humidity: ${weatherData.list[0].main.humidity}`;
        pressureText.innerText = `Pressure: ${weatherData.list[0].main.pressure}`;
        seaLevelText.innerText = `Sea Level: ${weatherData.list[0].main.sea_level}`;
        temperatureText.innerText = `Temperature: ${weatherData.list[0].main.temp}`;

        weatherDescriptionText.innerText = `Description: ${weatherData.list[0].weather[0].description}`;

        windDirectionText.innerText = `Wind Direction: ${weatherData.list[0].wind.deg}`;
        windGustText.innerText = `Wind Gust: ${weatherData.list[0].wind.gust}`;
        windSpeedText.innerText = `Wind Speed: ${weatherData.list[0].wind.speed}`;
    } catch (error) {
        alert("Please pass valid input!");
    }
}




