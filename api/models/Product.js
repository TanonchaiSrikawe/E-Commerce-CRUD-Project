const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const ProductSchema = new Schema({
    author:{type: Schema.Types.ObjectId, ref: 'User'},
    nameProduct:{type:String , required:true},
    price:{type:Number , required:true},
    picture: {type:String , required:true},
    description: {type:String , required:true},
})

const ProductModel = model('product',ProductSchema);
module.exports = ProductModel;