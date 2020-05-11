let express = require('express');
let router = express.Router();
let ctrlHome = require('../controller/HomeController');
router.get('/', ctrlHome.index);
module.exports = router;