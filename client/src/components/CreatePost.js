import React from 'react'
import Navbar from '../components/Navbar'
import "./createPost.css"
// import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios"
// import { BrowserRouter as Router , Route } from 'react-router-dom'
// import Home from "../pages/Home"
import { useHistory } from 'react-router-dom'

const CreatePost = () => {

    const [data ,setData] = useState({})
    
const history = useHistory()

    const handleChange=  (e)=>{

        let value = e.target.value
        let name = e.target.name

        setData({...data,[name]:value})

    }

    const handleSubmit=()=>{

        axios.post("http://localhost:8000/createpost",data)
        .then((res)=>console.log(res.json("data send"))).catch((err)=>console.log("err"))

     history.goBack()
    }
    return (
        
    
        <div>

            <Navbar/>
           
           <div className="" style={{marginBottom:9}}>
            <div className="row">
   <h3 className="text-center">Build your post</h3>
            </div>
 <div className="row mx-5 p-3">
 <textarea className="inputArea form-control  my-3 shadow" rows={3} type="textarea" onChange={handleChange} name="title" placeholder="Title"/>
 <textarea className="inputArea2 form-control my-4 shadow" rows={7} type="text" onChange={handleChange} name="content" placeholder="Enter content"/>
 <textarea className=" form-control my-4 shadow" type="text" onChange={handleChange} name="img" placeholder="img link"/>

 </div>

<div className="btnn text-center">
   <button className="btn btn-outline-primary " onClick={handleSubmit}> Post your content</button> 
    


    </div>         
      </div>
        </div>
    
    )
}

export default CreatePost
