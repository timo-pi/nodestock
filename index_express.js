//const express = require('express');
import express from 'express';
//const path = require('path');
import path from 'path';
import { engine } from 'express-handlebars';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const PORT = process.env.PORT || 8080;

// __dirname gibt es mit ECMAScript Modules nicht mehr, muss daher definiert werden
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set handlebars Middleware
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

let passing_stuff = "Dynamischer Inhalt einer Variable ins Frontend schreiben..."
// Set handlebars routes
app.get('/', function (req, res) {
    res.render('home', {
        stuff: passing_stuff,
        morestuff : "und noch weiterer Inhalt..."
    });
})

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Server Listening on Port ${PORT}!`));