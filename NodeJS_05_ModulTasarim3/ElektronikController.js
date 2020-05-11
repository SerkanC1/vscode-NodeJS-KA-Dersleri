const path = require("path");

module.exports.index = function (req, res) {
    res.sendFile(path.join(__dirname, "elektronik.html"));
};

module.exports.bilgisayar = function (req, res) {
    res.sendFile(path.join(__dirname, "bilgisayar.html"));
};