const fs = require("fs");

const express = require("express");
const path = require("path");
const routeIndex = require('./app_server/routes/IndexRoute');
const routeElektronik = require('./app_server/routes/ElektronikRoute');

const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/app_server/views'));


app.use("/public", express.static(path.join(__dirname, "public")));

app.use(function (req, res, next) {
    console.log("url...: " + req.url);
    console.log("time..: " + Date.now());
    next();
});
app.use('/', routeIndex);
app.use('/elektronik', routeElektronik);

app.listen(8000);
