const pixabay = async (city) => {
  const apiKey = '38436779-1d59ef6838ecd72391db9a670';
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${city}&image_type=photo`;

  const res = await fetch(url);
  let result = {};
  try {
    result = await res.json();
  } catch (err) {
    console.log('Error: ', err);
  }
  return result;
};

export { pixabay };
