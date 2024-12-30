/*
    SETUP
*/
const express = require('express');
// const cors = require("cors")
const app = express();
// const cookieParser = require('cookie-parser');



//app.use(cors({ credentials: true, origin: "*" }))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
// app.use(cookieParser());


require("dotenv").config()
const source = process.env.source
const ldblm_port = process.env.ldblm_port
const byte_hikers_port = process.env.byte_hikers_port
const ocean_port = process.env.ocean_port

const { engine } = require('express-handlebars');
var exphbs = require('express-handlebars');         // import express-handlebars
app.engine('.hbs', engine({extname: ".hbs"}));      // create instance of handlebars engine to process templates
app.set('view engine', '.hbs');                     // use handlebars engine for *.hbs files


/*
    ROUTES
*/

// INDEX PAGE - GET route
app.get('/', function(req, res) {
    res.render('index', { 
        title: 'Little Dreamer Big Leader Mobiles - Home',
        ldblm_port: ldblm_port,
        byte_hikers_port: byte_hikers_port,
        ocean_port: ocean_port
    });
});


/*
    LISTENER
*/

app.listen(function() {            
    console.log(`Express started on ${source}; press Ctrl-C to terminate.`)
});
