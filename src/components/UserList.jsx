import React from "react";
import User from "./User";

const UserList = ({ users, displayUserDetails }) => {
  return (
    <div className="user-list">
      {users.map((user, i) => (
        <User key={i} user={user} displayUserDetails={displayUserDetails} />
      ))}
    </div>
  );
};

export default UserList;
