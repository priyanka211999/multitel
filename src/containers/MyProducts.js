import React from 'react';
import MyProductCard from '../components/atoms/MyProductCard';
import LandingPage from '../components/LandingPage';
import ServiceBanner from '../components/atoms/ServiceBanner';
import Profile from '../components/atoms/Profile';

function MyProducts() {
  return (
    <LandingPage>
      <ServiceBanner title="My Products" />
      <Profile />
      <MyProductCard />
    </LandingPage>
  )
}

export default MyProducts