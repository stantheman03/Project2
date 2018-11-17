var path = require('path');

module.exports = function(app){
  app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,"../public/project2.html"))
  })
  app.get('/coffeetypes',function(req,res){
    res.sendFile(path.join(__dirname,"../public/coffeetypes.html"))
  })





};