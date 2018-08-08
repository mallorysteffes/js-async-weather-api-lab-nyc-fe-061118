const API_KEY = "90b5b655e700f3b3c3c5644efef1a0ef"
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?"

function handleFormSubmit(event) {
  event.preventDefault();
  let city= document.getElementById("city").value;
  getWeatherFromApi(city);
  fetchFiveDayForecast(city);
}

function getWeatherFromApi(city) {
  fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city + "&APPID=" + API_KEY + "&units=imperial")
  .then(response => response.json())
  .then(displayWeather);
}

function displayWeather(weatherJson) {
let temp = weatherJson.main.temp;
let tempRow = document.getElementById("temp");
tempRow.innerHTML = temp;
}


function fetchFiveDayForecast(city) {
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=` + city + "&APPID=" + API_KEY)
.then(response => response.json())
.then(displayFiveDayForecast)
}

function displayFiveDayForecast(json) {
let forecast = json.list.slice(0, 5);
  
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function() {
  let cityForm = document.getElementById("cityForm");
  cityForm.addEventListener("submit", handleFormSubmit) 
  
})
