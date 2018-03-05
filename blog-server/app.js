var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var api = require('./routes/api');

var app = express();
var db = require('./db')
var jwt = require('jsonwebtoken');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// app.all('/api/:username/*', function (req, res, next) {
//   next();
// 	if(req.cookies.jwt == undefined){
// 		console.log("Cookie Undfined");
// 		res.sendStatus(401);
// 	} 
// 	else {
// 		var token = req.cookies.jwt
// 		jwt.verify(token, 'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c', function(err, decoded) {
				
// 		  if (err) res.sendStatus(401);
// 		  else if(decoded.usr != req.params.username) { 
// 		  	res.sendStatus(401);
// 		  }
// 		  else {
// 		   	console.log("Cookies: ",req.cookies.jwt);
//   			next();
//   			}
// 		});
// 	}
// });

app.use('/blog', index);
app.use('/login', users);
app.use('/api', api);


db.connect('mongodb://localhost:27017', function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  } else {
    {
      console.log('Listening on port 3000...')
    }
  }
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
