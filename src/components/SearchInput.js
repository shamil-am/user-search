import React, { useContext } from "react";
import { userContext } from "../context/UserContextProvider";
import { Input } from "antd";

const SearchInput = () => {
  const { searchUser } = useContext(userContext);
  //functions
  const inputChangeHandler = (e) => {
    searchUser(e.target.value);
  };
  //component
  return (
    <Input type="text" placeholder="search" onChange={inputChangeHandler} />
  );
};

export default SearchInput;
