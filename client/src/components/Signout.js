import React from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../contexts/UserCreateContext';
import { useContext } from 'react';
const Signout = () => {
const {isLogin, setIsLogin} = useContext(UserContext)
const history = useHistory()
//  console.log(user)


 const handleclick=(choice)=>{
   
    if(choice == "true"){
    if(isLogin)
    setIsLogin(false)
    history.push("/signin")

// {
// window.location.reload(false)
// } 
    }
    else{
       history.goBack();
    }
 }

// console.log(user)

  return <div>
      {
          isLogin ? <>
          
<h1>Are you sure</h1>
      <button onClick={()=>{handleclick("true")}}>Yes</button>
      <button onClick={()=>{handleclick("false")}}>No</button>
          </>    : history.push("/signin")  
          
      }
  </div>;
};

export default Signout;

