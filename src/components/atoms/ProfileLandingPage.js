import React, { useState } from "react";
import { Button, Col, Container, Row, Card, CardGroup } from "react-bootstrap";
import { getUserDetailsByToken } from "../../services/authentication";
import { baseurl } from "../../utils/request";
import EditProfileForm from "./EditProfileForm";
// import CardDeck from 'react-bootstrap/CardDeck'

function ProfileLandingPage({edit}) {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [userImg, setUserImg] = useState("")
  const [userPhone, setUserPhone] = useState("");
  
  const getDataByToken = async () => {
    const result = await getUserDetailsByToken();
    // console.log(result);
    setUsername(result?.data?.data?.first_name);
    setFullname(
      result?.data?.data?.first_name + " " + result?.data?.data?.last_name
    )
    result?.data?.data?.profile_img && setUserImg(result?.data?.data?.profile_img)
    setUserPhone(result?.data?.data?.phone)
  };

  React.useEffect(() => {
    getDataByToken();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Card>
          
              <Card.Body>
              <Row>
                <Col md={4}>
                  <Card.Title style={{ fontSize: "18px" }}>
                    Hi {username}, Welcome Back
                  </Card.Title>
                </Col>
                <Col md={4}>
                  <div className="userimg text-center pos-relative">
                    <img src={
                      userImg ? `${baseurl}/images/${userImg}` : "/assets/images/default_user.png"
                    } 
                      style={{maxWidth: "100%",borderRadius:"50%"}}
                    />
                    <img className="editimg" src="/assets/images/edit.png"
                      onClick={() => {
                        edit(true)
                      }}
                    />
                    <p className="fw-500">{fullname}</p>
                  </div>
                </Col>
                <Col
                  md={4}
                  style={{ display: "inline-block", justifyContent: "end" }}
                >
                  <Button
                    size="md"
                    style={{
                      backgroundColor: "#0076B5",
                      background: "#0076B5",
                      fontSize: "12px",
                    }}
                  >
                    <i className="fa-solid fa-download mr-1"></i> Download
                    Multitel Mobile App
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Card className="shadow p-2 mb-5 bg-white rounded profile_cards">
                    <Card.Body
                      style={{ textAlign: "center", padding: "10px" }}
                      className="profile_crad"
                    >
                      <div className="d-flex justify-content-between">
                        <Card.Text
                          style={{
                            display: "inline-block",
                            fontWeight: "bold",
                            fontSize: "14px",
                          }}
                        >
                          Bills & Payments
                        </Card.Text>
                        <Card.Link href="#" style={{ fontSize: "14px" }}>
                          <u>View</u>
                        </Card.Link>
                      </div>

                      <Card.Text>No Bills are pending</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="shadow p-2 mb-5 bg-white rounded profile_cards">
                    <Card.Body
                      style={{ textAlign: "center", padding: "10px" }}
                      className="profile_crad"
                    >
                      <div className="d-flex justify-content-between">
                        <Card.Text
                          style={{
                            display: "inline-block",
                            fontWeight: "bold",
                            fontSize: "14px",
                          }}
                        >
                          Balance & Recharge
                        </Card.Text>
                        <Card.Link href="#" style={{ fontSize: "14px" }}>
                          <u>View</u>
                        </Card.Link>
                      </div>
                      <Card.Text>
                        <p style={{ color: "#0076B5" }}>
                          $20.00 Balance in your
                        </p>
                        <h5>Mobile</h5>
                      </Card.Text>
                      <Button
                        style={{
                          backgroundColor: "#0076B5",
                          background: "#0076B5",
                        }}
                      >
                        Process To Pay
                      </Button>{" "}
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="shadow p-3 mb-5 bg-white rounded profile_cards">
                    <Card.Body style={{ textAlign: "center", padding: "10px" }}>
                      <div className="d-flex justify-content-between">
                        <Card.Text
                          style={{
                            display: "inline-block",
                            fontWeight: "bold",
                            fontSize: "14px",
                          }}
                        >
                          {fullname}
                        </Card.Text>
                        <Card.Link href="#" style={{ fontSize: "14px" }}>
                          <u>View</u>
                        </Card.Link>
                      </div>
                      <Card.Text>
                        <p>
                          <i className="fa-solid fa-mobile-screen-button"></i>{" "}
                          {userPhone}
                        </p>
                        <p style={{ color: "#0076B5" }}>
                          $20.00 Balance in your
                        </p>
                        <h5>Mobile</h5>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="shadow p-3 mb-5 bg-white rounded profile_cards">
                    <Card.Body style={{ textAlign: "center", padding: "10px" }}>
                      <div className="d-flex justify-content-between">
                        <Card.Text
                          style={{
                            display: "inline-block",
                            fontWeight: "bold",
                            fontSize: "14px",
                          }}
                        >
                          Broadband
                        </Card.Text>
                        <Card.Link href="#" style={{ fontSize: "14px" }}>
                          <u>View</u>
                        </Card.Link>
                      </div>
                      <p>
                        <i className="fa-solid fa-globe mr-1"></i> {userPhone}
                      </p>
                      <Card.Text>
                        <p style={{ color: "#0076B5" }}>Available For</p>
                        <h5>25 Days</h5>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
           
            
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfileLandingPage;
