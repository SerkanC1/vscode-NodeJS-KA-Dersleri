const path = require("path");
const express = require("express");
const router = express.Router();

module.exports.index = function (req, res) {
    res.sendFile(path.join(__dirname, "elektronik.html"));
};

module.exports.bilgisayar = function (req, res) {
    res.sendFile(path.join(__dirname, "bilgisayar.html"));
};

router.get('/', module.exports.index);
router.get('/bilgisayar', module.exports.bilgisayar);

module.exports = router;