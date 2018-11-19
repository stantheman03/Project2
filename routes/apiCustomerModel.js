var db = require('../models');

module.exports = function(app){
    // gets all customers
app.get('/apiCustomer/all',function(req,res){
    db.customerModel.findAll({
        include:[db.order]
    }).then(function(data){
        res.json(data)
    })
})

// keep track of all the order made by customers by cutsomerID
    app.get('/apiCustomerOrders/:customerID',function(req,res){
        db.order.findAll({
            where:{
                customer_id:req.params.customerId,
            },
            include:[db.order]
        }).then(function(data){
            res.json(data)
        })
    })
// create new customer
    app.post('/apiCustomer/newCustomer',function(req,res){
        db.customerModel.create({
            name:req.body.name
        })
    }).then(function(data){
        res.json(data)
    })
    // deletes customers 
    app.delete('/apiCustomer/deleteCustomer',function(req,res){
        db.customerModel.destroy(req.body,
            {
                where:{
                    id:req.body.id
                }
            }).then(function(data){
                res.json(data)
            })
    })


}