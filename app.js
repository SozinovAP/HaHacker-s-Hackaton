var express = require('express');
var path = require('path');
var db = require('./public/javascript/dataBase');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var repeatRouter = require('./routes/reAppeal');
var startRouter= require('./routes/start');
var firstRouter = require('./routes/firstAppeal');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));

const hbs = require("hbs");
app.set("view engine", "hbs");
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', startRouter);
app.use('/firstAppeal', firstRouter);
app.use('/reAppeal', repeatRouter);

app.get('*', function (req, res) {
    res.send("Error!");
});
module.exports = app;

