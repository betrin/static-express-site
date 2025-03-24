var createError = require('http-errors');
const express = require('express');
var path = require('path');
// const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { projects } = require('./data/data.json');

const indexRouter = require('./routes');
const aboutRoutes = require('./routes/about');
const projectRoutes = require('./routes/project');

const app = express();
app.use('/projects', projectRoutes)
app.use(aboutRoutes);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static', express.static('public'));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).render('not-found');
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000, () => {
    console.log('The application is running on http://localhost:3000!')
});

module.exports = app;