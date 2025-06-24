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

const data = require('./database');
const projects = data["projects"]
const jobs = data["jobs"]
const skills = data["skills"]


/*
    ROUTES
*/

// INDEX PAGE - GET route
app.get('/', function(req, res) {
    res.render('index', {
        title: 'Burkely Pettijohn - Portfolio',
        headers: [
            {
                name: "About Me",
                link: "about-me"
            },
            {
                name: "Projects",
                link: "projects"
            },
            {
                name: "Experience",
                link: "experience"
            },
            {
                name: "Skills",
                link: "skills"
            }
        ],
        projects: projects,
        jobs: jobs,
        skills: skills
    });
});

// PROJECT PAGE - GET
app.get('/projects/:project_id', function(req, res) {
    const project_id = req.params.project_id
    const project = projects[project_id]
    if (!project) {
        return res.status(404).send('Project not found');
    } else {
        res.render('project', {
            title: `Burkely Pettijohn - ${project["title"]}`,
            headers: [
                {
                    name: "Home",
                    link: `../../#${project.id}`
                }
            ],
            project: project
        });
    }
});


/*
    LISTENER
*/

app.listen(port, function() {            
    console.log(`Express started on ${source}:${port}; press Ctrl-C to terminate.`)
});
