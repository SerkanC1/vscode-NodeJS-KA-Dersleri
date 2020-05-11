let express = require('express');
let router = express.Router();
let ctrlLogin = require('../controller/LoginController');
router.get('/', ctrlLogin.index);
module.exports = router;