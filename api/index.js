const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');
const Product = require('./models/Product');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const dotenv = require('dotenv').config()
const app = express();
const fs = require('fs');


app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials:true,origin:process.env.CORS_URL}));
app.use('/uploads' , express.static(__dirname + '/uploads'))
mongoose.connect(process.env.URL_MONGODB);


const salt = bcrypt.genSaltSync(10);
const secret = 'tsarnioknacwheai';

//register
app.post('/register', async (req,res)=>{
    const {name,username,password} = req.body;
    try{
        const UserDoc = await User.create({
            name,
            username,
            password:bcrypt.hashSync( password, salt),
        })
        res.json(UserDoc)
    }catch(err){
        res.json(err);
    }
})



//login
app.post('/login', async (req,res)=>{
    const {username , password } = req.body;
    const userDoc = await User.findOne({username})
            if(userDoc){
                const passOk = bcrypt.compareSync(password , userDoc.password);
                if(passOk){
                    jwt.sign({username:userDoc.username,id:userDoc._id},secret,{},(err,token)=>{
                        if(err) throw err;
                        res.cookie('token',token).json(userDoc);
                    });
                }else{
                    res.json('Username and Password wrong');
                }
            }else{
                res.json('Username and Password wrong');
            }
})

//logout
app.post('/logout',(req,res)=>{
    res.clearCookie('token').json('ok');
})

//profile
app.get('/profile',(req,res)=>{
    const { token } = req.cookies;
    if(token){
        jwt.verify(token , secret , {} ,async (err,user)=>{
            if(err) throw err;
            const userData = await User.findById(user.id);
            const {name , username , id} = userData;
            res.json({name , username , id})
        })
    }else{
        res.json(null)
    }
    
})

//create
app.post('/create', upload.single('picture'),async (req,res)=>{
    const {originalname , path } = req.file;
    const webp = originalname.split('.');
    const newFile = path+'.'+webp[1];
    fs.renameSync(path, newFile);
    
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, async (err,info) => {
        if (err) throw err;
        const {nameProduct,price,description} = req.body;
        const products = await Product.create({
            author:info.id,
            nameProduct,
            description,
            picture:newFile,
            price,
        })
        res.json(products)
    });
});


//detail product
app.post('/detail', async (req,res)=>{
    const {id} = req.body;
    const detail = await Product.findById(id)
    res.json(detail)
})

//get product
app.get('/product',async (req,res)=>{
    const data = await Product.find();
        res.json(data)
})

//productCart
app.post('/productCart',async (req,res)=>{
    const {cart} = req.body;
    res.json(await Product.find({_id:cart}))
})

//product of the Id
app.get('/accountProduct', async (req,res)=>{
    const { token } = req.cookies;
        jwt.verify(token , secret , {} ,async (err,info)=>{
            try{
                res.json(await Product.find({author:info.id}))
            }catch(err){
                res.status(400).json(err);
            }
        })
})

//delete Product
app.delete(`/deleteProduct/:id` , async (req,res)=>{
    const { id } = req.params;
    res.json(await Product.deleteOne({_id:id}))
})

//editProduct
app.get(`/getItemToEdit/:id`, async (req,res)=>{
    const {id} = req.params;
    res.json(await Product.find({_id:id}))
})
app.put('/editProduct', upload.single('picture') ,async (req,res)=>{
    const {nameProduct,price,description,id} = req.body;
    let newPath = null;
    if (req.file){
      let {originalname,path} = req.file;
      let parts = originalname.split('.');
      let ext = parts[parts.length - 1];
      newPath = path+'.'+ext;
      fs.renameSync(path, newPath);
    }
        const product = await Product.findById(id);
        await product.updateOne({
            nameProduct,
            price,
            description,
            picture: newPath ? newPath : product.picture,
          });
          res.json(product);
})


app.listen(5500,()=>{
    console.log('Running on port 5500');
})