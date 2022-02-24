import React from 'react'
import Navbar from './Navbar'
import '../components/Feed.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import DeleteIcon from "@mui/icons-material/Delete"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"

const Categoires = () => {

 const [data,setData] = useState([])
const [editedData, setEditedData] = useState({})
const [clicked, setClicked] = useState()

const history=useHistory()
  useEffect(() => {
    axios.get("http://localhost:8000/feed").then( res=>{ setData(res.data) }
    ).catch(err=>console.log("err"))
  }, [])

const deletePost = (id) =>{
   
  axios.delete(`http://localhost:8000/feed/${id}`)
  window.location.reload(false)
}

const updatePost = (e,id) =>{

  // console.log(id)
  // history.push("/createpost")

  // <h1>lorem100</h1>

  setClicked(true)
  let value = e.target.value;
  let name = e.target.name;

  setEditedData({...editedData,[name]:value})
  axios.patch(`http://localhost:8000/createpost/${id}`,editedData).then(data=>console.log(data.data)).catch((err)=>console.log(err))
  window.location.reload()
}

const handleChange=(e)=>{
   
   console.log(e)
  

}
    return (
        <>
          <Navbar/>


          <div className="container mt-5 p-5"style={{backgroundColor:""}}>
            <h2 className="mb-4"><b>Blogs</b></h2>
    {
      data.slice(0).reverse().map((i)=>(
        <div className="card rounded p-4 mb-3 shadow-bottom" key={i._id}>
        <div className=" title card-item p-2">
          
          <div className='d-flex justify-content-between'>
<span><h3 className="text-dark mb-3">{i.title}</h3></span>
          <span><small className="text-dark text-muted">{i.Date}</small></span>
          </div>

<img className='img-fluid img top mb-3' src= {i.img} alt="" />
          <p className="text-dark">{i.content}</p>
          
        <div className="link d-flex align-items-center mt-3">
        {/* sending id from one page to another */}
<div className='mx-2'>
<Link to={`/feed/${i._id}`}  size="small" className="text-dark  text-decoration-none"><OpenInNewIcon/></Link>

</div>
<div>
<Link style={{cursor:"pointer", color:"red"}} onClick={()=>deletePost(i._id)}><DeleteIcon/></Link>
</div>                  </div>
            </div>
            </div>
    ))
    }
          </div>
          
        </>
    )
}
export default Categoires
