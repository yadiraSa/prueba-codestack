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

  const activeUsersData = data.filter((user) => user.status === 'active');

  return (
    <Table columns={columns} dataSource={activeUsersData} loading={loading} />
  );
};
export default Tabla;
