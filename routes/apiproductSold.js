var db = require('../models')


 
module.exports = function(app){
    app.get('/orderId',function(req,res){
        var query;
        if(req.body.orderId)
        query.orderId = req.body.orderId
        db.orderId.findAll({
            where:query,
            include:[db.Coffee]
        }).then(function(data){
            res.json(data)
        })
    });


    //Finding the Order by ORDERID Can put this in check out page
    app.get('/productSold:orderId',function(req,res){
        db.productSold.findOne({
            where:{
                orderId:req.params.orderId
            },
            include:[db.Coffee]
        }).then(function(data){
            res.json(data)
        })
    })

}


// Not Needed. Bonus