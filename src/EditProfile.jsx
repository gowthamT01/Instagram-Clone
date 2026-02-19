import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/profile")
      .then(res => setProfile(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleChange = (e) => {
    setProfile(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleUpdate = () => {
    axios.put("http://localhost:3000/profile", profile)
      .then(() => {
        alert("Profile Updated ✅");
        navigate("/profile"); // back to profile page
      })
      .catch(err => console.log(err));
  };

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="container mt-5">
      <h3>Edit Profile</h3>

      <input
        type="text"
        name="username"
        value={profile.username}
        className="form-control my-3"
        onChange={handleChange}
      />

      <input
        type="text"
        name="profile_pic"
        value={profile.profile_pic}
        className="form-control my-3"
        onChange={handleChange}
      />

      <button className="btn btn-success" onClick={handleUpdate}>
        Save Changes
      </button>
    </div>
  );
}

export default EditProfile;
