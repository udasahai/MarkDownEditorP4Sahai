var express = require('express');
var router = express.Router();
var assert = require('assert');
var commonmark = require('commonmark');

var db = require('../db');
var postControl = require('../Controller/postController');
/* GET home page. */
router.get('/:username/:postid', function(req, res, next) {

postControl.getPostByUser (db.get(), req.params.username , req.params.postid ,function(docs){console.log(docs)

	var reader = new commonmark.Parser();
	var writer = new commonmark.HtmlRenderer();
	var parsed = reader.parse(docs[0].title); // parsed is a 'Node' tree
	// transform parsed if you like...
	var Title = writer.render(parsed); // result is a String

	parsed = reader.parse(docs[0].body); // parsed is a 'Node' tree
	var Body = writer.render(parsed);

	res.render('post', { title: Title, body: Body, name: docs[0].title });

}); 
});


router.get('/:username', function(req, res, next) {

postControl.getPostsByUser(db.get(), req.params.username , function(docs){console.log(docs)

	var start = 0;
	if(req.query.start != null && req.query.start != '') {
		start = parseInt(req.query.start);
		console.log(start);
	}

	res.render('posts', { title: 'Express', posts: docs, starter: start, uName: req.params.username });

}); 
});



module.exports = router;
