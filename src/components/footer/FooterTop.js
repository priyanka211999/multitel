import React from 'react'
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

function FooterTop() {
  return (
    <Container fluid id="awards_sponsors">
        <Row>
          <Col md={6} className="awards py-5 px-md-4">
            <Row>
              <Col md={1} lg={3}>

              </Col>
              <Col md={11} lg={9}>
                <h2 className="mb-4">Awards and Distinctions</h2>
                <div className="award_img">
                  <img src="/assets/images/award.png" className="mr-5 mr-md-4 mr-lg-5" />
                  <img src="/assets/images/award.png" className="mr-5 mr-md-4 mr-lg-5" />
                  <img src="/assets/images/award.png" className="mr-5 mr-md-4 mr-lg-5" />
                  <img src="/assets/images/award.png" className="mr-5 mr-md-4 mr-lg-5" />
                </div>
              </Col>
                
             
            </Row>

          </Col>  
          <Col md={6} className="sponsors py-5">
              <Col lg={9} md={11}>
                <h2 className="mb-lg-5 mb-4">Sponsorships</h2>
                <div className="sponsor_img">
                  <img src="/assets/images/sponsors.png" className="mr-3" />
                  <img src="/assets/images/sponsors.png" className="mr-3" />
                  <img src="/assets/images/sponsors.png" className="mr-3" />
                </div>
              </Col>
              <Col lg={3} md={1}>
                
              </Col>
            
          </Col> 
        </Row>  
      </Container>
  )
}

export default FooterTop
