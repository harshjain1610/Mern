//collects information from fronend and response with backend




const express = require('express')
const app = express();
const multer = require('multer')
const upload = multer();
const port = 8000;
app.get('/',(req,res)=>{
    res.send({message:"root api calling",status:1});
});
app.get('/home',(req,res)=>{
    res.send({message:"Home api calling",status:1});
});
app.get('/about',(req,res)=>{
    res.send({message:"About api calling",status:1});
});
app.get('/contact',(req,res)=>{
    res.send({message:"Contact api calling",status:1});
});
app.get('/help',(req,res)=>{
    res.send({message:"Help api calling",status:1});
});
app.post('/register',upload.single(),(req,res)=>{
    var name = req.body.name;
    var rs = req.body.amount;
    var type = req.body.type;
    if(type == 1){
        var totalamount = +rs;
    }else{
        var totalamount =+rs*80;// + sign for convert this string into number
    }
    res.send({message:"register api calling",status:1,rs:totalamount,name:name});
});
app.listen(port,()=>{
    console.log(`server listening on http://localhost:${port}`)
});