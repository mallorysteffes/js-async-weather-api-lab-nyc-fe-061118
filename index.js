const API_KEY = "90b5b655e700f3b3c3c5644efef1a0ef"
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?"

function handleFormSubmit(event) {
  //handle submit event
  alert("thanks for submitting the form")
}

function fetchCurrentWeather(city) {
  //fetch current weather based on city
}

function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
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

let cityForm = document.getElementById("cityform")
 cityForm.addEventListener("submit", handleFormSubmit) 
  
})
