/*
    SETUP
*/
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'))

const { engine } = require('express-handlebars');
var exphbs = require('express-handlebars');         // import express-handlebars
app.engine('.hbs', engine({extname: ".hbs"}));      // create instance of handlebars engine to process templates
app.set('view engine', '.hbs');                     // use handlebars engine for *.hbs files

// Load variables
require("dotenv").config()
const source = process.env.source;
const port = process.env.port;
const ldblm_port = process.env.ldblm_port;
const byte_hikers_port = process.env.byte_hikers_port;
const ocean_port = process.env.ocean_port;


/*
    ROUTES
*/

// INDEX PAGE - GET route
app.get('/', function(req, res) {
    res.render('index', { 
        title: 'Burkely Pettijohn - Home',
        source: source,
        ldblm_port: ldblm_port,
        byte_hikers_port: byte_hikers_port,
        ocean_port: ocean_port
    });
});

app.get('/projects', function(req, res) {
    res.render('projects', {
        title: 'Burkely Pettijohn - Projects',
        source: source,
        ldblm_port: ldblm_port,
        byte_hikers_port: byte_hikers_port,
        ocean_port: ocean_port
    });
});

app.get('/resume', function(req, res) {
    res.render('resume', {
        title: 'Burkely Pettijohn - Resume' //, resume: resume
    });
});


/*
    LISTENER
*/

app.listen(port, function() {            
    console.log(`Express started on ${source}:${port}; press Ctrl-C to terminate.`)
});
