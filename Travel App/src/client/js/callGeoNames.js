const geoNames = async (url, city, apiKey) => {
  const res = await fetch(url + city + apiKey);

  let result = {};
  try {
    result = await res.json();
  } catch (err) {
    console.log('Error: ', err);
  }
  return result;
};

export { geoNames };
