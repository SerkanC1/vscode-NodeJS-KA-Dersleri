const fs = require("fs");

const express = require("express");
const path = require("path");
const routeIndex = require('./IndexController');
const routeElektronik = require('./ElektronikController');

const app = express();
app.use("/public", express.static(path.join(__dirname, "public")));

app.use('/', routeIndex);
app.use('/elektronik', routeElektronik);


app.listen(8000);