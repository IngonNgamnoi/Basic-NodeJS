# Basic-NodeJS
```Basic NodeJs
#เริ่มต้นใช้งานโปรเจคที่ต้องสร้างเองทั้งหมด เขียนขึ้นมาใหม่ทั้งหมด
  npm init  -->สร้างโฟลเดอแล้วใช้คำสั่งนี้
#nodemon จะใช้เมื่อถ้ามีการเปลี่ยนแปลงของserverก็ไม่ต้องrunใหม่ทุกครั้ง
#install nodemon
  npm install nodmon
#run nodemon
  npm run start
#แก้ไฟล์ package.json กรณีที่ต้องการรันไฟล์ js ตัวไหน จาก "node server.js" --> nodemon express.js
#server run localhost 3000
 MongoDB
#Run Mongo
  docker start mongo
#Run mongo-express
  docker start mongo-express    --->localhost 8081
  
``` Note:
 ### เริ่มใช้งาน
docker run -it --name mongo -p 27017:27017 -d mongo

### เลิกใช้งาน
docker stop mongo
### การกลับมาใช้งานอีกครั้ง
docker start mongo

### ลบทิ้ง
docker container rm -f mongo

- ถ้า run node บน เครื่องตัวเอง การต่อ mongo ให้ใช้ localhost ได้ตามปกติ
- แต่ถ้าหาก run node บน docker การต่อ mongo ต้อง link container ให้มันรุ้จักกันก่อน

docker run --name some-app --link mongo:mongo -d application-that-uses-mongo

และตั้ง url มองโก เป็น http://mongo

### สำหรับการใช้งานครั้งแรกนั้น อาจจะต้องกำหนด ชื่อผู้ใช้และรหัสให้กับ mongo

1. เข้าไปยัง container mongo ผ่านคำสั่ง
```
 docker exec -it mongo mongo
````
2. พิมพ์คำสั่ง สำหรับสร้างผู้ใช้งาน
```
db.createUser({ user: 'ชื่อเข้าใช้', pwd: 'รหัสผ่าน', roles: [ { role: "userAdminAnyDatabase", db: "admin" } ] });
```
mongo express 
เอาไว้ดูดาต้าเบส
```
docker run --name mongo-express --link mongo:mongo -d -p 8081:8081 mongo-express
```
เข้าผ่าน localhost 8081

### เลิกใช้งาน
docker stop mongo-express
### การกลับมาใช้งานอีกครั้ง
docker start mongo-express

### ลบทิ้ง
docker container rm -f mongo-express
 
