/* Global Variables */
const API_KEY = "19616e878dd33e53e4604cd18f7f6ae0";
const BASE_URL = "http://api.openweathermap.org";
const API_URL = "http://localhost:8080";

// Create a new date instance dynamically with JS
const getCurrentDate = () => {
  let d = new Date();
  let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();
  return newDate;
};

// Get current weather data from openWeatherMap API
const getCurrentWeatherData = async (baseUrl, zipCode, apiKey) => {
  try {
    // Obtaining lat, lon coordinates to get weather info
    const res = await fetch(
      `${baseUrl}/geo/1.0/zip?zip=${zipCode}&appid=${apiKey}`,
      {
        method: "GET",
        mode: "cors",
      }
    );

    const coordinates = await res.json();
    if (!coordinates) throw new Error("Invalid zip or error!");

    const { lat, lon } = coordinates;

    // Requesting weather data with coordinates obtained
    const weatherRes = await fetch(
      `${baseUrl}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`,
      {
        method: "GET",
        mode: "cors",
      }
    );
    const weatherData = await weatherRes.json();

    return weatherData.main.temp;
  } catch (error) {
    alert(error);
  }
};

// Add temperature data to API data
const postCurrentTemperature = async (path, data) => {
  try {
    const response = await fetch(path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (error) {
    alert(error);
  }
};

// Display temperature data
const displayTempData = async () => {
  try {
    // Select UI elements
    const date = document.getElementById("date");
    const temp = document.getElementById("temp");
    const content = document.getElementById("content");

    // Get temperature info
    const response = await fetch(`${API_URL}/temperature`, {
      method: "GET",
    });

    const data = await response.json();
    if (!data) throw Error("Something went wrong!");

    // Selecting latest temperature info
    const lastItem = Object.values(data.data).at(-1);

    // Displaying latest temp info
    date.innerHTML = lastItem.date;
    temp.innerHTML = lastItem.temperature;
    content.innerHTML = lastItem.userResponse;
  } catch (error) {
    alert(error);
  }
};

// Adding click listener to GENERATE button
const generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", async () => {
  try {
    const zipCode = document.getElementById("zip").value;
    if (!zipCode) throw new Error("Provide zip code");

    const userResponse = document.getElementById("feelings").value;
    if (!userResponse) throw new Error("Provide your feelings");

    const temperature = await getCurrentWeatherData(BASE_URL, zipCode, API_KEY);
    const date = getCurrentDate();
    const res = await postCurrentTemperature(API_URL, {
      temperature,
      date,
      userResponse,
    });

    if (res.status === "success") displayTempData();
  } catch (error) {
    alert(error);
  }
});
