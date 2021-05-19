const homeRoute = require('./home');

function router(app) {
    app.use('/home', homeRoute);
}

module.exports = router;