import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const ExploringBlog = () => {

  const {id} = useParams()
  const [data,setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/feed/exploringblog/${id}`).then( (res)=>{ setData(res.data) }
    ).catch(err=>console.log(err))
  }, [])

  return (
    <>
   
      <div>
         <h1>{data.title}</h1>
       <p>{data.content}</p>
       <img src={data.img}/>
      </div>

  </>)
};

export default ExploringBlog;
