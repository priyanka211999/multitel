import React from 'react';
import LandingPage from "../components/LandingPage";
import ServiceBanner from "../components/atoms/ServiceBanner";
import Vendors from '../components/atoms/Vendors';

const ContactCPE = () => {
  return (
   <>
    <LandingPage>
   <ServiceBanner title="CPE's" />
   <Vendors />  
   </LandingPage>
   
   
   </>
  )
}

export default ContactCPE