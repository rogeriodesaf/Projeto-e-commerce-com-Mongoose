const mongoose = require('mongoose')
const { Schena } = mongoose 

const Product = mongoose.model(
    'Product',
    new Schema({
        name :{type: String, required: true},
        price :{type : String, required: true},
        description : { type:String, required : true},
        image : { type:String, required : true},
    }),
)

module.exports = Product