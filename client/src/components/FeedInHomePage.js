import React from 'react'
import { Button } from '@material-ui/core'
import AOS from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css';
import "./FeedInHomePage.css"
const FeedInHomePage = (props) => {

  useEffect(() => {
    
    // var count = 100;
    AOS.init({
      offset:200,
      duration:1200
    });
  }, []);
  
  
  
    return (
      <>
      <br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br />
        <div className='container mb-5' >
              <div className='row  p-5'>
              {
      props.data.map((i)=>(
        // <div className=" w-25 card shadow mx-2"  style={{borderRadius:10}}  data-aos="fade-up">
        // <div className=" title card-item ">
        // <img className="img"  src={i.img} alt="" />
        //   <p className="text-dark">{i.title}</p><br />
        //   {/* <p className="text-dark">{i.content}</p> */}
        //   <small className="text-dark text-muted">{i.Date}</small>

        //   </div>
        // <div className="link card-item d-flex flex-column text-center">

        // <div key={i._id} className='card mx-2 d-flex flex-column'  style={{cursor:"pointer"}}>
        //   <img className='p-3 card-img-overlay img-fluid' style={{height:200}} src={i.img} alt="" />
        //  <div className='card-body'>
        //  <p className='card-title'>{i.title}</p>
        //  <p className='text-dark'>{i.Date}</p>
        //  </div>
        // </div>

<div className=" col-sm-4 mb-3 "  data-aos="fade-up"key={i._id}>
  <div className='card d-flex flex-column'>
<img src={i.img} className="card-img-top p-3" alt="" />

<div className='card-body'>
<h6 className='card-title'>{i.title}</h6>
</div>
  </div>

  </div>
          
             
    ))
      }
              </div>
        </div>
        </>
    )
}

export default FeedInHomePage
