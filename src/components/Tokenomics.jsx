import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import Aos from 'aos';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

import tokenImg from '../assets/img/token-img.png'
import CommonTitle from "./CommonTitle";

export default function tokenomics() {
  useEffect(() => {
    Aos.init();
  }, []);
  const tokenData = [
    {
      name: 'Liquidity',
      percent: 60,
      color: '#E16DDF',
    },
    {
      name: 'Marketing',
      percent: 25,
      color: '#023FD5',
    },
    {
      name: 'Exchanges',
      percent: 15,
      color: '#FB7C28',
    },
  ];

  const data = {
    labels: tokenData.map((item) => item.name),
    datasets: [
      {
        label: 'Value',
        data: tokenData.map((item) => item.percent),
        backgroundColor: tokenData.map((item) => item.color),
        borderColor: '#CDEEFF',
        borderWidth: 14,
        hoverOffset: 4,
        borderRadius:20,
        cutoutPercentage:50,
      },
    ],
  };

  const options = {
    cutoutPercentage:10,
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        displayColors: false,
      }
    },
  }

  return (
    <div className='tokenomics common-padding'>
      <Container>
        <Row className=' align-items-center'>
          <Col xs={12} md={6} >
            <CommonTitle className="text-center text-md-start" title="Tokenomics" />            
            <div className="tokenomics-percentage">
              {tokenData.map((item, index) => (
                <div className="tokenomics-percentage-item" key={index} data-aos="fade-up" data-aos-duration={`1${index+6}00`}>
                  <div className="line">
                    <div className="line-wrap" style={{ backgroundColor: item.color, width: `${item.percent}%` }}></div>
                  </div>
                  <div className="text">
                    <p>{item.percent}% {item.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col xs={12} md={6} className='d-flex justify-content-center justify-content-md-end'>
            <div className="tokenomics-chart position-relative z-1" data-aos="fade-left">
              <div className="tokenomics-logo position-absolute top-50 start-50 z-n1">
                <img src={tokenImg} alt="" />
              </div>
              <Doughnut data={data} options={options} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
