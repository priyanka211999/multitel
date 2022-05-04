import React from 'react';
import LandingPage from "../components/LandingPage";
import ServiceBanner from "../components/atoms/ServiceBanner";
 
import Vendors from '../components/atoms/Vendors';

 function ContactPromotion() {
  return (
    <>
    <LandingPage>
    <ServiceBanner title="Promotions" />
    <Vendors />
   
    </LandingPage>
    
    
    </>
  )
}
export default ContactPromotion;
