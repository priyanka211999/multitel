import React from "react";
import LandingPage from "../components/LandingPage";
import ServiceBanner from "../components/atoms/ServiceBanner";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import Vendors from "../components/atoms/Vendors";

function ContactTelecom() {
  return (
    <>
      <LandingPage>
        <ServiceBanner title="Telecom" />
        <Vendors />
      </LandingPage>
    </>
  );
}
export default ContactTelecom;
