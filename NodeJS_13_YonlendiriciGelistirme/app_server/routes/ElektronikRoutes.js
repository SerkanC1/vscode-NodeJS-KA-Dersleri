let express = require('express');
let router = express.Router();
let ctrlElektronik = require('../controller/ElektronikController');
router.get('/', ctrlElektronik.index);
module.exports = router;