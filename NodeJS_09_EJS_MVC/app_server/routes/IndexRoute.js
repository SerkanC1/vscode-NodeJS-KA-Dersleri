const express = require("express");
const router = express.Router();
const controllerIndex = require('../controller/IndexController');

router.use(function (req,res,next) {
    req.deneme="Bu yazı controller tarafında sadece ./ sayfasında kullanılıyor. İşte middleware bu.";
    req.testMiddleware="Bu yazı controller tarafında sadece ./login sayfasında kullanılıyor."
    next();
});
router.get('/', controllerIndex.index);
router.get('/login', controllerIndex.login);

module.exports = router;