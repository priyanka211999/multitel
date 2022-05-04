import React, { useEffect, useState } from "react";
import LandingPage from "../components/LandingPage";
import ServiceBanner from "../components/atoms/ServiceBanner";
import { Button, Col, Container, Row } from "react-bootstrap";
import Vendors from "../components/atoms/Vendors";
import { useLocation } from "react-router-dom";
import { getAllVendors } from "../services/category";

function VendorDetails() {
  const {state} = useLocation()
  const {title,slug} = state
  const [vendorList, setVendorList] = useState([])
  const [initText, setInitText] = useState("Loading...")

  const getVendorsByCat = async (slug) => {
    // console.log("category",categories);
    const data = {
      category : slug
    } 
    try {
      const resp = await getAllVendors(data);
      setVendorList(resp && resp.data.data);
      console.log("resp", resp.data.data);
      !resp?.data?.data?.length && setInitText("No vendors found in this category.")
    } catch (error) {
      console.log("error", error);
      alert("something went Wrong");
    } 
  };

  useEffect(() => {
    getVendorsByCat(slug)
  },[slug])

  return (
    <>
    <LandingPage>
      <ServiceBanner title={`Vendor details of ${title}`} regnPage />
      {vendorList?.length ? <Vendors vendorList={vendorList} /> : <p className="text-center">{initText}</p>}
      
    
    </LandingPage>
    </>
  );
}

export default VendorDetails;
