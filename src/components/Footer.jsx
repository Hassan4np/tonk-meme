import { Col, Container, Row } from "react-bootstrap";
import footerImg from '../assets/img/footer-img.png';
import { useEffect } from "react";
import Aos from 'aos';

export default function Footer() {
  useEffect(() => {
    Aos.init({
      duration:1600
    })
  },[]);
  const social = [
    {
      icon: ` <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M24.3682 0.324589C24.6977 0.18591 25.0584 0.138081 25.4126 0.186078C25.7669 0.234076 26.1018 0.376147 26.3825 0.597502C26.6632 0.818858 26.8794 1.11141 27.0087 1.4447C27.138 1.77799 27.1756 2.13984 27.1176 2.49259L24.0935 20.8353C23.8002 22.6046 21.8589 23.6193 20.2362 22.7379C18.8789 22.0006 16.8629 20.8646 15.0496 19.6793C14.1429 19.0859 11.3656 17.1859 11.7069 15.8339C12.0002 14.6779 16.6669 10.3339 19.3336 7.75126C20.3802 6.73659 19.9029 6.15126 18.6669 7.08459C15.5976 9.40192 10.6696 12.9259 9.04022 13.9179C7.60289 14.7926 6.85355 14.9419 5.95755 14.7926C4.32289 14.5206 2.80689 14.0993 1.56955 13.5859C-0.102446 12.8926 -0.021113 10.5939 1.56822 9.92459L24.3682 0.324589Z" fill="#0E0E0D" />
            </svg>`,
      name: 'telegram',
      url: '/'
    }, {
      icon: `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M25.7822 25.917L15.7857 11.3465L15.8027 11.3602L24.8161 0.916992H21.8041L14.4615 9.41699L8.63066 0.916992H0.731195L10.0639 14.5204L10.0628 14.5193L0.219727 25.917H3.23176L11.3949 16.4602L17.8828 25.917H25.7822ZM7.43723 3.18971L21.4631 23.6443H19.0762L5.03901 3.18971H7.43723Z" fill="#0E0E0D" />
            </svg>`,
      name: 'twitter',
      url: '/'
    },
  ]
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col xs={12}>
            <div className="footer-wrap text-center">
              <div className="footer-content">
                <h2 data-aos="fade-up" data-aos-duration="">Tonk Coin, Where Memes Meet Money!</h2>
                <p data-aos="fade-up" data-aos-duration="">Join us, and let’s take this meme ride to the moon. Why just hodl when you can Tonk?</p>
              </div>
              <div className="footer-img">
                <img src={footerImg} alt="" />
              </div>
              <div className="social-icon" data-aos="fade-up" data-aos-duration="1800">
                <ul>
                  {social.map((item, index) => (
                    <li key={index}><a href={item.url} to={item.url} target='_blank' dangerouslySetInnerHTML={{ __html: item.icon }}></a></li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="copyRight">
        <h4>Copyright © 2024 $TONK. All rights reserved</h4>
      </div>
    </div>
  )
}
