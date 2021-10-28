import React, { useContext } from "react";
import { userContext } from "../context/UserContextProvider";
import { Table } from "antd";
import Highlighter from "react-highlight-words";
import { Tag } from "antd";

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
        <Tag color="#f50">
          <Highlighter
            highlightClassName="YourHighlightClass"
            searchWords={[searchedValue]}
            autoEscape={true}
            textToHighlight={address.city}
          />
        </Tag>
      ),
    };
  });
  const columns = [
    {
      title: <Tag color="#2db7f5">Name</Tag>,
      dataIndex: "name",
      key: "name",
      width: "20%",
    },
    {
      title: <Tag color="#2db7f5">Username</Tag>,
      dataIndex: "username",
      key: "username",
      width: "20%",
    },
    {
      title: <Tag color="#2db7f5">City</Tag>,
      dataIndex: "city",
      key: "city",
      width: "15%",
    },
    {
      title: <Tag color="#2db7f5">Company Name</Tag>,
      dataIndex: "companyname",
      key: "companyname",
      width: "10%",
      // ...this.getColumnSearchProps('address'),
      // sorter: (a, b) => a.address.length - b.address.length,
      // sortDirections: ['descend', 'ascend'],
    },
    {
      title: <Tag color="#2db7f5">Phone numer</Tag>,
      dataIndex: "number",
      key: "number",
      width: "35%",
      // ...this.getColumnSearchProps('address'),
      // sorter: (a, b) => a.address.length - b.address.length,
      // sortDirections: ['descend', 'ascend'],
    },
  ];

  return <Table columns={columns} dataSource={data} style={{color: 'red'}} />;
};

export default UserTable;
