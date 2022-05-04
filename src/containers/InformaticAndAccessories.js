import React from 'react';
import LandingPage from '../components/LandingPage';
import ServiceBanner from '../components/atoms/ServiceBanner';
import AccesoriesCard from '../components/atoms/AccesoriesCard';
import Vendors from '../components/atoms/Vendors';

function InformaticAndAccessories() {
  return (
    <LandingPage>
      <ServiceBanner title="Vendors Of Informatic and Accesories" />
      <Vendors />
    </LandingPage>
  )
}

export default InformaticAndAccessories