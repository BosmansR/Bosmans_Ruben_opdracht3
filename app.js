// Express toevoegen aan Node.js
const express = require("express");
const app = express();

// bibliotheek inladen om paden naar folder te maken
const path = require("path");

// applicatiepoort instellen
const port = 5000;

// EJS configureren
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

// Toegang Public
app.use(express.static("public"));

// Json data linken
const museum = require("./data/museum.json");

// route naar "homepagina" laten werken
app.get("/", function(req, res){
  res.render("home", {
    items: museum.kunstwerken
  });
});

// route naar volledige tentoonstelling
app.get("/allekunst", function(req, res){
  res.render("allekunst", {
    items: museum.kunstwerken
  });
});

// route naar kunstwerk info
app.get("/allekunst/:itemid", function(req, res){
  res.render("info", {
    item: museum.kunstwerken[req.params.itemid]
  });
});

// route naar "contactpagina"
app.get("/contact", function(req, res){
  res.render("contact")
});

// route naar "contactpagina"
app.get("/menu", function(req, res){
  res.render("menu")
});

// app luisteren naar applicatiepoort
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'));
