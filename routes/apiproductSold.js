var db = require('../models')


 
module.exports = function(app){
    app.get('/order',function(req,res){
        var query;
        if(req.body.orderId)
        query.orderId = req.body.orderId
        db.order.findAll({
            where:query
        }).then(function(data){
            res.json(data)
        })
    });


    //Finding the Order by ORDERID Can put this in check out page
    app.get('/:orderId',function(req,res){
        db.productSold.findOne({
            where:{
                orderId:req.params.orderId
            }
        }).then(function(data){
            res.json(data)
        })
    })

}


// Not Needed. Bonus