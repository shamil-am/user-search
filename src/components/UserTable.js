import React, { useContext } from "react";
import { userContext } from "../context/UserContextProvider";

//
const UserTable = () => {
  const { filteredUser } = useContext(userContext);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Company</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {filteredUser.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.company.name}</td>
              <td>{user.phone}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserTable;
