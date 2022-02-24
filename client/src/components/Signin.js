import React from 'react'
// import Navbar from '../components/Navbar'
import {Link } from 'react-router-dom'
import { useState, useEffect} from 'react'
import axios from 'axios'
import { useContext } from 'react'
import UserContext from '../contexts/UserCreateContext'
import { useHistory } from 'react-router-dom'
const Signin = () => {
    
    const [userData,setUserData] = useState({})
    const [inCorrectCredentials,setInCorrectCredentials] = useState()
    
    const {isLogin, setIsLogin}= useContext(UserContext);
    
    const handleChange=(e)=>{
        e.preventDefault()
        
        let value= e.target.value
        let name= e.target.name
        
        setUserData({...userData,[name]:value})
    }
    
    const handleSubmit=async(e)=>{
        e.preventDefault()
var t;
        await axios.post("http://localhost:8000/signin",userData)
        .then((res)=>t=res.data)

        setIsLogin(t)
        setInCorrectCredentials(t)
    }

    const history = useHistory()
    return (
        <>
            {
     isLogin ? history.push("/"): <>
{inCorrectCredentials==false? <p>hellow</p>: null}
          <div className="mt-5">
            <div className="d-flex justify-content-center">
        <div className="p-5 shadow" style={{borderRadius:10}}>
                    
            <div className="text-center">
            <h1> <b>Sign-in</b></h1>
            <hr />
            </div>
         <form className=" mt-4 d-flex-column text-center" action="post" onSubmit={e=>handleSubmit(e)}>
            
         <div>
         {/* <label className="mx-2">Username</label> */}
             <input type="text" name="username"   autoComplete="off"
 className="px-2 w-100" placeholder="Username" onChange={handleChange}/>
         </div>

         <div className="mt-3 d-flex flex-column">
             <div>
         {/* <label className="mx-2">Password</label> */}
             <input type="text" className="px-2 w-100"   autoComplete="off"
 placeholder="Password" name="password" onChange={handleChange}/>
             </div>
             <div>
             </div>
<button className=" mt-3 btn-outline-dark btn-primary btn text-light">Sign-in</button>
   </div>
   
         <div className="mt-4">
<hr />

          <p>Don't have account? <Link to="/signin/register">Register</Link></p>    
         </div>
         </form>

                </div>
            </div>
                   </div>
        </>

     }
            {/* <Navbar/> */}
      
                   </>
    )
}

export default Signin
