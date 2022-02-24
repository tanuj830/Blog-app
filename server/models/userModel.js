const mongoose = require('mongoose')

const userModel = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    }, 
    password:{
        type:String,
        required:true
    },
      Date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("User",userModel)