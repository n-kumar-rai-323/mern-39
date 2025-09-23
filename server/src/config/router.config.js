const authRouter = require("../modules/auth/auth.router")

const routerConfig= require("express").Router()


routerConfig.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})
const functionName =(req,res,next)=>{
console.log("Hello world")
next()
}

routerConfig.get("/health", functionName,(req,res,next)=>{
    // let result = req.params
    // let data = req.query;
    // let header= req.headers 
    let result= req.body
    res.json({
        data:{result},
        message:"Hello Router Config",
        status:"SUCCESS",
        options:null
    })
})


routerConfig.use("/auth", authRouter)



module.exports=routerConfig
