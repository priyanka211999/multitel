import React, { useState } from 'react'
import test from "./assets/test.png"
import banner from "./assets/home-banner.jpg"
import abc from "./assets/tv_services_bg.png"
import LandingPage from './components/LandingPage'
import "./staticcard.css"
import { Button, Carousel, Row } from 'react-bootstrap'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

function Example() {
  const [ipValue, setIpValue] = useState("")
  const [val, setVal] = useState("")  
  const [multiVal, setMultiVal] = useState([])

  const getValues = () => {
    const finalVal = val ? val.map(v => v.value) : []
    console.log(finalVal)
  }

  return (
    <LandingPage>
      <section className="corp_slider">
        <Row>
      {/* <div id="carouselExample" className="carousel vert slide" data-ride="carousel" data-interval="3000">
          <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
              <div className="carousel-item active">
                  <img className="d-block mx-auto img-fluid" src={test} alt="First slide" />
              </div>
              <div className="carousel-item">
                  <img className="d-block mx-auto img-fluid" src={banner} alt="Second slide" />
              </div>
              <div className="carousel-item">
                  <img className="d-block mx-auto img-fluid" src={abc} alt="Third slide" />
              </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon  rounded-circle" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
              <span className="carousel-control-next-icon  rounded-circle" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
          </a>
      </div> */}
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={test}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={banner}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={abc}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </Row>
      </section>

      <Select 
      // defaultValue={[colourOptions[2], colourOptions[3]]}
        isMulti
        name="colors"
        className="basic-multi-select"
        classNamePrefix="select"
        options={options} 
        inputValue={ipValue}
        value={val}
        onChange={(value) => {
          setVal(value)
          console.log(value)
        }}
      />
      <button
        type="button"
        className="btn btn-primary btn-sm my-3"
        style={{
          marginRight: "15px",
          backgroundColor: "#0076B5",
          marginTop: "30px !important",
        }}
        onClick={getValues}
      >
        <i className="fas fa-plus-circle"></i> Add New Promotion
      </button>

    </LandingPage>
    // </center> 

 
  )
}

export default Example