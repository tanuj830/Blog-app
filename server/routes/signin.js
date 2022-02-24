const express = require("express");
const router = express.Router();
const UserModel = require("../models/userModel");


router.post("/", async (req, res) => {
  const { username,password } = req.body;

  if (!username || !password) {
    res.status(401).json("Fill credentials")
  }

  else {
    const userExist = await UserModel.findOne({ username:username, password:password})
    if (!userExist) {
         res.send(false)

    // res.send("true");  
    } else {
      // res.status(401).json("User not exist")
      res.send(true)

  
    }
  }
});

router.post("/register", async (req, res) => {
  const { name, email, username, password } = req.body;

  if (!name || !email || !username || !password) {
    res.status(401).json("Fill credentials")
  }
  else{
    const userExist = await UserModel.findOne({ username: username });
    if (userExist) {
      res.send(true)
      res.status(401).json("User already exist");
    } else {
      const Users = new UserModel({
        name,
        email,
        username,
        password,
      });
      
      await Users.save()
    }
    res.send(false);
  }
  
});



module.exports = router;
