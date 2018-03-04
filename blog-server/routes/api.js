var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('../db');
var apiControl = require('../Controller/apiController');
var jsonParser = bodyParser.json();
/* GET users listing. */


function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}


router.get('/:username', function(req, res, next) {

    apiControl.getPostsByUser (db.get(), req.params.username ,function(docs){
      console.log(docs)
      var stringPost = JSON.stringify(docs);
      res.status(200).send(stringPost);
    }); 
});

router.get('/:username/:postid', function(req, res, next) {

  
     apiControl.getPostByUser (db.get(), req.params.username, req.params.postid ,function(docs){
      console.log(docs)
      var stringPost = JSON.stringify(docs);

      if(docs.length > 0)
        res.status(200).send(stringPost);
      else 
        res.sendStatus(404);
    }); 
});

router.post('/:username/:postid', jsonParser,function(req, res, next) {

  // res.status(201).send(req.body.title);
  apiControl.getPostByUser (db.get(), req.params.username, req.params.postid ,function(docs){
      console.log(docs)

      if(docs.length > 0)
        res.sendStatus(400);
      else {
        
        apiControl.insertNewPost(db.get(),req.params.username,req.params.postid,req.body.title,
          req.body.body, function(r) {

            if(r.insertedCount != 1)
                res.sendStatus(400);
            else {
                res.sendStatus(201);
            }

          });
      }
    }); 
});

router.put('/:username/:postid',jsonParser,function(req, res, next) {

  // if(!isJson(req.body))
  //   res.sendStatus(400);

  apiControl.updatePost(db.get(),req.params.username,req.params.postid,req.body.title,
          req.body.body, function(r) {
            //console.log(r);
            if((r.matchedCount==1) && (r.modifiedCount==1))
              res.sendStatus(200);
            else 
              res.sendStatus(400);
          });
  // res.send("Api Page");
});

router.delete('/:username/:postid', function(req, res, next) {
  
  apiControl.deletePost(db.get(),req.params.username,req.params.postid, function(r) {
            //console.log(r);
            if(r.deletedCount==1)
              res.sendStatus(204);
            else 
              res.sendStatus(400);
          });
});

module.exports = router;