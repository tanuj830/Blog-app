const express = require('express')
const router = express.Router()
const Data = require('../models/CreatePostSchema')

router.get("/", async(req,res)=>{
    try{
       
    //    console.log(Post)
   await  Data.find({}).then((data)=>{
        res.send(data)
    })
    //  await Post.save().then(()=>res.status(201).json("Data Saved")).catch((err)=>console.log(err))

    }catch(err){ res.status(401).json(err)}
})




router.delete("/:id", async(req,res)=>{
    
    try{
        const key= req.params.id
        await Data.findByIdAndDelete(key).then(data=>{
   res.send("deleted")
        })
    // }
    }catch(err){ res.send("errorr")}
})




module.exports = router