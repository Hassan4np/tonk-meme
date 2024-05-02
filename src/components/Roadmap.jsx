import React, { useEffect, useEffectÇ } from 'react';
import Aos from 'aos';
import { Col, Container, Row } from "react-bootstrap";
import CommonTitle from './CommonTitle'

export default function Roadmap() {
  useEffect(() => {
    Aos.init();
  }, []);

  const roadmap = [
    {
      title: 'Not Just Any Coin',
      des: 'Tonk Coin is here to pay. Your memes and messages directly turn into cash money.'
    },
    {
      title: 'All About That Community',
      des: `We're here to build a meme dream team. Stay active, and get rewarded.`
    },
    {
      title: 'Clear as Crystal Rewards',
      des: 'No gimmicks, just good old-fashioned fun that pays. We show you the money as you make those impressions.'
    },
  ]

  return (
    <div className='roadmap common-padding common'>
      <Container>
        <Row>
          <Col xs={12}>
            <CommonTitle title="Tonk Coin Perks" />
          </Col>
          <Col xs={12}>
            <div className="roadmap-card">
              {roadmap.map((item, index) => (
                <div className="roadmap-card-single d-flex align-items-center" key={index} data-aos="fade-up" data-aos-duration={`1${index + 5}00`}>
                  <div className="card-wrap">
                    <h2>{item.title}</h2>
                    <ul>
                      <li>{item.des}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
