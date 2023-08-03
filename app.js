const express= require("express");
const app = express();
require("dotenv").config();
const connectDB=require("./connectDB");

app.use(express.json());



const port = 5000;
async function start() {
    await connectDB(process.env.MONGO_URI);
    console.log("connect to db")
    app.listen(port, console.log(`server is listening at port ${port}...`));

}

start();

