import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { mobile } from "../svg/mobile";
import { multilingual } from "../svg/multilingual";
import { user } from "../svg/user";
import { DateTime } from "./DateTime";
import GoogleTranslate from "./google";
import { useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";
import { AUTH_TOKEN, deleteCookie, getCookie } from "../utils/cookie";
import { getUserDetailsByToken } from "../services/authentication";
import { Dropdown } from "react-bootstrap";

function Header() {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [username, setUsername] = useState("");
  const isAuthenticated = getCookie(AUTH_TOKEN);
  // console.log(isAuthenticated);

  const getDataByToken = async () => {
    if (isAuthenticated) {
      const result = await getUserDetailsByToken();
      // console.log(result);
      setUsername(result?.data?.data?.first_name);
    }
  };

  React.useEffect(() => {
    getDataByToken();
  }, []);

  return (
    <div id="Header">
      <div id="top_header">
        <Container>
          <Row>
            <Col lg={5}>
              <ul className="d-flex justify-content-between header-ul pt-1 ml-2">
                <li>
                  <DateTime />
                </li>
                <li>
                  {mobile} <span className="fw-500">Contact Us :</span>{" "}
                  985-236-854-558
                </li>
              </ul>
            </Col>
            <Col lg={7}>
              <ul className="d-flex justify-content-between header-right-ul">
                <li>
                  <div className="searchtop">
                    <div className="input-group">
                      <input
                        type="search"
                        className="form-control"
                        placeholder="Search Here..."
                        name="search"
                        id="search"
                      />
                      <button type="submit" className="input-group-text">
                        <i className="fa-solid fa-magnifying-glass white-color"></i>
                      </button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="multilingual d-flex">
                    {multilingual}
                    <div style={{ paddingLeft: "5px" }}>
                      <GoogleTranslate />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="multilingual d-flex pt-1 ml-3">
                    <span className="fw-500">City:</span>
                    <select name="city" id="city" className="ml-1">
                      <option value="france">France</option>
                      <option value="spain">Spain</option>
                    </select>
                  </div>
                </li>
                <li>
                  {!isAuthenticated ? (
                    <div
                      className="d-flex pt-1 ml-3"
                      onClick={() => setShowLoginModal(true)}
                    >
                      {user} <span className="ml-1">Login/Signup</span>
                    </div>
                  ) : (
                    <Dropdown style={{ position: "relative", top: "-5px" }}>
                      <Dropdown.Toggle
                        id="dropdown-basic"
                        style={{ background: "transparent", border: "none" }}
                      >
                        <img
                          className="usericon"
                          src="/assets/images/user.png"
                        />
                        <span className="username">Hey&nbsp;{username}</span>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => navigate("/profile")}>
                          Profile
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            deleteCookie(AUTH_TOKEN);
                            alert("Logged out.");
                            navigate("/home");
                            // window.location.reload();
                          }}
                        >
                          Logout
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  )}
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      <Navbar expand="lg" variant="light" bg="white">
        <Container>
          <Navbar.Brand
            onClick={() => navigate("/")}
            // href="/"
            style={{ cursor: "pointer" }}
          >
            <img
              src="/assets/images/logo.png"
              className="d-inline-block align-top"
              alt="Multitel logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link onClick={() => navigate("/home")}>
                Multitel Home
              </Nav.Link>
              <Nav.Link href="#link">Multitel Mobile</Nav.Link>
              <Nav.Link onClick={() => navigate("/marketplace")}>
                Marketplace
              </Nav.Link>
              {/* <button onClick={console.log(()=>getCookie(AUTH_TOKEN))}>GEt</button> */}
              <Nav.Link href="#link">Client Portal</Nav.Link>
              <NavDropdown
                title="Contacts"
                id="basic-nav-dropdown"
                // onClick={() => navigate("/home")}
              >
                <NavDropdown.Item
                  onClick={() =>
                    navigate("/contacts/informatics-and-accessories", {
                      state: { title: "Informatics and Accessories", slug: "Informatics & Accessories" },
                    })
                  }
                >
                  Informatics and Accessories
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() =>
                    navigate("/contacts/ip-telephony", {
                      state: { title: "IP Telephony", slug: "Ip Telephony" },
                    })
                  }
                >
                  IP Telephony
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() =>
                    navigate("/contacts/networking-equipment", {
                      state: { title: "Networking Equipment", slug: "Network Equipment" },
                    })
                  }
                >
                  Networking Equipment
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() =>
                    navigate("/contacts/cpe", { state: { title: "CPE´s", slug: "Cpe" } })
                  }
                >
                  CPE´s
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() =>
                    navigate("/contacts/telecom", {
                      state: { title: "Telecom", slug: "Telecom" },
                    })
                  }
                >
                  Telecom
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() =>
                    navigate("/contacts/promotions", {
                      state: { title: "Promotions", slug: "Promotions" },
                    })
                  }
                >
                  Promotions
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() =>
                    navigate("/contacts/other-products-services-partners", {
                      state: { title: " Other Products/Services (Partners)", slug: "otherproducts" },
                    })
                  }
                >
                  Other Products/Services (Partners)
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showLoginModal && (
        <LoginModal
          show={showLoginModal}
          handleClose={() => setShowLoginModal(false)}
        />
      )}
    </div>
  );
}

export default Header;
