const Product = require("../models/product.model");

module.exports.createProduct = (req, res) => { 
        Product.create(req.body) 
        .then((newProduct) => res.json(newProduct)) 
        .catch((err) => console.log(err));
}


module.exports.findAllProducts = (req, res) =>{
    Product.find()
    .then( allProducts => res.json(allProducts))
    .catch( err => console.log(err));
}


module.exports.findOneProduct = (req, res) => {
    Product.findById({_id: req.params.id})
    .then( oneProduct => res.json(oneProduct))
    .catch( err => console.log(err));
}

