const express = require('express');

const app = express();

//TODO: Add CORS

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((err, req, res, next)=>{
    console.error(err);
    if(!res.status) res.send(500, "Something went wrong");
    else next();
})


require('dotenv').config()
app.env = process.env;

if (app.env.DEBUG){
    app.use((req, res, next)=>{
        console.log({"url":req.originalUrl, "method": req.method, "headers":req.headers, "body":req.body});
        next();
    })
}

app.listen(parseInt(app.env.PORT));

module.exports = app;