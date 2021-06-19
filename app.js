var express = require('express');
var path = require('path');
var db = require('./public/javascript/dataBase');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var index1Router= require('./routes/index1');
var index2Router = require('./routes/index2');

var app = express();

const hbs = require("hbs");
app.set("view engine", "hbs");
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/index1', index1Router);
app.use('/index2', index2Router);

app.get('*', function (req, res) {
    res.send("Error!");
});
module.exports = app;

