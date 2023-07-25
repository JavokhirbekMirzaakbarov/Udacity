const weatherbit = async (geoData) => {
  const apiKey = '67ad077a5a9e4fa9bd95731d2b86b3ce';
  const url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${geoData.lat}&lon=${geoData.lng}&key=${apiKey}`;

  const res = await fetch(url);
  let result = {};
  try {
    result = await res.json();
  } catch (err) {
    console.log('Error: ', err);
  }
  return result;
};

export { weatherbit };
