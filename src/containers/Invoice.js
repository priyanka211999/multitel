import React from 'react';
import LandingPage from '../components/LandingPage';
import ServiceBanner from '../components/atoms/ServiceBanner';
import Profile from '../components/atoms/Profile';
import InvoiceTable from '../components/atoms/InvoiceTable';

function Invoice() {
  return (
    <LandingPage>
      <ServiceBanner title="Invoice" />
      <Profile />
      <InvoiceTable />
    </LandingPage>
  )
}

export default Invoice