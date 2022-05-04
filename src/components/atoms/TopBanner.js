import React from "react";
import { useNavigate } from "react-router-dom";
import test from "../../assets/test.png";
import "../../staticcard.css";

function TopBanner({ topText, btnText, heading, subheading, link }) {
  const navigate = useNavigate();

  return (
    <div className="banner-New-inner-inner">
      <button class="btn-white" style={{ textTransform: "uppercase" }}>
        {topText}
      </button>
      <p className="banner-heading">{heading}</p>
      <p className="banner-subheading">{subheading}</p>
      <button class="btn-blue" onClick={() => navigate(link)}>
        {btnText}
      </button>
    </div>
  );
}

export default TopBanner;
