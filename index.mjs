//A simple Express.js application that serves dynamic web pages about planets in the solar system using EJS templating engine and fetches random images from Unsplash API.
//It uses the 'npm-solarsystem' package to get planet data and serves static files from the 'public' directory.
//Author - Flavio Cervantes
import express from 'express';
import fetch from 'node-fetch';
const planets = (await import('npm-solarsystem')).default;
const app = express();
app.set("view engine", "ejs");
// use of the public folder.
app.use(express.static("public"));

app.get('/', async(req, res) => {
     let apiKey = "7756a1e81f817c186cf57294e1c19b37b49c54b8f34e7c499ee0ce5cd86cd16e";
	let url = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&featured=true&query=solar-system`;
    let response = await fetch(url);
    let data = await response.json();
    let randomImage = data.urls.full;
    res.render("index",{"image":randomImage})
});

// or u can also use 
// res.render("index",{randomImage})

//get NASA's pic of the day
app.get('/apod', async(req, res) => {
    let apiKey = process.env.NASA_API_KEY;
    if (!apiKey) {
        return res.status(500).send("NASA API key not set in environment variables.");
    }
    // Use query parameter 'date' if provided, otherwise use today's date
    let date = req.query.date;
    if (!date) {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        date = `${yyyy}-${mm}-${dd}`;
    }
    let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;
    let response = await fetch(url);
    let data = await response.json();
    res.render("apod", { apod: data });
});


app.listen(3000, () => {
   console.log('server started');
});

app.get('/earth', (req, res) => {
 let planetEarth = planets.getEarth();
 console.log(planetEarth);
 res.render('earth', { planetEarth});
});

app.get('/mars', (req, res) => {
 let planetMars = planets.getMars();
 console.log(planetMars);
 res.render('mars', { planetMars});
});

app.get('/jupiter', (req, res) => {
 let planetJupiter = planets.getJupiter();
 console.log(planetJupiter);
 res.render('jupiter', { planetJupiter});
});

app.get('/saturn', (req, res) => {
 let planetSaturn = planets.getSaturn();
 console.log(planetSaturn);
 res.render('saturn', { planetSaturn});
});

app.get('/uranus', (req, res) => {
 let planetUranus = planets.getUranus();
 console.log(planetUranus);
 res.render('uranus', { planetUranus});
});
app.get('/neptune', (req, res) => {
 let planetNeptune = planets.getNeptune();
 console.log(planetNeptune);
 res.render('neptune', { planetNeptune});
});
app.get('/venus', (req, res) => {
 let planetVenus = planets.getVenus();
 console.log(planetVenus);
 res.render('venus', { planetVenus});
});
app.get('/mercury', (req, res) => {
 let planetMercury = planets.getMercury();
 console.log(planetMercury);
 res.render('mercury', { planetMercury});
}); 
app.get('/pluto', (req, res) => {
 let planetPluto = planets.getPluto();
 console.log(planetPluto);
 res.render('pluto', { planetPluto});
});
// End of index.mjs

