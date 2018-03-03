var express = require('express');
var router = express.Router();
var userControl = require('../Controller/userController');
var db = require('../db');
var jwt = require('jsonwebtoken');


/* GET users listing. */
router.get('/', function(req, res, next) {

  //res.send('Welcome to login');
  var condition = (req.query.username != null && req.query.username != "") &&
   (req.query.password != null && req.query.password != "");
 console.log(condition);
if(condition) {
  userControl.getUser (db.get(), req.query.username , req.query.password ,function(docs){

  	//res.send('Hello World');

  	if(docs==null)
  	{
  		console.log("No Match");
  		res.render('login', {Redirect: req.query.redirect});
  	}
  	else {
  		console.log("Match");
  		var cert = 'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c';

  		jwt.sign({"exp": Date.now() + (1000 * 60 * 60 * 2), "usr": req.query.username}, cert,
  		 {header: {"alg": "HS256","typ": "JWT"}, noTimestamp: true } , function(err, token) {
  			console.log(token);
  			console.log("past cookie");
			res.cookie("jwt",token);
			res.redirect(req.query.redirect);
  			res.send("Great Login");
		});		
  	}
  	}); 
}
  else 
  {
  	console.log("No Match");
  	res.render('login', {Redirect: req.query.redirect});
  }

});

module.exports = router;
