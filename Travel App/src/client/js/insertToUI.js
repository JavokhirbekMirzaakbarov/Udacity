const insertToUI = (geoData) => {
  const content = document.getElementById('title');

  content.insertAdjacentHTML(
    'afterend',
    `
        <div id="content">
          <div id="content-text">
            <h3 id="destination">Destination: ${geoData.name}</h3>
            <p id="countdown">Days Left: ${geoData.daysUntil}</p>
            <p id="current-weather">Current Weather: ${geoData.currentTemp} C° <img id="icon" src="https://www.weatherbit.io/static/img/icons/${geoData.weatherIcon}.png" alt="weather icon"/></p>
          </div>
          <img id="city-image" src=${geoData.image} alt="destination"/>
        </div>
      `,
  );
};
export { insertToUI };
