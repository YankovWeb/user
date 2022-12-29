import React from "react";

export const AddUser = (props) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlfor="username">Username</label>
      <input id="username" type="text"></input>
      <label htmlfor="age">Age (Years)</label>
      <input id="age" type="number"></input>
      <button type="submit">Add User</button>
    </form>
  );
};
