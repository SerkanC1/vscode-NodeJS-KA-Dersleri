const fs = require("fs");

const express = require("express");
const path = require("path");
const app = express();
const ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/app_server/views'));

const routeIndex = require('./app_server/routes/IndexRoute');
const routeElektronik = require('./app_server/routes/ElektronikRoute');

app.use(ejsLayouts);

app.use("/public", express.static(path.join(__dirname, "public")));

app.use(function (req, res, next) {
    console.log("url...: " + req.url);
    console.log("time..: " + Date.now());
    next();
});
app.use('/', routeIndex);
app.use('/elektronik', routeElektronik);

app.listen(8000);
