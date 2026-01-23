import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app=express();
app.get("/jj",(req,res)=>{
    res.send("hlo server is working");
});
app.get("/products",(req,res) =>{
    res.send("home page server");
});
console.log(process.env.MONGO_URI);
app.listen(8080,() => {
    
    console.log("hey your started at http://localhost:8080/products hlo bro");
});