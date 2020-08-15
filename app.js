/* Require the necessary dependencies */
const express = require('express');
const path = require('path');
const { projects } = require('data.json');

/* Instantiate Express app */
const app = express();

/* View engine setup */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/* Serve the static files located in the public folder */
app.use('/static', express.static('public') );

/* Set the 'index' route */
app.get('/', function(req, res, next) {

    res.render('index', { projects });

});

/* Set the 'about' route */
app.get('/about', function(req, res, next) {

    res.render('about');

});

/* Set the 'about' route */
app.get('/projects/:id', function(req, res, next) {

    const projectId = req.params.id;
    const project = projects.find( ({ id }) => id === +projectId );

    // Pass the project data to the 'project' template
    res.render('project', { project });  // remember to add if cond error 404

})

/* Start Express server */
app.listen(3000, () => {
    console.log('Server listening on port 3000');
  })