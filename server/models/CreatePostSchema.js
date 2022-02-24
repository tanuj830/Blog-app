const mongoose = require('mongoose')

const CreatePost = mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    img:{
        type:String
    },
    Date:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model("Post",CreatePost)