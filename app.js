/* Require the necessary dependencies */
const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');

/* Instantiate Express app */
const app = express();

/* View engine setup */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/* Static middleware for serving static files*/
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

/* Start Express server */
app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });

  