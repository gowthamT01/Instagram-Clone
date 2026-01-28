import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
function MyPost() {
    const [mypost,setMypost]=useState([])
    useEffect(()=>{
      axios.get('http://localhost:3000/my-post')
      .then(data=>setMypost(data.data))
      .catch(err=>console.log(err))
    },[])
  return (
    <div>
      <div className='justify-content-center ms-5 ps-2'>
        {mypost.length>0?(
            <div className='ms-5 rounded-4'>
               {mypost.map((post) => (
  <img className='mypost m-1'
    key={post.id}   // OR post.id (but your ids are same, see note below)
    src={post.profile_pic}
    alt="my post"
   
  />
))}

            </div>
        ):(
            <div>
                Loading post
            </div>
        )}
      </div>
      
    </div>
  )
}

export default MyPost
