const express = require("express");
const router = express.Router();
const controllerElektronik = require('../controller/ElektronikController');

router.use(function (req,res,next) {
    req.deneme="Bu yazı controller tarafında sadece ./elektronik sayfasında kullanılıyor. İşte middleware bu.";
    next();
});

router.get('/', controllerElektronik.index);
router.get('/bilgisayar', controllerElektronik.bilgisayar);

module.exports = router;