let express = require('express');
let router = express.Router();
let ctrlBilgisayar = require('../controller/BilgisayarController');
router.get('/', ctrlBilgisayar.index);
module.exports = router;