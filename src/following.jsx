import { useEffect, useState } from "react";
import axios from "axios";

function Following() {
  const [following, setFollowing] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/folowers")
      .then(res => setFollowing(res.data))
      .catch(err => console.log(err));
  }, [refresh]);

  const handleUnfollow = (id) => {
    axios
       .delete(`http://localhost:3000/folowers/${id}`)
      .then(() => setRefresh(!refresh))
      .catch(err => console.log(err));
  };

  return (
    <div className="m-4 ">
    
    <div className="container mt-3" style={{ maxWidth: "500px" }}>
          <h4>Following</h4>
  {following.length > 0 ? (
    following.map(user => (
      <div
        key={user.id}
        className="d-flex align-items-center py-2 border-bottom"
      >
        {/* Profile image */}
        <img
          src={user.profile_pic || "https://via.placeholder.com/50"}
          alt="profile"
          className="rounded-circle me-3"
          width="50"
          height="50"
        />

        {/* Username + name */}
        <div className="flex-grow-1">
          <div className="fw-bold">{user.username}</div>
          <div className="text-muted small">{user.name || " "}</div>
        </div>

        {/* Following / Unfollow button */}
        <button
          className="btn btn-light border rounded-pill px-3 fw-semibold"
          onClick={() => handleUnfollow(user.id)}
        >
          Following
        </button>
      </div>
    ))
  ) : (
    <p className="text-center text-muted">No following</p>
  )}
</div>

    </div>
  );
}

export default Following;
