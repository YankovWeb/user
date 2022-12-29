import React from "react";

export const AddUser = (props) => {
  return (
    <form>
      <label htmlfor="username">Username</label>
      <input id="username" type="text"></input>
      <label htmlfor="age">Age (Years)</label>
      <input id="age" type="number"></input>
    </form>
  );
};
