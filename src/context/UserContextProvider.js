import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const userContext = createContext();

const UsercontextProvider = (props) => {
  //states
  const [allUser, setAllUser] = useState([]);
  const [filteredUser, setFilteredUser] = useState([]);
  //functions
  const searchUser = (value) => {
    let findedUsers = [...allUser].filter((user) => {
      let userAllValue = [
        user.name,
        user.username,
        user.company.name,
        user.phone,
      ]
        .toString()
        .toUpperCase();
      let find;
      if (userAllValue.includes(value.toUpperCase())) {
        find = user;
      }
      return find;
    });
    setFilteredUser(findedUsers);
  };
  //effects
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    axios
      .get(url)
      .then((response) => {
        setAllUser(response.data);
        setFilteredUser(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  //components
  return (
    <userContext.Provider value={{ filteredUser, searchUser }}>
      {props.children}
    </userContext.Provider>
  );
};

export default UsercontextProvider;
