import "./App.css";
import React from "react";
import { Layout } from "antd";
import Tabla from "./components/Tabla";
const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout>
      <Layout>
        <Header
          style={{
            padding: 0,
            minWidth: 100,
            background: "#C17CE7",
          }}
        >
          <h1
            style={{
              padding: 0,
              margin: '10px',
              textAlign: "center",
              color: "#EBEBE9",
            }}
          >
            Welcome users!
          </h1>
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 500,
              background: "#7C95E7",
            }}
          >
            <Tabla />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Code Challenge Yadira Salazar ©2023
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
