import React, { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import './example.css'
import AppHeader from "../components/AppHeader";
import LandingPage from "../components/LandingPage";
const Tabs = Object.freeze([
    { label: "Client Profile", link: "client/profile" },
  { label: "Edit Profile", link: "client/editprofile" },
  { label: "HelpDesk", link: "client/helpdesk" },
  { label: "MyProducts", link: "client/myproducts" },
  { label: "Invoices", link: "client/invoice" },
  { label: "Internet Quality Graph", link: "client/internetqualitygraph" },
  { label: "Settings", link: "client/settings" },
  

]);



export default function AdLanding() {
    let navigate = useNavigate();
    const [toggle, setToggle] = useState("");
    const location = useLocation();
    const handleClick = (value) => {
      setToggle(value);
    };
    return (
      <div
        className={
          toggle
            ? "sb-nav-fixed bg-light sb-sidenav-toggled"
            : "sb-nav-fixed bg-light"
        }
      >
        {/* <AppHeader handleClick={handleClick} /> */}
        {/* <LandingPage> */}
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <nav
              className="sb-sidenav accordion sb-sidenav-dark"
              id="sidenavAccordion"
            >
              <div className="sb-sidenav-menu" id="sb-sidenav-menu">
                <div className="nav mt-4">
                  {Tabs.map(({ label, link }) => {
                    // console.log("naga sai fasdkjfaskjfkjasbfkasd");
                    const isActive = location.pathname.split("/")[1] === link;
                    return (
                      <a
                        className={`nav-link ${isActive ? "active" : ""}`}
                        key={link}
                        onClick={() => navigate(`/${link}`)}
                      >
                        {label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </nav>
          </div>
          
          <div id="layoutSidenav_content">
            <div className="container-fluid">
              <Outlet />
            </div>
          </div>
        </div>
        {/* </LandingPage> */}
      </div>
    );
  }
  