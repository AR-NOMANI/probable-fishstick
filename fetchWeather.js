function fetchWeather(lat, lon) {
    const apiKey = "YOUR_VALID_API_KEY"; // Replace with a valid API key

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
    document.getElementById("weather").innerHTML = 
        `<strong>Weather:</strong> ${data.weather[0].description}, <strong>Temp:</strong> ${data.main.temp}°C, <strong>Humidity:</strong> ${data.main.humidity}%, <strong>Wind Speed:</strong> ${data.wind.speed} m/s`;

        })
.catch(error => {
    console.error("Error fetching weather data:", error);
    document.getElementById("weather").innerText = "Weather data unavailable. Please try again later.";
});

}
