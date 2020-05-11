const express = require('express');
const router = express.Router();
const ctrlElektronik = require('../controller/ElektronikController');
router.get('/', ctrlElektronik.index);
module.exports = router;