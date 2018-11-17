var db = require('../models');
// shows all coffee within database
module.exports = function (app) {
    app.get('/', function (req, res) {
        db.Coffee.findAll({}).then(function (dbCoffee) {
            res.json(dbCoffee);
        });
    });

    // show coffee by type
    app.get('/coffee/:type',function(req,res){
        db.Coffee.findOne({
            where:{
                type:req.params.type
            }
        }).then(function(data){
            res.json(data)
        })
    });

    


}