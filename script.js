const apiKey = "d4a357008b478ee36125eac9197cf6bc"; // Replace with your OpenWeatherMap API key
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");


searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city === "") {
        alert("Please enter a city name");
        return;
    }
    getWeather(city);
});

function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            cityName.textContent = `${data.name}, ${data.sys.country}`;
            temperature.textContent = `🌡 Temperature: ${data.main.temp}°C`;
            description.textContent = `☁ Condition: ${data.weather[0].description}`;
            humidity.textContent = ` Humidity: ${data.main.humidity}`;
            weatherResult.classList.remove("hidden");
        })
        .catch(error => {
            alert(error.message);
        });
}
