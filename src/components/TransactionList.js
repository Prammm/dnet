import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'antd';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/transactions')
      .then(response => {
        setTransactions(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the transactions!', error);
      });
  }, []);

  const handleDetailsClick = (record) => {
    console.log('Transaction Details:', record);
    // Here you can implement further logic to handle the details click, such as showing a modal or navigating to another page.
  };

  const columns = [
    { 
      title: 'Transaction ID', 
      dataIndex: 'transactionId', 
      key: 'transactionId',
      sorter: (a, b) => a.transactionId.localeCompare(b.transactionId),
    },
    { 
      title: 'Date', 
      dataIndex: 'date', 
      key: 'date',
      sorter: (a, b) => new Date(a.date) - new Date(b.date),
    },
    { 
      title: 'Package Name', 
      dataIndex: 'packageName', 
      key: 'packageName' 
    },
    { 
      title: 'Transaction Amount', 
      dataIndex: 'transactionAmount', 
      key: 'transactionAmount',
      sorter: (a, b) => parseFloat(a.transactionAmount.replace('Rp', '').replace('.', '')) - parseFloat(b.transactionAmount.replace('Rp', '').replace('.', '')),
    },
    {
      title: 'Transaction Details',
      key: 'details',
      render: (text, record) => (
        <Button
          type="primary"
          onClick={() => handleDetailsClick(record)}
          style={{ backgroundColor: '#001529', borderColor: '#001529' }}
        >
          View Details
        </Button>
      ),
    }
  ];

  return <Table dataSource={transactions} columns={columns} />;
};

export default TransactionList;
