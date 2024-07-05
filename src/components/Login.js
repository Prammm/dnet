import React from 'react';
import { Form, Input, Button, Typography } from 'antd';

const { Title, Text, Link } = Typography;

const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5' }}>
      <div style={{ maxWidth: '400px', width: '100%', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', backgroundColor: '#ffffff' }}>
        <Title level={3} style={{ textAlign: 'center', marginBottom: '24px', color: '#333' }}>PT. JasaWifi</Title>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block style={{ backgroundColor: '#001529', borderColor: '#001529' }}>
              Login
            </Button>
          </Form.Item>
        </Form>
        <div style={{ marginTop: '10px' }}>
          <Text style={{ display: 'block', textAlign: 'left' }}>
            Don't have an account? Click  <Link href="/register" style={{ color: '#001529' }}><strong>here</strong></Link>
          </Text>
          <Text style={{ display: 'block', textAlign: 'left' }}>
            Forgot your password? Reset your password <Link href="/reset-password" style={{ color: '#001529' }}><strong>here</strong></Link>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Login;
