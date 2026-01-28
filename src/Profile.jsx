
import { useState,useEffect,useRef } from 'react'
import axios from 'axios'
import MyPost from './MyPost'

function Profile() {
  const [profile,setProfile]=useState(null)
const [followers,setFollowers]=useState([])
const [unfollowed,setUnfollowed]=useState(0)
  useEffect(()=>{

    //profile API Calling
      axios.get('http://localhost:3000/profile')
      .then(data=>setProfile(data.data))
      .catch(err=>console.log(err))


      //followers API CALL
      axios.get('http://localhost:3000/folowers')
      .then(data=>setFollowers(data.data))
      .catch(err=>console.log(err))
  },[unfollowed])


  

  function HandleOnChange(e){
     setProfile(prev=>({
      ...prev,
      [e.target.name]:e.target.value
     }))
  }

  const handleUnfollow=async(id)=>{
    axios.delete(`http://localhost:3000/folowers/${id}`)
 
    .then(setUnfollowed(!unfollowed))
    .catch(err=>console.log(err))
  }

 const HandleUpdate=async()=>{
  axios.put('http://localhost:3000/profile',profile)
  .then(console.log("Updated"))
  .catch(err=>console.log(err))
 }
  return (
    <div className='m-5'>
      <div className=''>{profile?(
        <div >
          <div className='d-flex justify-content-center mx-auto mx-auto  profile-bg'>
           
        <img  src={profile.profile_pic}className='profile rounded-circle profile-image ms-3 me-3' alt="" />
       
        
         
          <div  className='ms-3 me-3'>
            <h5>{profile.username}<i className="bi bi-chevron-down ms-1"></i></h5>
            <div className='d-flex gap-3 '>
              <p><b className='mx-1'>10</b>post</p>
              <p><b className='mx-1'>100</b>Followers</p>
              <p><b className='mx-1'>105</b>Following</p>
            </div>
            <div><p>Finding myself one journey at a time🏍️. <br />Selebophile✌️ </p></div>
          </div>
 </div>
        <input type="text" 
        value={profile.username}
        name='username' 
        className='form-control my-4'
        onChange={HandleOnChange}
        />


        <input type="text"
        name="profile_pic"
        value={profile.profile_pic} 
        className='form-control' 
        onChange={HandleOnChange}/>

         <button onClick={HandleUpdate} className='btn btn-info my-3'>Update</button>

        </div>
      ):(
        <div>
          Loading Profile
        </div>
      )}</div>

      {followers.length>0?(
        followers.map(follower=>(
          <div className="d-flex" key={follower.id}>
              <p>{follower.username}</p>
              <button className='btn btn-info round-3 ms-auto m-2 border border-danger' onClick={()=>{handleUnfollow(follower.id)}}>Unfollow </button>
          </div>
        ))
        
      ):(
        <div>Loading followers</div>
      )}
      <MyPost/>
    </div>
  )
}

export default Profile
