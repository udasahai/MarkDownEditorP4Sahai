use BlogServer;
db.createCollection("Posts"); 
db.createCollection("Users");
db.Posts.insert(
[
  { "postid": 1, "username": "cs144", "created": 1518669344517, "modified": 1518669344517, "title": "Title 1", "body": "Hello, world!" },
  { "postid": 2, "username": "cs144", "created": 1518669658420, "modified": 1518669658420, "title": "Title 2", "body": "I am here." },
  { "postid": 3, "username": "cs144", "created": 1518669344517, "modified": 1518669344517, "title": "Title 3", "body": "Hello,rferfer world!" },
  { "postid": 4, "username": "cs144", "created": 1518669658420, "modified": 1518669658420, "title": "Title 4", "body": "I am hfreferere." },
  { "postid": 5, "username": "cs144", "created": 1518669344517, "modified": 1518669344517, "title": "Title 5", "body": "Hello, wvvorld!" },
  { "postid": 6, "username": "user2", "created": 1518669658420, "modified": 1518669658420, "title": "Title 6", "body": "I am frefrewhere." },
  { "postid": 7, "username": "cs144", "created": 1518669344517, "modified": 1518669344517, "title": "Title 7", "body": "Hello, worfrefrewld!" },
  { "postid": 8, "username": "cs144", "created": 1518669658420, "modified": 1518669658420, "title": "Title 8", "body": "I am heewfeqwfqre." },
  { "postid": 9, "username": "cs144", "created": 1518669344517, "modified": 1518669344517, "title": "Title 9", "body": "Hello, wfwefefewforld!" },
  { "postid": 10, "username": "cs144", "created": 1518669658420, "modified": 1518669658420, "title": "Title 10", "body": "I efereferam here." },
  { "postid": 11, "username": "cs144", "created": 1518669344517, "modified": 1518669344517, "title": "Title 11", "body": "Hello,weferfefewq world!" },
  { "postid": 12, "username": "cs144", "created": 1518669658420, "modified": 1518669658420, "title": "Title 12", "body": "I am hefewqweqre." }

]);

db.Users.insert(
[
  { "username": "cs144", "password": "$2a$10$MBGT6C4pwZY1mf.KVlU.2uvbjfYBCZTN2PLyyB1Pm85.N7vnf1Vom" },
  { "username": "user2", "password": "$2a$10$MBGT6C4pwZY1mf.KVlU.2uvbjfYBCZTN2PLyyB1Pm85.N7vnf1Vom" }         
]);
