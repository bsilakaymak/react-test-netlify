import React from "react";

const Button = ({ fetchUsers }) => {
  return (
    <div>
      <button className="button" onClick={() => fetchUsers()}>
        Get Users
      </button>
    </div>
  );
};

export default Button;
