var db = require('../models')

module.exports = function(app){
    // Finds ALL ORDERS
    app.get('/apiOrders',function(req,res){
        db.order.findAll({
           where : {
               name:req.body.name
           },
           include:[db.Customer]
        }).then(function(data){
            res.json(data)
        })
    });
    // gets specific order by specific customer   (possibly dont need this!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!)
//     app.get('/apiOrders/:orderId',function(req,res){
//         db.order.findOne({
//             where:{
//                 id:req.params.customerId
//             },
//             include:[db.productSold]
//         }).then(function(data){
//             res.json(data)
//         })
//     })
}