import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const userContext = createContext();

const UsercontextProvider = (props) => {
  //states
  const [allUser, setAllUser] = useState([]);
  const [filteredUser, setFilteredUser] = useState([]);
  const [searchedValue, setSearchedValue] = useState("");
  const [logged, setLogged] = useState(false);

  //functions
  const searchUser = (value) => {
    let findedUsers = allUser.filter((user) => {
      let userAllValue = [
        user.name,
        user.username,
        user.company.name,
        user.phone,
        user.address.city,
      ]
        .toString()
        .toUpperCase();
      let find;
      if (userAllValue.includes(value.toUpperCase())) {
        find = user;
      }
      return find;
    });
    setSearchedValue(value); //will use fro highlighter
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
    <userContext.Provider
      value={{ filteredUser, searchUser, searchedValue, logged, setLogged }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UsercontextProvider;
