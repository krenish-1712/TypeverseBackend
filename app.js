var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var paragraphRouter = require('./routes/paragraph');
var rankingRouter = require('./routes/ranking');
var authRouter = require('./routes/authentication');

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://krenish:wDo6uzDYLb0HO313@pandya.f24t8.mongodb.net/?retryWrites=true&w=majority&appName=PANDYA')
  .then(() => console.log('Connected!'))
  .catch(err => console.log('Error connecting'));

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/paragraph', paragraphRouter);
app.use('/ranking', rankingRouter);
app.use('/authentication', authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
