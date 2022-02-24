import React from 'react'
import {Link} from 'react-router-dom'
import'./Navbar.css'
import { useContext } from 'react'
import UserContext from '../contexts/UserCreateContext'
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = () => {

    const {isLogin} = useContext(UserContext)

    return (
        <nav className="  navbar navbar-light navbar-expand-sm object-fluid">
<div className="container-fluid">
            <Link className="linkToHome" to="/"><h4><b className="text-dark">Blog</b></h4></Link>

    
            <button className="ms-auto navbar-toggler" data-bs-toggle="collapse" data-bs-target="#id1">
             <span className="navbar-toggler-icon"></span>
            </button>
               
            <div className="collapse navbar-collapse " style={{marginLeft:200}} id="id1">
<span>
<ul className="navbar-nav text-center">
<li className="navbar-item mx-2"><Link to="/aboutus" className="hov text-decoration-none text-dark">About Us</Link></li>
<li className="navbar-item mx-2"><Link to="/feed" className="hov text-decoration-none text-dark">Feed</Link></li>
<li className="navbar-item mx-2"><Link to="/createpost" className="hov text-decoration-none text-dark">Create</Link></li>

{
    
    isLogin ? <li className="navbar-item mx-2 dd2"><Link to="/signout" className="hov text-decoration-none text-dark" >Log out</Link></li>:
    <li className="navbar-item mx-2 dd2"><Link to="/signin" className="hov text-decoration-none text-dark">Sign-in</Link></li>
}
</ul>
</span>
<span className='navbar-item'><Link to="/signout" className='text-decoration-none'><SettingsIcon/>Settings</Link></span>

            </div>

            </div>
        </nav>
    )
}

export default Navbar
