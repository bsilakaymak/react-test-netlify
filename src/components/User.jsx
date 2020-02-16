import React from "react";

const User = ({ user, displayUserDetails }) => {
  return (
    <p className="user" onClick={() => displayUserDetails(user.id.value)}>
      {user.name.first}
    </p>
  );
};

export default User;
