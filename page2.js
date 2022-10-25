const API_KEY = "7559b59b78546c7cc2a258efb4e982d8";
const COORDS = "coords";

const weatherInfo = document.querySelector(".weatherInfo");
const weatherInfo2 = document.querySelector(".weatherInfo2");
const weatherInfo3 = document.querySelector(".weatherInfo3");

function init() {
  handleSuccess();
}

function handleSuccess() {
  const latitude = 37.3925;
  const longitude = 126.9269;
  getWeather(latitude, longitude);
}

function handleError() {
  console.log("can't not access to location");
}

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const place = json.name;
      const weatherDescription = json.weather[0].description;

      weatherInfo.innerText = `${temperature}°C`;
      weatherInfo2.innerText = `${place}`;
      weatherInfo3.innerText = `${weatherDescription}`;
    })
    .catch((error) => console.log("error:", error));
}

init();

var btn = document.querySelector(".btn");

btn.addEventListener("mouseover", function () {
  document.querySelector(".datetime").style.background = "#daf6ff";
  document.querySelector(".datetime").style.color = "#0f3854";
});
btn.addEventListener("mouseout", function () {
  document.querySelector(".datetime").style.background = "";
  document.querySelector(".datetime").style.color = "#daf6ff";
});
