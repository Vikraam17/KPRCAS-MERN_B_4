const express = require("express");
const connectDB = require("./config/db")
const todo = require('./models/todo')
const app = express();
connectDB();
app.get("/",(req,res)=>{
    res.send("Get route working")
})
app.post("/create",(req,res)=>{
    res.send("Post route is working")
})
app.put("/update",(req,res)=>{
    res.send("put route isworking")
})
app.delete("/delete",(req,res)=>{
    res.send("Delete route is working")
})
app.listen(3000,()=>{
    console.log(`server running on http://localhost:3000`);
})