import React from "react";
import { useState, useEffect } from "react";
function Suggestions() {
  const [profile, setProfile] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/profile")
      .then((data) => data.json())
      .then((data) => setProfile(data))
      .catch((err) => {
        console.log(err);
      });
    fetch("http://localhost:3000/suggestions")
      .then((data) => data.json())
      .then((data) => setSuggestions(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="suggestions w-75 m-4 ">
        {profile ? (
          <div className="d-flex">
            <img
              className="dp rounded-circle"
              src={profile.profile_pic}
              alt="profile pic"
            />
            <h6 className="mt-1">{profile.username}</h6>
            <small className="ms-auto text-primary">Switch</small>
          </div>
        ) : (
          <p>Loading</p>
        )}
        <div className="d-flex ">
          <p>Suggested for you</p>
          <b className="ms-auto">See All</b>
        </div>
        <div>
          {suggestions.length > 0 ? (
            <div>
              {suggestions.map((suggestion) => (
                <div className="my-1" key={suggestion.id}>
                  <div className="d-flex">

                  <img className="dp rounded-circle" src={suggestion.profile_pic} alt="" />
                  <h6 className="mt-2">{suggestion.username}</h6>
                  <p className="text-primary ms-auto mt-2">Follow</p>
                  </div>
                  </div>
                 ))}
               </div>
              ) : (
               <div>loading</div>
             )}
         </div>
      </div>
      <footer className="container text-center text-secondary small mt-5 py-3">
  <div className="row justify-content-center">
    <div className="col-12 d-flex flex-wrap justify-content-center gap-2">
      <a href="#" className="text-secondary text-decoration-none">About</a>
      <a href="#" className="text-secondary text-decoration-none">Help</a>
      <a href="#" className="text-secondary text-decoration-none">Press</a>
      <a href="#" className="text-secondary text-decoration-none">API</a>
      <a href="#" className="text-secondary text-decoration-none">Jobs</a>
      <a href="#" className="text-secondary text-decoration-none">Privacy</a>
      <a href="#" className="text-secondary text-decoration-none">Terms</a>
      <a href="#" className="text-secondary text-decoration-none">Locations</a>
      <a href="#" className="text-secondary text-decoration-none">Language</a>
      <a href="#" className="text-secondary text-decoration-none">Meta Verified</a>
    </div>
  </div>

  <div className="row mt-3">
    <div className="col-12 text-uppercase">
      © 2026 Instagram from Meta
    </div>
  </div>
</footer>

    </div>
  );
}

export default Suggestions;
