var express=require('express');
var body=require('body-parser');
var app=express();
app.use(body());
/*routing.get('/',function(req,res){
    res.send("Hello world");
});
routing.get('/profile/:name',function(req,res){ //send value parameter
    res.send("Node JS"+req.params.name+".");
});*/

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
/* get login.ejs*/
app.get('/login1',function(req,res){
    res.render("login1.ejs");
});
app.post('/showUser',function(req,res){
    data={
        email:req.body.email,
        password:req.body.password
    }
    console.log(data);
    res.end(JSON.stringify(data));
});
//end get
app.listen(3000);