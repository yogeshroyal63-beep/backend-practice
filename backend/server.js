import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js"; // adjust path if needed

dotenv.config();

const app = express();

// CONNECT DATABASE (THIS WAS MISSING)
connectDB();

app.get("/jj", (req, res) => {
    res.send("hlo server is working");
});

app.get("/products", (req, res) => {
    res.send("home page server");
});

app.listen(8080, () => {
    console.log("Server started at http://localhost:8080/products");
});
