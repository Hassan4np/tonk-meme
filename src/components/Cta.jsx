import { Col, Container, Row } from "react-bootstrap";
import CommonTitle from "./CommonTitle";
import ctaimg from "../assets/img/cta-img.png"
import { useEffect } from "react";
import Aos from 'aos';

export default function Cta() {
  useEffect(() => {
    Aos.init({
      duration:1600
    })
  },[]);
  return (
    <div className="cta common-padding">
      <Container>
        <Row>
          <Col xs={12} lg={7} className="d-flex justify-content-center align-items-center">
            <div className="cta-content mb-4 pb-2 mb-md-5 mb-lg-0 pb-lg-0">
              <CommonTitle className="text-center text-lg-start mb-4 mb-lg-5" title="Start Your Tonk Adventure Now!" des="Ready to join the meme revolution? It's time to add some Tonk to your clink! Follow us for all the latest updates and get in on this wild ride." />
              <button className="btn" data-aos="fade-up" data-duration="2400">Buy Now</button>
            </div>
          </Col>
          <Col xs={12} lg={5}>
            <div className="cta-contents" data-aos="fade-left">
              <div className="cta-image">
                <img src={ctaimg} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
