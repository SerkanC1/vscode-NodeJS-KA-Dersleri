const path = require("path");
const express = require("express");
const router = express.Router();

module.exports.index = function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
};

module.exports.login = function (req, res) {
    res.sendFile(path.join(__dirname, "login.html"));
};

router.get('/', module.exports.index);
router.get('/login', module.exports.login);

module.exports = router;