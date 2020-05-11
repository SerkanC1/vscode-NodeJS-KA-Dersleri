const http = require("http");
const fs = require("fs");

const yonlendirici = new Object();

const homeController = function (req, res) {
    fs.readFile("index.html", function (err, data) {
        res.write(data);
        res.end("Mesaj Bitti");
        console.log("homeController");

    });
};

const loginController = function (req, res) {
    fs.readFile("login.html", function (err, data) {
        res.write(data);
        res.write("deneme");
        res.end("Mesaj Bitti");
        console.log("loginController");
    });
};

yonlendirici["/"] = homeController;
yonlendirici["/login"] = loginController;

const server = http.createServer(function (req, res) {
    if (req.url in yonlendirici)
        yonlendirici[req.url](req, res);
});
server.listen(8000);