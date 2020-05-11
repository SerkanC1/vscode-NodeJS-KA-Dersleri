const path = require("path");

module.exports.index = function (req, res) {
    let kisiler = ['Ahmet','Mehmet','Veli','Osman'];
    res.render('elektronik', { 
        mesaj: 'Merhaba Ben Controller',
        kisiler: kisiler
    });
};

module.exports.bilgisayar = function (req, res) {
    res.sendFile(path.join(__dirname, "../../bilgisayar.html"));
};

