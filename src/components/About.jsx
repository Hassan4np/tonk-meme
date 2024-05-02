import { Container, Row, Col } from "react-bootstrap";
import CommonTitle from "./CommonTitle";
import aboutcat from "../assets/img/about-cat.png";
import shape from '../assets/img/about-shape.svg';
import { useEffect } from "react";
import Aos from "aos";

export default function About() {
  useEffect(() => {
    Aos.init({duration:'1200'});
  },[]);

  return (
    <div className="about">
      <div className="about-shape-top position-absolute start-0 bottom-100 z-n1 w-100 h-auto"> <img src={shape} className="w-100 h-auto" alt="" /> </div>
      <div className="about-shape-bottom position-absolute start-0 z-n1 top-100 w-100 h-auto"> <img src={shape} className="w-100 h-auto" alt="" /> </div>
      <Container>
        <Row className="justify-content-center ">
          <Col xs={12} md={10} lg={6}>
            <CommonTitle
              title="About Us"
              des="Hop On the TONK Rocket with Real Kick"
            />
          </Col>
        </Row>
        <Row className="gap-0">
          <Col xs={12} lg={5} className="about-img-content">
            <div className="about-image" data-aos="fade-right">
              <img src={aboutcat} alt="" />
            </div>
          </Col>
          <Col xs={12} lg={7} className="d-flex justify-content-center align-items-center">
            <div className="about-content" data-aos="fade-left">
              <p>
                Tonk Coin is here to flip the script on what meme coins are all
                about. This isn&apos;t just another dog in the park. It&apos;s
                the shiniest, newest digital treasure that actually pays you for
                having fun! Dive into our Telegram channel, make some noise, and
                start stacking coins just by being your awesome self.🚀
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
