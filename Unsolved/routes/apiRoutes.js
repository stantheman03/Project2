var db = require('../models');

module.exports = function (app) {
    app.get('/', function (req, res) {
        db.Coffee.findAll({}).then(function (dbCoffee) {
            res.json(dbCoffee);
        });
    });

//Create Name of customer, 
    

    // Routes Need to be cleaned up
    app.get('/:id', function (req, res) {
        db.Coffee.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbCoffee) {
            res.render('index', {
                Coffee: dbCoffee
            })
        })
    });

    // app.post('/api/coffee', function (req, res) {
    //     db.Coffee.create({
    //         name: req.body.name,
    //         CoffeeType: req.body.CoffeeType,
    //         roast: req.body.roast
    //     }).then(function (dbCoffee) {
    //         res.redirect('/api/coffee')
    //     })
    // })

    app.put('/api/coffee', function (req, res) {
        db.Coffee.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(function (dbCoffee) {
            res.redirect('/api/coffee')
        })
    })

    app.delete('/api/coffee', function (req, res) {
        db.Coffee.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbCoffee) {
            res.redirect('/api/coffee')
        })
    })


}