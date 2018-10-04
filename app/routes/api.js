var User = require('../models/user');

module.exports = function (router) {

    // api routes
    router.post('/users', function (req,res) {
        res.send('Testing routes');
    });

    return router;
};