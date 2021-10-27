import { createContext, useState } from "react";

export const userContext = createContext();

const UsercontextProvider = (props) => {
  const allUsers = [
    { id: 1, name: "Shamil", surname: "Mammadov", job: "developer" },
    { id: 2, name: "Emil", surname: "Mammadov", job: "business" },
    { id: 3, name: "Xezer", surname: "Karimli", job: "auditor" },
    { id: 4, name: "Ismayil", surname: "Rahimli", job: "developer" },
    { id: 5, name: "Namiq", surname: "Nazirli", job: "designer" },
    { id: 6, name: "Orxan", surname: "Huseynov", job: "manager" },
  ];
  const [filteredUser, setFilteredUser] = useState(allUsers);
  //functions
  const searchUser = (value) => {
    let findedUsers = filteredUser.filter((user) => {
      let userAllValue = Object.values(user).slice(1).toString().toUpperCase();
      let find;
      if (userAllValue.includes(value.toUpperCase())) {
        find = user;
      }
      return find;
    });
    setFilteredUser(findedUsers);
  };
  return (
    <userContext.Provider value={{ filteredUser, searchUser }}>
      {props.children}
    </userContext.Provider>
  );
};

export default UsercontextProvider;
