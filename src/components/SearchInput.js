import React, { useContext } from "react";
import { userContext } from "../context/UserContextProvider";

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
    </div>
  );
};

export default SearchInput;
