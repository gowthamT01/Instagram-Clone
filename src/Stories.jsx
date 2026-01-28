import React from 'react'
import './index.css';

import { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
function Stories() {
  const[Stories,setStories]=useState([])
  const navigate=useNavigate()
  let tot=0;
  useEffect(()=>{
      fetch('http://localhost:3000/story')
      .then(data=>data.json())
      .then(data=>setStories(data))
      .catch(err=>console.log(err))
      
  },[])
  return (
    
    <div>
        <div className='d-none'>{tot=Stories.length}</div>
          {Stories.length>0?(
              <div className="story d-flex ms-5">
              
                 {Stories.map((story)=>(
                  <div  key={story.id} className='m-5 mx-2 mb-6 mt-3 ' onClick={()=>{navigate(`/story/${story.id}/${tot}`)}}>
                    <div className="gradient-border">
                    <img  src={story.user.profile_pic} alt="dp" className="story-dp rounded-circle"/>
                    </div>
                    <h6 className='text-truncate' style={{width:"60px"}}>{story.user.username }</h6>{/* //truncate it only display limited text */}
                  </div>
                 ))}
              </div>
          ):(
            <div>Loading</div>
          )}



    </div>
  )
}

export default Stories
