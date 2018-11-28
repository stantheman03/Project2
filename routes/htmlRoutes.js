var path = require('path');
module.exports = function (app) {
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
  })
  app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, '/public', 'login.html'))
  })

  app.get('/checkout', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/checkout.html"))
  })

  app.get("/order", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/order.html"))
  })




};