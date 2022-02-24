import React from 'react'
import Navbar from '../components/Navbar'
const AboutUs = () => {
    return (
        <div style={{marginBottom:145}}>
            <Navbar/>
    <div className="conatiner mt-5">
<div className="row text-center">
   <h1 className=""><b>
The Leader in Website Creation</b></h1>
</div>
<div className="d-flex flex-column center text-center" style={{color:"black"}}><hr />
 <a href="https://instagram.com/aka_tanuj?utm_medium=copy_link"><i className="fab fa-instagram fs-6" style={{color:"#8a3ab9	"}}>  Instagram</i></a>
<br />
<br />
<a href="https://reactjs.org/docs/lists-and-keys.html#keys"><i className="fab fa-facebook fs-6" style={{color:"#4267B2"}}>Facebook</i></a>
<br /><br />
<a href="https://reactjs.org/docs/lists-and-keys.html#keys"><i className="fas fa-envelope-open fs-6" style={{color:"#4285F4"}}>G-mail</i></a>
<br /><br />
<a href="https://reactjs.org/docs/lists-and-keys.html#keys"><i className="fab fa-telegram fs-6" style={{color:"#0088CC"}}>Telegram</i></a>

</div>
    </div>
        </div>
    )
}

export default AboutUs
