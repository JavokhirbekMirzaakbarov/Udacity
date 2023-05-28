const dotenv = require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mockAPIResponse = require('./mockAPI.js');

const textapi = {
  key: process.env.API_KEY,
};

const app = express();

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
  res.sendFile(path.resolve('dist/index.html'));
});

app.get('/test', function (req, res) {
  res.send(mockAPIResponse);
});

app.post('/', async function (req, res) {
  try {
    const formData = new FormData();
    formData.append('key', textapi.key);
    formData.append('url', req.body.url);
    formData.append('lang', 'en');

    const requestOptions = {
      method: 'POST',
      body: formData,
    };

    const response = await fetch(
      'https://api.meaningcloud.com/sentiment-2.1',
      requestOptions
    );

    const result = await response.json();

    res.status(200).json(result);
  } catch (error) {
    console.log('Error', error);
  }
});

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
