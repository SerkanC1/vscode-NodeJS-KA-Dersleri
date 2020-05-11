const path = require("path");

module.exports.index = function (req, res) {
    console.log(req.deneme);
    
    res.sendFile(path.join(__dirname, '../../index.html'));
};

module.exports.login = function (req, res) {
    console.log(req.testMiddleware);
    
    res.sendFile(path.join(__dirname, '../../login.html'));
};

