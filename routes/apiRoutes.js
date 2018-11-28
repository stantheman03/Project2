var db = require('../models');
// shows all coffee within database
module.exports = function (app) {
    app.get('/', function (req, res) {
        db.Coffee.findAll({}).then(function (dbCoffee) {
            res.json(dbCoffee);
        });
    });
}