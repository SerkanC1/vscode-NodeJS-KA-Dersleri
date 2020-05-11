const http = require("http");
const fs = require("fs");

const express = require("express");
const app = express();

app.get("/", function (req, res) {
    fs.readFile("index.html", function (err, data) {
        res.write(data);
        res.end("Mesaj Bitti");
        console.log("homeController");

    });
});

app.get("/login", function (req, res) {
    fs.readFile("login.html", function (err, data) {
        res.write(data);
        res.end("Mesaj Bitti");
        console.log("loginController");
    });
});

app.listen(8000);