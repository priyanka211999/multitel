import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { backIcon } from '../../svg/backIcon'

function ServiceBanner({title,regnPage,backlink="/marketplace"}) {
  return (
    <section id="inner_banner">
        <Container>
            {/* {!regnPage && <Link to={"/marketplace"}>{backIcon}</Link>} */}
            <Row>
                <Col xs={12}>
                    <div className=''>
                    {!regnPage && <Link to={backlink}>{backIcon}</Link>}
                <h1 className='white-color text-center'>{title}</h1>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default ServiceBanner
