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
const port = process.env.PORT || 8080;
const ldblm_site = process.env.ldblm_site;
const byte_hikers_site = process.env.byte_hikers_site;
const oceanography_site = process.env.oceanography_site;


/*
    ROUTES
*/

// INDEX PAGE - GET route
app.get('/', function(req, res) {
    res.render('index', { 
        title: 'Burkely Pettijohn - Home',
        ldblm_site: ldblm_site,
        byte_hikers_site: byte_hikers_site,
        oceanography_site: oceanography_site
    });
});

app.get('/projects', function(req, res) {
    res.render('projects', {
        title: 'Burkely Pettijohn - Projects',
        ldblm_site: ldblm_site,
        byte_hikers_site: byte_hikers_site,
        oceanography_site: oceanography_site
    });
});

app.get('/api/projects/', function(req, res) {
    res.json({
        ldblm: ldblm_site,
        byte_hikers: byte_hikers_site,
        ocean: oceanography_site
    });
});

app.get('/resume', function(req, res) {
    res.render('resume', {
        title: 'Burkely Pettijohn - Resume'
    });
});


/*
    LISTENER
*/

app.listen(port, function() {            
    console.log(`Express started on ${source}:${port}; press Ctrl-C to terminate.`)
});
