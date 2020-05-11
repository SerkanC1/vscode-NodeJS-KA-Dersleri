const fs = require("fs");
const express = require("express");
const path = require("path");
const app = express();
const ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/app_server/views'));

app.use(ejsLayouts);

app.use("/public", express.static(path.join(__dirname, "public")));

// yönlendiriciler ekleniyor. 
// artık yönlendiriciler sadece RouteManager sayfasından yapılabilecek.
require('./app_server/routes/RouteManager')(app);




app.listen(8000);
