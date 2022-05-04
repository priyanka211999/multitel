import React from 'react';
import LandingPage from "../components/LandingPage";
import ServiceBanner from "../components/atoms/ServiceBanner";
import Vendors from '../components/atoms/Vendors';

function ContactEquip  () {
  return (
   <>
   <LandingPage>
   <ServiceBanner title="Networking Equipments" />
   <Vendors />  
   </LandingPage>
   
   </>
  )
}

export default ContactEquip