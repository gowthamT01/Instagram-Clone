import React from 'react'

function Sidebar() {
  return (
    <>
    <div className='m-3'>

    <div className="d-flex flex-column gap-3 fs-5">
      <img className="logo-text ms-3/*" src="./src/assets/instagram-text.png" style={{ transform: "scale(1.4) " }}
 alt="" />
      <div><i class="bi bi-house"></i>Home</div>
      <div><i class="bi bi-search"></i>Search</div>
    <div><i class="bi bi-compass"></i>Explore</div>
    <div><i class="bi bi-play-circle"></i>Reels</div>
    <div><i class="bi bi-send"></i>Messages</div>
    <div><i class="bi bi-heart"></i>Notifications</div>
    <div><i class="bi bi-plus-circle"></i>Create</div>
    <div><i class="bi bi-person-circle"></i>Profile</div>
    </div>
    <div className="position-fixed bottom-0 d-flex flex-column gap-3 mb-3 fs-5">
        <div><i class="bi bi-threads"></i>Treads</div>
        <div><i class="bi bi-list"></i>More</div>
    </div>
    </div>
    </>
  )
}

export default Sidebar
