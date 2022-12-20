import React from 'react';
import { Col, Row, Typography } from 'antd';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const { Title } = Typography;

const CryptoLineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
  }

  const data_test = [{name: 'Page A', uv: 400},{name: 'Page B', uv: 100},{name: 'Page C', uv: 300},{name: 'Page D', uv: 700}];
 

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <LineChart width={1200} height={300} data={data_test} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="key" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </>
  );
};

export default CryptoLineChart;