const express = require("express");
const routerConfig = require("./router.config");
const fs = require("fs")
const cors = require("cors");
const { default: rateLimit } = require("express-rate-limit");
const helmet = require("helmet");
require("./mongoose.config");
const app = express();

//cors allow
app.use(cors({
    origin: "*",
}))

app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 30 // limit each IP to 30 requests per windowMs
}))

app.use(helmet())

app.use(express.json())
app.use(express.urlencoded())


app.use("/api", routerConfig)

app.use((req, res, next) => {
    next({
        code: 404,
        message: "Resource not found",
        status: "NOT FOUND"
    })
})

app.use((error, req, res, next) => {
    let code = error.code || 500;
    let errDetail = error.detail || null;
    let msg = error.message || 'Server error...!';
    let status = error.status || "SERVER_ERROR"
    
    if(req.file && fs.existsSync(req.file.path)){ 
        fs.unlinkSync(req.file.path);
    }
    res.status(code).json({
        error: errDetail,
        message: msg,
        status: status,
        options: null
    })
})
module.exports = app;