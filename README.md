# E-Commerce-CRUD-Project
My first project is about ecommerce website CRUD Application for hardware store online and create by ReactJS , Tailwind CSS , Node.js(Express.js) and MongoDB. Thank you for your attention.
# HOW TO USE
# วิธีการติดตั้งสำหรับใช้งาน E-Commerce Website
# api
1.เปิด terminal และเข้าไปยังไฟล์ api โดยพิมพ์ **cd api**
![image](https://github.com/TanonchaiSrikawe/E-Commerce-CRUD-Project/assets/141351306/2272de62-4234-428d-acba-35a6de2b15c3)

2.start Server side โดยพิมพ์คำสั่ง **npm start** ถ้าสำเร็จจะขึ้น **Running on port 5500**
![image](https://github.com/TanonchaiSrikawe/E-Commerce-CRUD-Project/assets/141351306/2bd15869-fce2-49aa-ae4f-7b381989b696)

![image](https://github.com/TanonchaiSrikawe/E-Commerce-CRUD-Project/assets/141351306/d1ddf19f-2cc3-40f1-8a5d-cf983792092d)


# MongoDB
1.ติดตั้ง MongoDB Compass ตามลิงค์นี้ **https://www.mongodb.com/try/download/community** กด Select package และกด Download จากนั้นติดตั้ง
![image](https://github.com/TanonchaiSrikawe/E-Commerce-CRUD-Project/assets/141351306/e5b24cfd-7369-43ad-8353-18d1b23af400)

![image](https://github.com/TanonchaiSrikawe/E-Commerce-CRUD-Project/assets/141351306/ae8b4e25-be3f-4be9-806c-2e1ca20c798c)

2.เมื่อติดตั้งเสร็จแล้ว กด connect จะได้หน้าต่างดังภาพต่อไปนี้ เป็นอันเสร็จเรียบร้อย
![image](https://github.com/TanonchaiSrikawe/E-Commerce-CRUD-Project/assets/141351306/50ff9f21-e62d-4371-9bea-7982da8c2721)

![image](https://github.com/TanonchaiSrikawe/E-Commerce-CRUD-Project/assets/141351306/6a3f610c-637f-4455-b777-f94d47364123)

# URL connect api and MongoDB
1.ไฟล์ api เข้าไปยัง .env จะพบ URL_MONGODB ต้องตรงกับ URL ของ MongoDB [**eCommerce คือ เมื่อมีการเพิ่มข้อมูลจะสร้าง database ที่ชื่อว่า eCommerce**]
![image](https://github.com/TanonchaiSrikawe/E-Commerce-CRUD-Project/assets/141351306/26783a54-68d7-4e0e-b08f-4598758d6cad)

![image](https://github.com/TanonchaiSrikawe/E-Commerce-CRUD-Project/assets/141351306/707d4f93-6f1c-4cf3-bc18-86bb35796d2c)


# Client
1.ลบคำสั่ง **"react-filter-search": "^1.1.11"** ใน package.json จากไฟล์ client ออก
![image](https://github.com/TanonchaiSrikawe/E-Commerce-CRUD-Project/assets/141351306/3ef06f70-4bd6-4bb4-91b7-6ba38677e403)

2.เปิด terminal และเข้าไปยังไฟล์ client โดยพิมพ์ **cd client**
![image](https://github.com/TanonchaiSrikawe/E-Commerce-CRUD-Project/assets/141351306/3c4deb55-3cab-4bfc-b346-b4c29b4e4b9d)

![image](https://github.com/TanonchaiSrikawe/E-Commerce-CRUD-Project/assets/141351306/44ee735b-4c06-453a-bdb1-8ecdc4031843)

3.ติดตั้งโดยพิมพ์คำสั่ง **npm install** , **npm config set legacy-peer-deps true** และ **npm i react-filter-search** ลงใน terminal โดยติดตั้งตามลำดับทีละคำสั่ง 
![image](https://github.com/TanonchaiSrikawe/E-Commerce-CRUD-Project/assets/141351306/043163a8-abfc-4731-a173-001116ce96f1)

![image](https://github.com/TanonchaiSrikawe/E-Commerce-CRUD-Project/assets/141351306/754dfef5-ff68-4614-b4c3-941e85b3a700)

![image](https://github.com/TanonchaiSrikawe/E-Commerce-CRUD-Project/assets/141351306/682d100c-1fa6-4aa1-903b-b25a8fb237b4)

4.run ReactJS โดยพิมพ์คำสั่ง **npm run dev** และเปิดหน้าเว็ปในลิงค์ Local โดยกด **ctrl + click**
![image](https://github.com/TanonchaiSrikawe/E-Commerce-CRUD-Project/assets/141351306/cf242157-8196-4c7b-8aab-2d22b31ef673)

![image](https://github.com/TanonchaiSrikawe/E-Commerce-CRUD-Project/assets/141351306/9ab1fc0c-43db-40ce-943d-408b67ba432e)


**api(npm start) และ client(npm run dev) ต้อง run พร้อมกัน**
![image](https://github.com/TanonchaiSrikawe/E-Commerce-CRUD-Project/assets/141351306/09389002-c265-41dd-8642-3f7833da66c3)


# การใช้งาน E-Commerce Website
1.ทำการ **register** ถ้าสำเร็จจะขึ้น register successและ **login**
![image](https://github.com/TanonchaiSrikawe/E-Commerce-CRUD-Project/assets/141351306/3fbfd0d0-9389-4c99-b68e-caace58ed4c8)

![image](https://github.com/TanonchaiSrikawe/E-Commerce-CRUD-Project/assets/141351306/99d99ea1-da60-47ec-99c9-7fab019f191a)

2.เพิ่มสินค้าโดยกด **create your product**
![image](https://github.com/TanonchaiSrikawe/E-Commerce-CRUD-Project/assets/141351306/b237584f-e5f4-4f96-b356-31264e3aa1a1)


