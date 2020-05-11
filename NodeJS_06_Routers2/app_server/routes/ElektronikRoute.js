const express = require("express");
const router = express.Router();
const controllerElektronik = require('../controller/ElektronikController');

router.get('/', controllerElektronik.index);
router.get('/bilgisayar', controllerElektronik.bilgisayar);

module.exports = router;