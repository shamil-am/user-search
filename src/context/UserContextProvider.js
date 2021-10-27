import { createContext, useState } from "react";

export const userContext = createContext();

const UsercontextProvider = (props) => {
  const allUsers = [
    { id: 1, name: "Shamil", surname: "Mammadov", job: "Developer" },
    { id: 2, name: "Emil", surname: "Mammadov", job: "business" },
    { id: 3, name: "Xezer", surname: "Karimli", job: "auditor" },
    { id: 4, name: "Ismayil", surname: "Rahimli", job: "developer" },
    { id: 5, name: "Namiq", surname: "Nazirli", job: "designer" },
    { id: 6, name: "Orxan", surname: "Huseynov", job: "manager" },
  ];
  const [filteredUser, setFilteredUser] = useState(allUsers);
  //functions
  const searchUser = (value) => {
    if (value.length > 1) {
      let findedUser = filteredUser.filter((user) => {
        let userAllValue = Object.values(user).join("").slice(1).toUpperCase();
        let find;
        if (userAllValue.search(value.toUpperCase()) !== -1) {
          find = user;
        }
        return find;
      });
      setFilteredUser(findedUser);
    } else {
      setFilteredUser(allUsers);
    }
  };
  return (
    <userContext.Provider value={{ filteredUser, searchUser }}>
      {props.children}
    </userContext.Provider>
  );
};

export default UsercontextProvider;
