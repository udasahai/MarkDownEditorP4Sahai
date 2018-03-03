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