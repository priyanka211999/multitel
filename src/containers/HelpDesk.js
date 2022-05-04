import React from 'react';
import LandingPage from '../components/LandingPage';
import ServiceBanner from '../components/atoms/ServiceBanner';
import Profile from '../components/atoms/Profile';
import HelpDeskCard from '../components/atoms/HelpDeskCard';


function HelpDesk() {
  return (
    <LandingPage>
      <ServiceBanner title="Help Desk" />
      <Profile />
      <HelpDeskCard />
    </LandingPage>
  )
}

export default HelpDesk