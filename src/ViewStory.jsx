import React from 'react'
import {useState,useEffect} from 'react'
import {useParams,Link, useNavigate} from 'react-router-dom'
function ViewStory() {
  const { id,tot } = useParams()
  const [story, setStory] = useState(null)
  const navigate=useNavigate()

  useEffect(() => {
    fetch(`http://localhost:3000/story/${id}`)
      .then((res) => res.json())
      .then((data) => setStory(data))
      .catch((err) => console.log(err))
  }, [id,tot])
if(id>tot || id<=0){
  navigate('/');
}
  return (
     <>
    <div>
      {story ? (
       
       
        <div className='d-flex justify-content-center align-items-center' >

        <Link to={`/story/${Number(id)-1}/${tot}`} className=""><i class="bi bi-arrow-left-circle"></i></Link>
       <div className="story-container mx-auto ">
  <img
    src={story.image}
    alt="story"
    className="story-img "
  />
</div>

        <Link to={`/story/${Number(id)+1}/${tot}`}><i class="bi bi-arrow-right-circle"></i></Link>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
    </>
  )
}


export default ViewStory
