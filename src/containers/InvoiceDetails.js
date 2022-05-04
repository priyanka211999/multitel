import React from "react";
import LandingPage from "../components/LandingPage";
import ServiceBanner from "../components/atoms/ServiceBanner";
import Profile from "../components/atoms/Profile";
import InvoiceBill from "../components/atoms/InvoiceBill";

function InvoiceDetails() {
  return (
    <LandingPage>
      <ServiceBanner title="Invoice Details" />
      <Profile />
      <InvoiceBill />
    </LandingPage>
  );
}

export default InvoiceDetails;
