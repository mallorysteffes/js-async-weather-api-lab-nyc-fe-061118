const API_KEY = "90b5b655e700f3b3c3c5644efef1a0ef"
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?"

function handleFormSubmit(event) {
  event.preventDefault();
  let city= document.getElementById("city").value;
  getWeatherFromApi(city);
}

function getWeatherFromApi(city) {
  fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city + "&APPID=" + API_KEY + "&units=imperial")
  .then(response => response.json())
  .then(displayWeather);
}

function fetchCurrentWeather(city) {
  //fetch current weather based on city
}

function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
  debugger;
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function() {
  let cityForm = document.getElementById("cityForm");
  cityForm.addEventListener("submit", handleFormSubmit) 
  
})
