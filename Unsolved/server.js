var express = require('express');
var app = express();
var PORT = process.env.PORT || 8000;
app.use(express.static('public'))
var exphbs = require('express-handlebars')
var db = require('./models')
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');
require("./routes/apiproductSold")(app)
require("./routes/apiorder")(app)
require('./routes/apiCustomerModel')(app);
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

db.sequelize.sync({
    force: false
}).then(function () {
    app.listen(PORT, function () {
        console.log('App is listening on PORT' + PORT)
    })
})
module.exports = app;
