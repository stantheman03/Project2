var db = require('../models');

module.exports = function (app) {
    app.get('/', function (req, res) {
        db.Coffee.findAll({}).then(function (dbCoffee) {
            res.json(dbCoffee);
        });
    });


    app.get('/:type',function(req,res){
        db.Coffee.findOne({
            where:{
                type:req.params.type
            }
        }).then(function(data){
            res.json(data)
        })
    });

    app.get('/:id',function(req,res){
        var query = {};
        if(req.body.productId){
            query.ProductId = req.body.productId

        }
        db.Coffee.findAll({
            where: query,
            include:[db.productSold]
        }).then(function(data){
            res.json(data)
        })
    })


}