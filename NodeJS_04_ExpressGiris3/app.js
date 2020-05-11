const fs = require("fs");

const express = require("express");
const path = require("path");
const app = express();
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
    fs.readFile("index.html", function (err, data) {
        res.write(data);
        res.end("Mesaj Bitti");
    });
});

app.get("/login", function (req, res) {
    fs.readFile("login.html", function (err, data) {
        res.write(data);
        res.end("Mesaj Bitti");
    });
});

app.listen(8000);