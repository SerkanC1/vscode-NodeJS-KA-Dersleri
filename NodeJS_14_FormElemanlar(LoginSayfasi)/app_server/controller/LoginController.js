module.exports.indexGet = function (req, res) {
    console.log("indexGet");
    res.render('login');
};

module.exports.indexPost = function (req, res) {
    // var kullanici = req.body;
    // console.log(kullanici);
    // console.log(kullanici.email);
    // console.log(kullanici.password);
    // res.render('login');
    console.log(req.body);
    res.render('login', {
        email: req.body.email,
        password: req.body.password
    });
};
