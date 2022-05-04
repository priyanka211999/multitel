import React from "react";
import { Col, Container, Row } from 'react-bootstrap'

function MarketplaceBanner({img,title,subtext1,subtext,Amount,buttonText}) {
  return (
    <section id="inner_banner" style={{padding:"35px 0px"}}>
      <Container>
        <Row>
          <Col xs={12}>
            <div className="">
              <img className="rounded float-right img-fluid" src={img} alt="image" style={{width:"40%"}} />
              <h2 className="white-color text-left" style={{paddingTop:"30px"}}>{title}</h2>
              <small className="white-color text-left">{subtext1}</small><br/>
              <small className="white-color text-left">{subtext}</small><br/>
              <h4 style={{color:'white'}}>{Amount}</h4>
              <button className="btn-btn-link" style={{color:"#0076B5",backgroundColor:"White",border:"white",borderRadius:"5px"}}>
                {buttonText}
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default MarketplaceBanner;
