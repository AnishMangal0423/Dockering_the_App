const express= require('express')

const app=express();

app.get('/home' , (req , res) =>{
    res.json({
        mesage : "ok"
    })
})


app.listen(3100 , ()=>{
    console.log("running on 3100");
})