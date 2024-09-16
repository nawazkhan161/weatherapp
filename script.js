function getWeather() {
    let cityName = document.getElementById("city").value;
    if (!cityName) {
        document.getElementById("weather-info").innerHTML = "<p>Please enter a city name.</p>";
        return;
    }
    
    let apiKey = '52876687f6ac49ceafd110439240809'; // Replace with your own API key
    let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=yes`;

    axios.get(url)
        .then(function (response) {
            let weather = response.data;
            let weatherHtml = `
                <h2>Weather in ${weather.location.name}</h2>
                <p>Temperature: ${weather.current.temp_c} °C</p>
                <p>Condition: ${weather.current.condition.text}</p>
                <p>Humidity: ${weather.current.humidity}%</p>
                <p>Wind Speed: ${weather.current.wind_kph} kph</p>
            `;
            document.getElementById("weather-info").innerHTML = weatherHtml;
        })
        .catch(function (error) {
            console.error(error);
            document.getElementById("weather-info").innerHTML = "<p>Could not retrieve weather data. Please try again.</p>";
        });
}