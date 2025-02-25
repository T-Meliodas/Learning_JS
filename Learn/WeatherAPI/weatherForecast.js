const portApi =
  "https://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=3aaf76d85ab21f7ae0cc40a4f575dc19&units=metric";

fetch(portApi)
  .then((responses) => responses.json())
  .then((data) => {
    const weatherDiv = document.getElementById("weather");
    const rainVolume = data.rain ? data.rain["1h"] : "No rain";
    weatherDiv.innerHTML = `
      <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
      <p><strong>Feels Like:</strong> ${data.main.feels_like} °C</p>
      <p><strong>Weather:</strong> ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Rain (last 1h):</strong> ${rainVolume} mm</p>
    `;
  })
  .catch((err) => {
    console.log("error", err);
    document.getElementById("weather").innerHTML =
      "<p>Failed to fetch weather data.</p>";
  });
const weather7D =
  "https://api.openweathermap.org/data/2.5/forecast?q=Hanoi&units=metric&appid=3aaf76d85ab21f7ae0cc40a4f575dc19";

fetch(weather7D)
  .then((responses) => responses.json())
  .then((data) => {
    const weatherSevenDiv = document.getElementById("weather7D");
    let forecastHTML = "<h3>7-Day Weather Forecast for Hanoi</h3>";

    const days = [];
    data.list.forEach((entry) => {
      const date = new Date(entry.dt * 1000);
      const day = date.toLocaleDateString();

      if (!days.includes(day)) {
        days.push(day);
        forecastHTML += `
          <div>
            <p><strong>Date:</strong> ${day}</p>
            <p><strong>Temperature:</strong> ${entry.main.temp} °C</p>
            <p><strong>Weather:</strong> ${entry.weather[0].description}</p>
            <p><strong>Humidity:</strong> ${entry.main.humidity}%</p>
            <hr />
          </div>
        `;
      }
    });

    weatherSevenDiv.innerHTML = forecastHTML;
  })
  .catch((err) => {
    console.log("Error fetching 7-day forecast:", err);
    document.getElementById("weather7D").innerHTML =
      "<p>Failed to fetch weather forecast data.</p>";
  });
