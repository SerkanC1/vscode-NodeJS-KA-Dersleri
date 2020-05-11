const path = require("path");

module.exports.index = function (req, res) {
    res.render('', { 
        //mesaj: 'Merhaba Ben index Controller',
    });
};

module.exports.login = function (req, res) {
    res.render('login', { 
        //mesaj: 'Merhaba Ben login Controller',
    });
};

