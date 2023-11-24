const express= require('express')
const dotenv=require('dotenv')

dotenv.config();

const app=express();

app.get('/home' , (req , res) =>{
    res.json({
        mesage : "ok"
    })
})


app.listen(process.env.PORT , ()=>{
 
    console.log("running on 3000");
})