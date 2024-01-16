const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
let count = 0;
app.get('/showcount',(req,res)=>{
    res.send({currentCount : count});
})
app.get('/incrementcount',(req,res)=>{
    count++;
    res.send({currentCount : count});
})
app.listen(3001,()=>{
    console.log("Listening to port number 3001");
})