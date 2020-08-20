/* Require the necessary dependencies */
const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');

/* Instantiate Express app */
const app = express();

/* View engine setup */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/*  Require static assets from public folder */
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

/* 404 handler to catch undefined or non-existent route requests */  
app.use((req, res, next) => {

    const err = new Error('Not Found');
    err.status = 404;
    err.message = "Oops! Looks like the page doesn't exist."

    next(err);

  });

  /* Error handler */
  app.use((err, req, res, next) => {

    // Set locals
    res.locals.error = err;
    res.locals.message = err.message;
    // Render error page
    res.status(err.status || 500);
    res.render('error');

  });

/* Start Express server */
app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });

  