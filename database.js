var MongoClient = require('mongodb').MongoClient;
//create database name mydb
var url = "mongodb://localhost:27017/mydb";

/*MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});*/
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  
  var myuser = {
      email: "hello.ingon_63@hotmail.com",
      password: "123456789"
  };
  /*dbo.createCollection("user", function(err, res) { //create table
    if (err) throw err;
    console.log("Collection created!");*/
    dbo.collection("user").insertOne(myuser, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
    db.close();
  //});
    });
});
