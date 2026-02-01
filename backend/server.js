import express from "express";
import dotenv from "dotenv";
import db from "../config/db.js"
import Product from "../models/product.model.js";

dotenv.config();
const app = express();


app.use(express.json())

app.put("/products/:id",async (req,res)=>{
  const {id} = req.params;
  const product = req.body;
  try {
    const updatesProductawait product.findByIdAndUpdate(id,product),(new:true);

  } catch (error) {
    console.log("server is not working");
  }

})
app.get("/products",async(req,res) =>{
  try{
    const products = await Product.find({});
    res.status(200).json({sucess:true,data:products})
  }catch(error){
    console.log("error in fetching products:",error.message);
    res.status(500).json({success: false,message :"server error"})
  }

})


app.post("/products", async (req, res) => {
  try {
    // console.log(req.body,"****************")
    const {name,price,image} = req.body;

    if (!name || !price || !image) {
      return res.status(400).json({ succes: true, data: "all feilds are mandatory"});
    }

    const newproduct = new Product({name,price,image}) 
    await newproduct.save();
    res.status(201).json({ sucess: true, data: "creaed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ sucess: false, meassage: "server error" });
  }
})
app.delete("/products/:id",async (req,res) =>{
  const {id} = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({success:true,message:"productdeleted"});
  } catch (error) {
    console.log("error in deleting product")
    res.status(404).json({succes:false,message:"product not found"});
  }
});
const PORT = process.env.Port

app.listen(PORT, () => {
 db()

  console.log(`server started at port${PORT} http://localhost:${8000}`);
});

