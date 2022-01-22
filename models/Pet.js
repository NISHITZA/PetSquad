const mongoose = require('mongoose')
const Schema = mongoose.Schema

const petSchema = new Schema({
    petId: {
        type:String
    },
    type:{
        type:String
    },
    breed:{
        type:String
    },
    weight:{
        type:String
    },
    age:{
        type:String
    },
    sex:{
        type:String
    }
})

mongoose.model('pet', petSchema);