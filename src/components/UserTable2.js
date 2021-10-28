import React, { useContext } from "react";
import { userContext } from "../context/UserContextProvider";
import { Table, Input, Button, Space } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
//
const UserTable = () => {
  const { filteredUser, searchedValue } = useContext(userContext);
  const data = filteredUser.map((user) => {
    const { id, name, username, company, phone, address } = user; //get users's value which will use in table
    return {
      key: id,
      name: (
        <Highlighter
          highlightClassName="YourHighlightClass"
          searchWords={[searchedValue]}
          autoEscape={true}
          textToHighlight={name}
        />
      ),
      username: (
        <Highlighter
          highlightClassName="YourHighlightClass"
          searchWords={[searchedValue]}
          autoEscape={true}
          textToHighlight={username}
        />
      ),
      companyname: (
        <Highlighter
          highlightClassName="YourHighlightClass"
          searchWords={[searchedValue]}
          autoEscape={true}
          textToHighlight={company.name}
        />
      ),
      number: (
        <Highlighter
          highlightClassName="YourHighlightClass"
          searchWords={[searchedValue]}
          autoEscape={true}
          textToHighlight={phone}
        />
      ),
      city: (
        <Highlighter
          highlightClassName="YourHighlightClass"
          searchWords={[searchedValue]}
          autoEscape={true}
          textToHighlight={address.city}
        />
      ),
    };
  });
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "20%",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      width: "20%",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
      width: "15%",
    },
    {
      title: "Company Name",
      dataIndex: "companyname",
      key: "companyname",
      width: "10%",
      // ...this.getColumnSearchProps('address'),
      // sorter: (a, b) => a.address.length - b.address.length,
      // sortDirections: ['descend', 'ascend'],
    },
    {
      title: "Phone numer",
      dataIndex: "number",
      key: "number",
      width: "35%",
      // ...this.getColumnSearchProps('address'),
      // sorter: (a, b) => a.address.length - b.address.length,
      // sortDirections: ['descend', 'ascend'],
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default UserTable;
