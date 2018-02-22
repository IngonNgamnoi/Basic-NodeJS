var fs = require('fs');
var data='';
var readStream=fs.createReadStream('text.txt');
readStream.setEncoding('utf8');
readStream.on('data',function(txt){
    data+= txt;
});
readStream.on('end',function(){
    console.log(data);
})

/*var response = require('./method.js');
console.log(response.Obj); //show function in obj
response.Obj.deleteUser(); //เรียกใช้ function ที่อยู่ใน obj*/

//readfile
/*var fs = require('fs');
var readMe = fs.readFileSync('text.txt','utf8');
console.log(readMe);*/
