# Introduction

The app will allow users to run Natural Language Processing (NLP) on articles or blogs found on other websites. Using API called MeaningCloud, a simple web interface is developed to interact with NLP system. The app will give back pertinent information about the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

Node and express are used as the webserver and routing, and webpack is build tool of choice. Using webpack, the app is set up to have development and production environments, each with their own set of tools and commands.

Also, Jest is used to test route and other JavaScript functions of the application

## How to run the project

### Development mode

```
$ npm run build-dev
```

## Production mode

```
$ npm run build-prod
```

```
$ npm run start
```

## Features

1. If the input is invalid URL, error message is displayed.
2. If it is valid, API call is done and the response will be displayed in UI.
3. It works offline with service worker setup in webpack.
4. API keys are hidden using dotenv
5. It has unit testing using Jest.
6. It has separate development and production configurations for webpack.
7. It has developer setup environment using webpack-dev-server.
8. It minifies css and js in production build.

## Technologies used

- Express/NodeJS
- JavaScript
- HTML
- Sass
- Webpack
- Git/GitHub
- Jest

## Screenshots

![Overview](https://github.com/JavokhirbekMirzaakbarov/Udacity/blob/main/Evaluate%20News%20NLP/images/overview.jpg)

![Overview](https://github.com/JavokhirbekMirzaakbarov/Udacity/blob/main/Evaluate%20News%20NLP/images/success.jpg)
