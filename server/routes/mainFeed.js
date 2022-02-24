const express = require('express')
const router = express.Router()
const Data = require('../models/CreatePostSchema')

router.get("/",async(req,res)=>{
  await Data.find({}).then((data)=>{
      res.send(data);
  })
})

module.exports = router