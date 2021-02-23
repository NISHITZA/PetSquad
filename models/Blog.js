const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    body:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    imageId:{
        type: String
    }
})

mongoose.model('blog', blogSchema)
