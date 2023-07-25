import { formHandler } from './js/formHandler';
import { insertToUI } from './js/insertToUI';
import { geoNames } from './js/callGeoNames';
import { pixabay } from './js/callPixabay';
import { weatherbit } from './js/callWeatherbit';

import './styles/style.scss';

document.getElementById('generate').addEventListener('click', formHandler);

export { formHandler, insertToUI, geoNames, pixabay, weatherbit };
