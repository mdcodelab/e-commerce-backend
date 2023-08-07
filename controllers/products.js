const Product = require("../models/product.js");

const getAllProductsStatic = async (req, res) => {
//throw new Error("testing new error");
const search="a";
//const products = await Product.find({featured: true});
const products = await Product.find({name: {$regex: search, $options: "i"}});
res.status(200).json({msg: "my products", data: products, nbHits: products.length})
}




const getAllProducts = async (req, res) => {
    //console.log(req.query);
    const {featured, company, name, sort}=req.query;
    const myObj={};
    if(featured) {
        myObj.featured=featured === "true" ? true : false
    }

    if(company){
        myObj.company=company
    }

    if(name) {
        myObj.name={$regex: name, $options: "i"}
    }
    
    //const products = await Product.find(req.query);
    const result = Product.find(myObj);
    if(sort) {
        const sortList = sort.split(",").join(" ");
       result=result.sort(sortList);
       //console.log(sort); (ex: sort name,price - insomnia)
    }
const products = await result;
res.status(200).json({msg: "products route", data: products, nbHits: products.length})
}


module.exports={getAllProductsStatic, getAllProducts};