const fs = require("fs");

const express = require("express");
const path = require("path");
const ctrlElektronik = require("./ElektronikController");
const nesneElektronik = ctrlElektronik("merhaba");

const app = express();
app.use("/public", express.static(path.join(__dirname, "public")));

const indexController = function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
};

const loginController = function (req, res) {
    res.sendFile(path.join(__dirname, "login.html"));
};

app.get("/", indexController);
app.get("/login", loginController);

app.listen(8000);