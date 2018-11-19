var db = require('../models')

module.exports = function(app){
    // gets all orders by all customers
    app.get('/apiOrders',function(req,res){
        db.order.findAll({
            include:[db.productSold]
        }).then(function(data){
            res.json(data)
        })
    });
    // gets specific order by specific customer
    app.get('/apiOrders/:orderId',function(req,res){
        db.order.findOne({
            where:{
                id:req.params.customerId
            },
            include:[db.productSold]
        })
    }).then(function(data){
        res.json(data)
    })
}