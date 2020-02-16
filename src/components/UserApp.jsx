import React, { useState } from "react";
import Button from "./Button";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

const UserApp = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  const fetchUsers = () => {
    setLoading(true);
    fetch("https://randomuser.me/api/?results=5")
      .then(res => res.json())
      .then(json => {
        setUsers(json.results);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        setError(true);
      });
  };
  const [selectedUser, setSelectedUser] = useState({});
  const [status, setStatus] = useState("");
  const displayUserDetails = id => {
    const selected = users.filter(user => {
      return user.id.value === id;
    });
    setSelectedUser(selected);
    setStatus("success");
  };
  if (isLoading) return <h1>Loading...</h1>;
  if (hasError) return <h1>Something Went Wrong!</h1>;
  else {
    return (
      <div>
        <Button fetchUsers={fetchUsers} />
        <UserList users={users} displayUserDetails={displayUserDetails} />
        {status === "success" && (
          <UserDetails users={users} selectedUser={selectedUser} />
        )}
      </div>
    );
  }
};

export default UserApp;
