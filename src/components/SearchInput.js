import React, { useState, useContext } from "react";
import { userContext } from "../context/UserContextProvider";

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const { searchUser } = useContext(userContext);
  //functions
  const inputChangeHandler = (e) => {
    console.log(e.target.value.length)
    searchUser(e.target.value);
    setInputValue(e.target.value);
  };
  //component
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        placeholder="search"
        onChange={inputChangeHandler}
      />
    </div>
  );
};

export default SearchInput;
