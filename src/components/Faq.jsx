import { Col, Container, Row } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import CommonTitle from './CommonTitle';
import { useEffect } from "react";
import Aos from 'aos';

export default function Faq() {
  useEffect(() => {
    Aos.init()
  },[])
  const faq = [
    {
      title: 'What is Tonk Coin?',
      des: `<p>Tonk Coin is a new digital cryptocurrency that differentiates itself from typical meme coins by offering real rewards for engaging in fun activities within its community. It's designed not just as a currency, but as a fun and interactive experience for its users.</p>`,
    },
    {
      title: 'How can I earn Tonk Coins?',
      des: `
        <p class="mb-2">You can earn Tonk Coins by participating in the official Tonk Coin Telegram channel. Here’s how:</p>
        <ol type="1" class="ps-3">
            <li class="mb-1">1. Join the Tonk Coin Telegram channel.</li>
            <li class="mb-1">2. Actively engage by interacting with messages and creating memes.</li>
            <li class="mb-1">3. our interactions and engagements convert into Tonk Coins, which accumulate in your digital wallet.</li>
        </ol>
      `,
    },
    {
      title: 'How does the reward system work?',
      des: `<p>The more you interact and contribute to the Tonk Coin Telegram channel through messages and memes, the more coins you earn. The system is transparent, showing you exactly how your activities convert into rewards.</p>`,
    },
    {
      title: 'What is the contract address for Tonk Coin? ',
      des: `<p>xxxxxxxxx xxxxxxxxx xxxxxxxx</p>`,
    },
    {
      title: 'How to buy Tonk Coin?',
      des: `
      <p class="mb-2">To buy Tonk Coin, you would generally follow these steps:</p>
      <ol type="1" class="ps-3">
          <li class="mb-1">1. ⁠Start @wallet bot on telegram.</li>
          <li class="mb-1">2. Purchase TON.</li>
          <li class="mb-1">3. Swap TON to buy TONK</li>
      </ol>
      `,
    },
  ]
  return (
    <div className="faq common-padding common">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12}>
            <CommonTitle title="FAQS" des="FAQ for our Tonk Coin!" />
          </Col>
          <Col xs={12} md={10}>
            <Accordion defaultActiveKey={0}>
              {faq.map((item, index) => (
                <Accordion.Item eventKey={index} key={index} data-aos="fade-up" data-aos-duration={`1${index+5}00`}>
                  <Accordion.Header>{item.title}</Accordion.Header>
                  <Accordion.Body dangerouslySetInnerHTML={{ __html: item.des }}></Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
