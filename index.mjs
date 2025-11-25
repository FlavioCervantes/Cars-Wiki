//A simple Express.js application that serves dynamic web pages about cars using EJS templating engine and API Ninjas Cars API.
//Author - Flavio Cervantes
//https://api.api-ninjas.com/v1/carmakes
import express from 'express';
import fetch from 'node-fetch';
import { getModels } from 'car-info';

const app = express();
app.set("view engine", "ejs");
// use of the public folder.
app.use(express.static("public"));

const apiKey = "a9HuAwSgSe04zsvPh3KDZA==nEolnlJz7PmLmAod";

app.get('/', async(req, res) => {
    let url = `https://api.api-ninjas.com/v1/cars?limit=10&make=toyota`;
    let response = await fetch(url, {
        headers: { 'X-Api-Key': apiKey }
    });
    let cars = await response.json();
    console.log('Cars data:', cars);
    if (!Array.isArray(cars)) {
        cars = [];
    }
    res.render("index", {cars})
});

app.get('/toyota', async (req, res) => {
    // Get all Toyota models from car-info package
    let models = getModels('Toyota');
    
    // Get car data from API
    let url = `https://api.api-ninjas.com/v1/cars?make=toyota&limit=20`;
    let response = await fetch(url, {
        headers: { 'X-Api-Key': apiKey }
    });
    let cars = await response.json();
    if (!Array.isArray(cars)) {
        cars = [];
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
    let cars = await response.json();
    if (!Array.isArray(cars)) {
        cars = [];
    }
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
    let cars = await response.json();
    if (!Array.isArray(cars)) {
        cars = [];
    }
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
    let cars = await response.json();
    if (!Array.isArray(cars)) {
        cars = [];
    }
    res.render('mazda', {cars, models});
});

app.listen(3000, () => {
   console.log('server started');
});

app.get('/make', async (req, res) => {
    let make = req.query.make || 'toyota';
    let url = `https://api.api-ninjas.com/v1/cars?make=${make}&limit=20`;
    let response = await fetch(url, {
        headers: { 'X-Api-Key': apiKey }
    });
    let CarsMake = await response.json();
    console.log(CarsMake);
    res.render('make', {CarsMake});
});

app.get('/models', async (req, res) => {
    let model = req.query.model || 'camry';
    let url = `https://api.api-ninjas.com/v1/cars?model=${model}&limit=20`;
    let response = await fetch(url, {
        headers: { 'X-Api-Key': apiKey }
    });
    let CarModels = await response.json();
    console.log(CarModels);
    res.render('models', { CarModels});
});

app.get('/trim', async (req, res) => {
    let year = req.query.year || '2020';
    let url = `https://api.api-ninjas.com/v1/cars?year=${year}&limit=20`;
    let response = await fetch(url, {
        headers: { 'X-Api-Key': apiKey }
    });
    let CarTrim = await response.json();
    console.log(CarTrim);
    res.render('trim', { CarTrim});
});

app.get('/details', async (req, res) => {
    let make = req.query.make || 'toyota';
    let model = req.query.model || 'camry';
    let url = `https://api.api-ninjas.com/v1/cars?make=${make}&model=${model}&limit=1`;
    let response = await fetch(url, {
        headers: { 'X-Api-Key': apiKey }
    });
    let CarDetails = await response.json();
    console.log(CarDetails);
    res.render('details', { CarDetails});
});

// End of index.mjs

