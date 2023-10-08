const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const UserSchema = new Schema({
    name : {type:String ,required:true ,min:1},
    username : {type:String , unique: true,required:true,min:1},
    password: {type:String ,required:true,min:1},
})

const UserModel = model('User',UserSchema);
module.exports = UserModel;