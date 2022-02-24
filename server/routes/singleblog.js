const express = require('express')
const router = express.Router()
const Data = require('../models/CreatePostSchema')

router.get("/:id", async(req,res)=>{
    
    try{
        // const key = req.params.id
        // console.log(req.params.id)
        // await Data.findById(req.params.id).then(data=>{
        // // res.send(data)
        // console.log(data)

        // const key = req.params.i?d;
        await Data.findById(req.params.id).then(data=>{
               res.send(data)
        })
        

    // }
    }catch(err){ console.log(err)}
})

module.exports = router