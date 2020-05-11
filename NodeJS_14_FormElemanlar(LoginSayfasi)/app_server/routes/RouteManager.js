const routeLogin = require('./LoginRoutes');
const routeHome = require('./HomeRoutes');
const routeElektronik = require('./ElektronikRoutes');
const routeBilgisayar = require('./BilgisayarRoutes');

module.exports = function (app) {
    app.use('/login', routeLogin);
    app.use('/', routeHome);
    app.use('/elektronik', routeElektronik);
    app.use('/elektronik/bilgisayar', routeBilgisayar);
};