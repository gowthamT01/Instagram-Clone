import React, { useEffect } from 'react'
import { useState } from 'react'
function Posts() {

const [posts,setPost]=useState([])//it return aray formate date in posts
useEffect(()=>{
    fetch('http://localhost:3000/posts')
    .then((data)=>data.json())
    .then((data=>setPost(data)))
    .catch((err)=>console.log(err))
},[])//it only runs once
  return (
    <div className="d-flex justify-content-center" >
      {posts.length>0?(
           <div >{posts.map((post)=>(
            <div className='my-3 mt-5' key={post.id}>
               
                <div className='d-flex'>
                    <img className='dp rounded-circle' src={post.user.profile_pic} alt="profile pic" />
                    <h5 className='mt-1 mt-2'>{post.user.username} </h5><p className='mt-2 ms-1'>3h</p>
                </div>
                <img className='image mt-2 rounded-3' src={post.image} alt="" />
<div>
    <i className="bi bi-heart"></i>
    <i className="bi bi-chat"></i>
    <i className="bi bi-send"></i>
</div>
<div>

<b>{post.likes}Likes</b>
</div>
<div>
    {post.caption}
</div>
            </div>
           ))}</div>
        ):(
         <div>Loading Post</div>
      )}
    
    </div>
  )
}

export default Posts
