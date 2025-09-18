const express =require("express");

const app= express();


//Routing 

app.use("/",(req,res,next)=>{
    res.json({
        data:[{}],
        message:"Success",
        status:"SUCCESS",
        options:null
    })
})

// app.get("/",(req,res,next)=>{
//     res.json("Hello form get")
// })
// app.post()
// app.put()
// app.patch()
// app.delete()
module.exports = app;