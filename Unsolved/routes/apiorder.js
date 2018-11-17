var db = require('../models')

module.exports = function(app){
    // gets all orders by all customers
    app.get('/apiOrders',function(req,res){
        db.order.findAll({}).then(function(data){
            res.json(data)
        })
    });
    // gets specific order by specific customer
    app.get('/apiOrders/:orderId',function(req,res){
        db.order.findOne({
            where:{
                orderId:req.params.customerId
            }
        })
    }).then(function(data){
        res.json(data)
    })
}