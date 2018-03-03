var assert = require('assert');
var bcrypt = require('bcrypt');
const saltRounds = 10;

 exports.getUser = function(db, username, password, callback) {
  // Get the documents collection
  const collection = db.collection('Users');
  // Find some documents
  collection.find({'username':username}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records(getUser)");
    console.log(docs);

 //    bcrypt.hash(password, saltRounds, function(err, hash) {
 //  // Store hash in your password DB.
 //  		console.log("The Password is stored as:" + hash);
	// });


    bcrypt.compare(password, docs[0].password, function(err, res) {
    // res == true
    if (res==true) {
    	callback(docs);
    }
    else {

    	callback(null);
    }
	});
  });
}