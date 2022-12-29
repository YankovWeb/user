import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
const AddUser = (props) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={onSubmitHandler}>
        <label htmlfor="username">Username</label>
        <input id="username" type="text"></input>
        <label htmlfor="age">Age (Years)</label>
        <input id="age" type="number"></input>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};
export default AddUser;
