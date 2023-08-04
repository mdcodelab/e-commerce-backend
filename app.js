const express= require("express");
const app = express();
require("dotenv").config();
require("express-async-errors");
const connectDB=require("./connectDB");
const Product=require("./models/product.js");
const productsRouter=require("./routes/product.js");

app.use(express.json());


app.use("/api/v1/products", productsRouter);

app.get("/", (req, res) => {
res.status(200).send("---- products --------");
})

const port = process.env.PORT || 5000;
async function start() {
    await connectDB(process.env.MONGO_URI);
    console.log("connect to db")
    app.listen(port, console.log(`server is listening at port ${port}...`));
}

start();

