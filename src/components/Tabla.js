import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table } from "antd";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    filters: [
      { text: "Male", value: "male" },
      { text: "Female", value: "female" },
    ],
    onFilter: (value, record) => record.gender === value,
    render: (text) => (
      <span style={{ color: text === "female" ? "purple" : "blue" }}>
        {text}
      </span>
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
];

const Tabla = () => {
  const [data, setData] = useState([]);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://gorest.co.in/public/v2/users")
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  const activeUsersData = data.filter((user) => user.status === "active");

  return (
    <Table columns={columns} dataSource={activeUsersData} loading={loading} />
  );
};
export default Tabla;
