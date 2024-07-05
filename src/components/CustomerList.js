import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Row, Col } from 'antd';

const InternetPackageList = () => {
  const [packages, setPackages] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/packages')
      .then(response => {
        setPackages(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the internet packages!', error);
      });
  }, []);

  return (
    <div style={{ padding: '30px' }}>
      <Row gutter={[16, 16]}>
        {packages.map(pkg => (
          <Col key={pkg.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              bordered={false}
              style={{
                borderRadius: '10px',
                boxShadow: hoveredCard === pkg.id ? '0 8px 16px rgba(0, 0, 0, 0.2)' : '0 4px 8px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                transform: hoveredCard === pkg.id ? 'scale(1.05)' : 'scale(1)',
                textAlign: 'center',
                border: 'none',
              }}
              onMouseEnter={() => setHoveredCard(pkg.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={{ padding: '24px' }}>
                <div style={{ fontSize: '20px', color: '#001529', fontWeight: 'bold', marginBottom: '16px' }}>{pkg.name}</div>
                <p style={{ fontSize: '50px', color: '#001529', marginBottom: '16px' }}><strong>{pkg.description}</strong></p>
                <p style={{ fontSize: '14px', color: '#595959', marginBottom: '24px' }}>Rp{pkg.price}/bulan</p>
                <div style={{ textAlign: 'center' }}>
                  <Button type="primary" style={{ borderRadius: '5px', backgroundColor: '#001529', borderColor: '#001529', width: '100%' }}>Buy</Button>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default InternetPackageList;
