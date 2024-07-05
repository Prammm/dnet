import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { UserOutlined, ShoppingCartOutlined, LoginOutlined } from '@ant-design/icons';
import Login from './components/Login';
import CustomerList from './components/CustomerList';
import TransactionList from './components/TransactionList';

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Header>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1" icon={<LoginOutlined />}>
              <Link to="/">Login</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              <Link to="/customers">Customers</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<ShoppingCartOutlined />}>
              <Link to="/transactions">Transactions</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', backgroundColor: '#f0f2f5', flex: 1 }}>
          <div className="site-layout-content" style={{ minHeight: 'calc(100vh - 128px)' }}>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/customers" element={<CustomerList />} />
              <Route path="/transactions" element={<TransactionList />} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>E-Commerce Prototype ©2023 Created by Alfons Pramudita</Footer>
      </Layout>
    </Router>
  );
};

export default App;
