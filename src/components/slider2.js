import React, { useEffect, useState } from "react";
import { getAllApprovedCms, getAllCms } from "../services/category";
import test from "../assets/test.png";
import banner from "../assets/home-banner.jpg";
import bg from "../assets/tv_services_bg.png";
import "./slider2.css";
import Slider from "react-slick";
import up from "../assets/up-arrow.svg";
import down from "../assets/down-arrow.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { baseurl } from "../utils/request";
import LandingPage from "./LandingPage";
import { Carousel, Row } from "react-bootstrap";
import TopBanner from "./atoms/TopBanner";
import { useNavigate } from "react-router-dom";

function App() {
  const [sliderList, setSliderList] = useState([]);
  const [iniText, setIniText] = useState("Loading...");
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await getAllApprovedCms({ page_slug: "corporate" });
      console.log(response);
      response?.data?.data
        ? setSliderList(response?.data?.data)
        : setIniText("");
      // setSliderList([...sliderList, ...response?.data?.data]);
    })();
  }, []);

  return (
    <div id="slider">
      {sliderList?.length ? (
        <section className="corp_slider">
          <Row>
            <Carousel nextLabel="" prevLabel={null}>
              {sliderList?.map((slide) => (
                <Carousel.Item key={slide?.id}>
                  <img
                    className="d-block w-100"
                    src={
                      slide?.image ? `${baseurl}/images/${slide?.image}` : test
                    }
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <div 
                    // className="banner-New-inner-inner"
                    className="link"
                    >
                      <button
                        className="link_btn"
                        // className='btn-white'
                        style={{ textTransform: "uppercase" }}
                      >
                        {slide?.title}
                      </button>
                      {/* <div className="link_text banner-New-inner"> */}
                        <p className="banner-heading"
                        // className="banner-heading"
                        >{slide?.subtitle}</p>
                        <p
                          className="banner-subheading"
                          style={{ textAlign: "left" }}
                        >
                          {slide?.description}
                        </p>
                      {/* </div> */}
                      <button
                        onClick={() => navigate(slide?.link)}
                        class="link_btn2"
                        // className="btn-blue"
                      >
                        {slide?.button}
                      </button>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Row>
        </section>
      ) : (
        <p className="text-center">{iniText}</p>
      )}
    </div>
  );
}

export default App;
