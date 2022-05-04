import React, { useContext } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { mobile } from "../svg/mobile";
import FooterTop from "./footer/FooterTop";
import FooterMiddle from "./footer/FooterMiddle";
import FooterBottom from "./footer/FooterBottom";
import FooterProducts from "./footer/FooterProducts";
import { regnFooter } from "../containers/ClientRegistration";
import { opFooter } from "../containers/OtherProducts";

function Footer() {

  return (
    <div id="footer">
      <FooterProducts />
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </div>
  );
}

export default Footer;
