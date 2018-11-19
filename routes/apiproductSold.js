var db = require('../models')

module.exports = function(app){
    app.get('/productSold',function(req,res){
        var query = {};
        if(req.body.productId)
        query.ProductId = req.body.productId
        db.productSold.findAll({
            where:query,
            include:[db.coffeeModel]
        })
    });

    app.get('/productSold:productId',function(req,res){
        db.productSold.findOne({
            where:{
                productId:req.params.productId
            },
            include:[db.coffeeModel]
        }).then(function(data){
            res.json(data)
        })
    })

}