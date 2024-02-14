




const express = require('express')
const app = express();
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
app.post('/register',(req,res)=>{
    res.send({message:"register api calling",status:1});
});
app.listen(port,function(){
    console.log(`server listening on http://localhost:${port}`)
});