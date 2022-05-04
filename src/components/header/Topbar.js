import React,{useState} from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { mobile } from "../../svg/mobile";
import { multilingual } from "../../svg/multilingual";
import { user } from "../../svg/user";
import LoginModal from "../../components/LoginModal"


function Topbar() {
  const[showLoginModal,setShowLoginModal] = useState(false)
  return (
    <>
    <div id="top_header" style={{marginTop:"-40px"}}>
      <Container>
        <Row>
          <Col md={5}>
            <ul className="d-flex justify-content-between header-ul pt-1">
              <li>
                <span className="fw-500">Current Time :</span> 12:30 PM
              </li>
              <li>
                {mobile} <span className="fw-500">Contact Us :</span>{" "}
                985-236-854-558
              </li>
            </ul>
          </Col>
          <Col md={7}>
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
                  <select name="langs" id="langs" className="ml-1">
                    <option value="english">English</option>
                    <option value="spanish">Spanish</option>
                  </select>
                </div>
              </li>
              <li>
                <div className="multilingual d-flex pt-1">
                  <span className="fw-500">City:</span>
                  <select name="city" id="city" className="ml-1">
                    <option value="france">France</option>
                    <option value="spain">Spain</option>
                  </select>
                </div>
              </li>
              <li>
                <div className="d-flex pt-1">
                  <a onClick = {()=>{setShowLoginModal(true)}}>
                  {user} <span className="ml-1">Login/Signup</span>
                  </a>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>

    {showLoginModal && (
        <LoginModal
          show={showLoginModal}
          handleClose = {() => setShowLoginModal(false)}
        />
      )}
    </>
  )
}

export default Topbar
