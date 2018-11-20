var db = require('../models');

module.exports = function (app) {
    // // gets all customers
    // app.get('/apiCustomer/all', function (req, res) {
    //     db.Customer.findAll({
    //         include: [db.order]
    //     }).then(function (data) {
    //         res.json(data)
    //     })
    // })

    // create new customer in the database
    app.post('/apiCustomer/newCustomer', function (req, res) {
        db.Customer.create({
            name: req.body.name
        }).then(function (data) {
            res.json(data)
        })
    })
    
    // deletes customers  for the backend to get the information out of the database after creating
    app.delete('/apiCustomer/deleteCustomer', function (req, res) {
        db.Customer.destroy(req.body, {
            where: {
                id: req.body.id
            }
        }).then(function (data) {
            res.json(data)
        })
    })


}