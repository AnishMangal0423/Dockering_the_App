const express= require('express')
const dotenv=require('dotenv')

const app=express();

app.get('/home' , (req , res) =>{
    res.json({
        mesage : "ok"
    })
})


app.listen(process.env.PORT , ()=>{
    console.log("running on 3000");
})