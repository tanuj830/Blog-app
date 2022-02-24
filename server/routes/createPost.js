const express = require('express')
const { findOneAndUpdate } = require('../models/CreatePostSchema')
const router = express.Router()
const PostModel = require('../models/CreatePostSchema')

router.post("/", async(req,res)=>{
    try{
       const Post = new PostModel({
           title : req.body.title,
           content : req.body.content,
           img : req.body.img

       })
    //    console.log(Post)
     await Post.save().then(()=>res.status(201).json("Data Saved")).catch((err)=>console.log(err))

    }catch(err){ res.status(401).json("Server Error")}
})

// router.get("/",async(req,res)=>{
//     try{
//     res.send(req.params.id);
//     }catch(err){res.status(401).json(err)}
// })

router.patch("/:id", async(req,res)=>{
    
    try{
        // const key = req.params.id
        // console.log(req.params.id)
        // await Data.findById(req.params.id).then(data=>{
        // // res.send(data)
        // console.log(data)

        const key= req.params.id
        
        // const up = new PostModel({
        //     title : req.body.title,
        //     content : req.body.content,
        //     img : req.body.img
 
        // })
    //  console.log(req.params.id)
     const up=  await PostModel.findByIdAndUpdate(key,req.body)
   res.send(up)

        
        // await up.save().then(()=>res.status(201).json("Data Saved")).catch((err)=>console.log(err))
    // }
    }catch(err){ res.send(err)}
})


module.exports = router