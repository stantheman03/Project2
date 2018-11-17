var db = require('../models');

module.exports = function(app){
app,get('/apiCustomer',function(req,res){
    db.customerModel.findAll({}).then(function(data){
        res.json(data)
    })
})


    app.get('/apiCustomer/:orderId',function(req,res){
        db.customerModel.findAll({
            where:{
                orderId:req.params.orderId,
            },
            include:[db.order]
        }).then(function(data){
            res.json(data)
        })
    })

    app.post('/apiCustomer',function(req,res){
        db.customerModel.create({
            name:req.body.name
        })
    }).then(function(data){
        res.json(data)
    })

    app.delete('/apiCustomer/',function(req,res){
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