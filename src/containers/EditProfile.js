import React from "react";
import LandingPage from "../components/LandingPage";
import ServiceBanner from "../components/atoms/ServiceBanner";
import Profile from "../components/atoms/Profile";
import EditProfileForm from "../components/atoms/EditProfileForm";

function EditProfile() {
  return (
    <div id="layoutTopnavContent">
    <div className="container-fluid">  
        {/* <LandingPage>
      <ServiceBanner title="Edit Profile" /> */}
      {/* <Profile /> */}
      <EditProfileForm />
    {/* </LandingPage> */}
    </div>
    </div>


  );
}

export default EditProfile;
