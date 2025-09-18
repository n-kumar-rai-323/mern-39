const http = require("http") // es5


const app = require("./src/config/express.config")

// import http from "http" // es6 
const server = http.createServer(app)
server.listen(9005,'localhost',(err)=>{
   if(!err){
    console.log("Server is running on port", 9005)
   }
})