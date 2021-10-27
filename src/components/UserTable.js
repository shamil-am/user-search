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
          <th>Surname</th>
          <th>Job</th>
        </tr>
      </thead>
      <tbody>
        {filteredUser.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.job}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserTable;
