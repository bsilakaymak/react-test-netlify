import React from "react";

const UserDetails = ({ selectedUser }) => {
  return (
    <div className="user-details">
      <img src={selectedUser[0].picture.large} alt="user-pic" />
      <p>
        <strong>Name</strong>: {selectedUser[0].name.first}{" "}
        {selectedUser[0].name.last}
      </p>
      <p>
        <strong>Email</strong>: {selectedUser[0].email}
      </p>
      <p>
        <strong>Gender</strong>: {selectedUser[0].gender}
      </p>
      <p>
        <strong>Age:</strong>
        {selectedUser[0].dob.age}
      </p>
      <p>
        <strong>Country of Origin:</strong> {selectedUser[0].location.country}
      </p>
    </div>
  );
};

export default UserDetails;
