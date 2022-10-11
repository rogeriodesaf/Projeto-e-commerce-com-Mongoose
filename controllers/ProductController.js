const Product = require("../models/Products")

module.exports =  class ProductController{
    static createProduct(req,res){
        res.render('products/create')
    }

    static async createProductPost(req,res){

        const name = req.body.name
        const price = req.body.price
        const description = req.body.description
        const image = req.body.image

        const products = new Product({name,price,description,image})
        
           await products.save()

        res.redirect('/products/')

    }

    static async showProducts(req,res){
   const products = await Product.find().lean()
        console.log(products)
       res.render('products/all',{products})
   }
}