var express=require('express');
var routing=express();
routing.get('/',function(req,res){
    res.send("Hello world");
})
routing.listen(3000);