import React from 'react';
import LandingPage from '../components/LandingPage';
import ServiceBanner from '../components/atoms/ServiceBanner';
import Profile from '../components/atoms/Profile';
import InternetQualityTest from '../components/atoms/InternetQualityTest';

function InternetQualityGraph() {
  return (
    <LandingPage>
      <ServiceBanner title="Internet Quality Graph" />
      <Profile />
      <InternetQualityTest />
    </LandingPage>
  )
}

export default InternetQualityGraph