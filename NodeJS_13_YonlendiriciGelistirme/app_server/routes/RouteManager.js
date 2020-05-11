let routeLogin = require('./LoginRoutes');
let routeHome = require('./HomeRoutes');
let routeElektronik = require('./ElektronikRoutes');
let routeBilgisayar = require('./BilgisayarRoutes');

module.exports = function (app) {
    app.use('/login', routeLogin);
    app.use('/', routeHome);
    app.use('/elektronik', routeElektronik);
    app.use('/elektronik/bilgisayar', routeBilgisayar);
};