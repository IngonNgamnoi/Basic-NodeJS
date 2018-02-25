var express=require('express');
var body=require('body-parser');
var app=express();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

app.use(body());
/*routing.get('/',function(req,res){
    res.send("Hello world");
});
routing.get('/profile/:name',function(req,res){ //send value parameter
    res.send("Node JS"+req.params.name+".");
});*/

let connectDB = () => { // pomise js
    return new Promise((resolve, reject) =>{
        MongoClient.connect(url, function(err, db) {
            if (err) reject(err);
            var dbo = db.db("mydb");
            resolve(dbo);
        });
    })
}
app.set('view engine','ejs'); //set view
app.get('/',function(req,res){
    res.render('home');
});
app.get('/about',function(req,res){
    res.render('about');
});
app.get('/menu',function(req,res){
    res.render('menu');
});
app.get('/where',function(req,res){
    connectDB().then((dbo)=>{
        dbo.collection("user").find().toArray(function(err, result) {
            if (err) throw err;
            res.render('where',{result});
            console.log(result);
            db.close();
          });
    });
});

/* get login.ejs*/
app.get('/login1',function(req,res){
    res.render("login1.ejs");
});
app.post('/show-user',function(req,res){
    var myuser = {
        email:req.body.email,
        password:req.body.password
    };
    connectDB().then((dbo)=>{
        dbo.collection("user").insertOne(myuser, function(err, result) {
            if (err) throw err;
            res.end(JSON.stringify(myuser));
          db.close();
          });
    });
});

app.listen(3000);