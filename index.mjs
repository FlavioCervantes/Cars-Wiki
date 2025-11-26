//A simple Express.js application that serves dynamic web pages about cars using EJS templating engine and API Ninjas Cars API.
//Author - Flavio Cervantes
//https://api.api-ninjas.com/v1/carmakes


import express from 'express';
import fetch from 'node-fetch';

// car-info package to get car models (NPM)
//https://www.npmjs.com/package/car-info
import { getModels } from 'car-info';
import {getMakes} from 'car-info';

 

const makes = getMakes();
const app = express();
app.set("view engine", "ejs");
// use of the public folder.
app.use(express.static("public"));

const apiKey = "a9HuAwSgSe04zsvPh3KDZA==nEolnlJz7PmLmAod";


// Home Route 
 // N P  M  C A R  M A K E S
app.get('/', (req, res) => {
    // Get all car makes from car-info package (NPM)
    const carmakes = getMakes();
    console.log('Car makes from NPM:', carmakes);
    res.render("index", {carmakes})
});

// T O Y O T A   H O N D A   N I S S A N   M A Z D A   R O U T E S - API  N I N J A S

app.get('/toyota', async (req, res) => {
    // Get all Toyota models from car-info package
    let models = getModels('Toyota');
    
    // Get car data from API
    let url = `https://api.api-ninjas.com/v1/cars?make=toyota&limit=20`;
    let response = await fetch(url, {
        headers: { 'X-Api-Key': apiKey }
    });
    // Get JSON data
    let cars = await response.json();
    console.log('Cars data:', cars);
    if (!Array.isArray(cars)) {
        cars = [];
        console.log('No car data found, setting cars to empty array.');
    }
    res.render('toyota', {cars, models});
    
});

app.get('/honda', async (req, res) => {
    // Get all Honda models from car-info package
    let models = getModels('Honda');
    
    // Get car data from API
    let url = `https://api.api-ninjas.com/v1/cars?make=honda&limit=20`;
    let response = await fetch(url, {
        headers: { 'X-Api-Key': apiKey }
    });
    // Get JSON data
    let cars = await response.json();
    if (!Array.isArray(cars)) {
        cars = [];
    }
    // Render the Honda page with car data and models
    res.render('honda', {cars, models});
});

app.get('/nissan', async (req, res) => {
    // Get all Nissan models from car-info package
    let models = getModels('Nissan');
    
    // Get car data from API
    let url = `https://api.api-ninjas.com/v1/cars?make=nissan&limit=20`;
    let response = await fetch(url, {
        headers: { 'X-Api-Key': apiKey }
    });
    // Get JSON data
    let cars = await response.json();
    if (!Array.isArray(cars)) {
        cars = [];
    }
    // Render the Nissan page with car data and models
    res.render('nissan', {cars, models});
});

app.get('/mazda', async (req, res) => {
    // Get all Mazda models from car-info package
    let models = getModels('Mazda');
    
    // Get car data from API
    let url = `https://api.api-ninjas.com/v1/cars?make=mazda&limit=20`;
    let response = await fetch(url, {
        headers: { 'X-Api-Key': apiKey }
    });
    // Get JSON data
    let cars = await response.json();
    // Check if cars is an array
    if (!Array.isArray(cars)) {
        cars = [];
    }
    // Render the Mazda page with car data and models
    res.render('mazda', {cars, models});
});

// start the server
app.listen(3000, () => {
   console.log('server started');
});







// End of index.mjs

