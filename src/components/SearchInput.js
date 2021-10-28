import React, { useContext } from "react";
import { userContext } from "../context/UserContextProvider";
import { DatePicker } from "antd";

const SearchInput = () => {
  const { searchUser } = useContext(userContext);
  //functions
  const inputChangeHandler = (e) => {
    searchUser(e.target.value);
  };
  //component
  return (
    <div>
      <input type="text" placeholder="search" onChange={inputChangeHandler} />
      <DatePicker />
    </div>
  );
};

export default SearchInput;
