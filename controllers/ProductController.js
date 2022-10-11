const Product = require("../models/Products")
const {ObjecId} = require('mongodb')
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

   static async readProduct(req,res){

    const id = req.params.id
    const product = await Product.findById(id).lean()
    res.render('products/read',{product})
   }

   static async removeProduct(req,res){
    const id = req.params.id 
    await Product.findByIdAndDelete(id)

    res.redirect('/products/')
   }
    static async editGetById(req,res){
        const id = req.params.id
        const products =  await Product.findById(id).lean()

        res.render('products/edit',{products})
    }

    static async editProducts(req,res){
        const id = req.body._id
        const name = req.body.name
        const price = req.body.price
        const image = req.body.image
        const description = req.body.description

        const products = {id,name,price,image,description}
            await Product.updateOne({_id:id},products)
        res.redirect('/products/')
    }
}