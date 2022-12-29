import React, {useState} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      return;
    }
    if (+userAge < 1) {
      return;
    }
    setUserName("");
    setUserAge("");
  };

  const userNameChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setUserAge(e.target.value);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={onSubmitHandler}>
        <label htmlfor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={userNameChangeHandler}
          value={userName}
        ></input>
        <label htmlfor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          onChange={ageChangeHandler}
          value={userAge}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
export default AddUser;
