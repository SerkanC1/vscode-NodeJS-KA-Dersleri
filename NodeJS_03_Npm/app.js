const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
    if (req.url == "/") {
        fs.readFile("index.html", function (err, data) {
            res.write(data);
            res.end("Mesaj Bitti");
        });
    };
    if (req.url == "/login") {
        fs.readFile("login.html", function (err, data) {
            res.write(data);
            res.write("deneme");
            res.end("Mesaj Bitti");
        });
    };
});
server.listen(8000);