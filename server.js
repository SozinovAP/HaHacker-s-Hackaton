let express = require('express');
const { read } = require('fs');
const { isObject } = require('util');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
const fs = require('fs');
const { start } = require('repl');
const { loadavg } = require('os');


server.listen(3000);
console.log("port: 3000");

app.get('/index', (request, respons) => {
    respons.sendFile(__dirname + '/index.html');
});
app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + "/" + "style.css");
});
app.get('/scripts.js', (req, res) => {
    res.sendFile(__dirname + "/" + "scripts.js");
});
app.get('/database.json', (req, res) => {
    res.sendFile(__dirname + "/" + "database.json");
});
