const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    googleId: {
        type:String
    },
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    }
})

mongoose.model('user', userSchema);