import React, { useEffect, useState } from "react";
import test from "../assets/test.png";
import "./slider.css";
import Slider from "react-slick";
import up from "../assets/up-arrow.svg";
import down from "../assets/down-arrow.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const next = () => {
    let a = document.getElementsByClassName("slick-next");
    a[0].click();
  };
  const prev = () => {
    let b = document.getElementsByClassName("slick-prev");
    b[0].click();
  };
  const slidesData = [
    {
      id: 1,
      title: "Image 1",
      label: " label 1",
      src: "https://picsum.photos/800/400?img=1",
    },
    {
      id: 2,
      title: "Image 2",
      label: "just not a label",
      src: "https://picsum.photos/800/400?img=2",
    },
    {
      id: 3,
      title: "Image 3",
      label: " just woe a label",
      src: "https://picsum.photos/800/400?img=3",
    },
    {
      id: 4,
      title: "Image 4",
      label: "just a label",
      src: "https://picsum.photos/800/400?img=4",
    },
    {
      id: 5,
      title: "Image 5",
      label: "just a label",
      src: "https://picsum.photos/800/400?img=5",
    },
    {
      id: 6,
      title: "Image 6",
      label: "just a label",
      src: "https://picsum.photos/800/400?img=6",
    },
  ];
  let [value, setValue] = useState("");

  const checkSize = () => {
    {
      window.innerWidth >= 1100
        ? setValue("slidesData[i].label")
        : setValue("i + 1");
    }
  };
  useEffect(() => {
    checkSize();
    window.addEventListener("resize", checkSize);
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    vertical: true,
    autoplay: true,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul id="ul_m_li"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div id={"li_id_" + i} style={{ height: "30px" }} className="div_li_item">
        {eval(value)}
      </div>
    ),
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex">
        <div className='col-24'>
        <div className='banner-New'>
            <Slider {...settings}>
              {slidesData?.map((slide) => (
                <div className="slick-slide" key={slide.id}>
                  {/* <h2 className="slick-slide-title">{slide.title}</h2> */}
                  <img className="img-fluid"
                    // className="slick-slide-image"
                    // src={slide.src}
                    src={test}
                  />
                </div>
              ))}
            </Slider>
            
            <button id="up_btn" onClick={prev} className="slide_manual_prev">
              <img src={up} alt="previous" />
            </button>
            <button id="down_btn" onClick={next} className="slide_manual_next">
              <img src={down} alt="Next" />
            </button>
          </div>
          <div className='banner-New-inner'>
                <div className='banner-New-inner-inner'>
                  <button class="btn-white">we're Multitel</button>
                  <p>Experience new generation of Internet<br/>our Plan starts with $20</p>
                  <button class="btn-blue"><a>Get started</a></button>
                </div>
              </div>
        
        </div>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default App;
