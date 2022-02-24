const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv")
// const authRoute = require("./routes/categories")
const cors = require('cors')
dotenv.config()

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
}).then(()=>{console.log("DB connection successful")})


// app.use(cors({
//     origin: 'https://www.section.io',
//     origin: ['https://www.section.io', 'https://www.google.com/'],
//     origin: '*'


// }))
app.use(cors({
        origin: 'https://www.section.io',
    origin: ['https://www.section.io', 'https://www.google.com/'],
    origin: '*',
    allowedHeaders: 'X-Requested-With, Content-Type, Authorization',
    methods: 'GET, POST, PATCH, PUT, POST, DELETE, OPTIONS'
  }))

app.use(express.json())


// const singleblog = require('./routes/singleblog')
// app.use("/feed/exploringblog/",singleblog)

const feed = require('./routes/feed')
app.use("/feed",feed)

const signin = require('./routes/signin')
app.use("/signin",signin)

const createPost = require('./routes/createPost')
app.use("/createpost",createPost)

const mainFeed = require('./routes/mainFeed')
app.use("/",mainFeed)

const singleblog = require('./routes/singleblog')
app.use("/feed/exploringblog",singleblog)

app.listen(process.env.PORT,()=>{
    "Server connected successfully"
});