const express= require("express");
const app = express();
require("dotenv");

app.use(express.json());

app.listen(5000, console.log("server is listening at port 5000..."))