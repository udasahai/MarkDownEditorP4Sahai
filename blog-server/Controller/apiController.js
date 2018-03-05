var assert = require('assert');

 exports.getPostByUser = function(db, username, postid, callback) {
  // Get the documents collection
  const collection = db.collection('Posts');
  // Find some documents
  collection.find({'username':username, 'postid':parseInt(postid)}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records(getPostByUser)");
//    console.log(docs)
    callback(docs);
  });
}

exports.getPostsByUser = function(db, username, callback) {
  // Get the documents collection
  const collection = db.collection('Posts');
  // Find some documents
  collection.find({'username':username}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records(getPostsByUser)");
//    console.log(docs)
    callback(docs);
  });
}


exports.insertNewPost = function(db, Username, Postid, Title, Body, callback) { 

const collection = db.collection('Posts');

collection.insertOne({postid:parseInt(Postid), username:Username, created: Date.now(), 
  modified: Date.now(), title:Title, body: Body}, function(err, r) {
//    assert.equal(null, err);
//    assert.equal(1, r.insertedCount);
      callback(r);
  });  
}

exports.updatePost = function(db, Username, Postid, Title, Body, callback) { 

const collection = db.collection('Posts');

collection.updateOne({postid:parseInt(Postid), username:Username}, 
  {$set: {modified: Date.now(), title: Title, body:Body}}, function(err, r) {
      // assert.equal(null, err);
      // assert.equal(1, r.matchedCount);
      // assert.equal(1, r.modifiedCount);

      callback(r);
  });  
}



exports.deletePost = function(db, Username, Postid, callback) { 

const collection = db.collection('Posts');

collection.deleteOne({username:Username, postid: parseInt(Postid) }, function(err, r) {
      // assert.equal(null, err);
      // assert.equal(1, r.deletedCount);
      callback(r);
    });
}
