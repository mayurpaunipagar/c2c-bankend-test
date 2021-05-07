const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
//mongodb with mongoose

mongoose.connect("mongodb://localhost:27017/c2c",{ useNewUrlParser: true, useUnifiedTopology: true } )
    .then((r)=>{
        console.log("connected to db...");
    })
    .catch((e)=>{
        console.error("erro connecting db",e);
    })

// Creating user Schema

const userSchema=mongoose.Schema({
    email:String,
    password:String
})

const userModel=mongoose.model('user',userSchema);

//All Middlewares
app.use(express.json());
app.use(cors());

// All apis
app.get('/',(req,res)=>{
    res.send('Welcome to nodejs ---');
})

app.post('/create-new-user',(req,res)=>{
    const userInfo=req.body;
    const newUser=userModel(userInfo);
    const id=newUser.save();
    res.send(id);
})

app.listen(9999,()=>{
    console.log("listenning on port 9999");
})