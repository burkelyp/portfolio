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

const projects = require('./projects')
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
        projects: projects
    });
});

// PROJECTS PAGE - GET
app.get('/projects', function(req, res) {
    res.render('projects', {
        title: 'Burkely Pettijohn - Projects',
        projects: projects
    });
});

// PROJECT PAGE - GET
app.get('/projects/:project_id', function(req, res) {
    const project_id = req.params.project_id
    if (!projects[project_id]) {
        return res.status(404).send('Project not found');
    } else {
        res.render('project', {
            title: 'Burkely Pettijohn - Projects',
            project: projects[project_id]
        });
    }
});


/*
    LISTENER
*/

app.listen(port, function() {            
    console.log(`Express started on ${source}:${port}; press Ctrl-C to terminate.`)
});
