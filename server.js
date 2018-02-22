var http = require('http');
var fs= require('fs');
//create a server
http.createServer (function (req,res){
    if(req.url==='/login'){
        res.writeHead(200,{'Content-Type':'text/html'}); //ระบุุ typleของเนื้อหาที่ต้องการแสดงล
        var myStream=fs.createReadStream(__dirname+"/"+'login.html','utf8'); //อ่านไฟล์มาทำงาน
        myStream.pipe(res);
 }
else if(req.url==='/picture'){
    res.writeHead(200,{'Content-Type':'text/html'});
    var myStream=fs.createReadStream(__dirname+"/"+'picture.html','utf8'); //อ่านไฟล์มาทำงาน
    myStream.pipe(res);
}
    
}).listen(8080);