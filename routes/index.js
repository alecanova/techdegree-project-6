const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

/* Set the 'index' route */
router.get('/', function(req, res) {

    res.render('index', { projects });

});

/* Set the 'about' route */
router.get('/about', function(req, res) {

    res.render('about');

});

/* Set the 'project' route */
router.get('/project/:id', function(req, res, next) {

    const projectId = req.params.id;
    const project = projects.find( ({ id }) => id === +projectId );

    // Pass the project data to the 'project' template
    res.render('project', { project });  // remember to add if cond error 404

});



module.exports = router;