import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../components/atoms/InputField";
import ServiceBanner from "../components/atoms/ServiceBanner";
import { showAlert } from "../utils/showAlert";
import LandingPage from "../components/LandingPage";
import LoginModal from "../components/LoginModal";
import { isValidEmail } from "../utils/validators";
import {forgotPassword} from "../services/authentication"


function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [btnLoading, setBtnLoading] = useState();

  const navigate = useNavigate();
  const formValue = {
    email,
    validation: { email: emailError },
  };

  const sendOTP = async () => {
    setEmailError("");
    if (!isValidEmail(email)) {
      setEmailError("Please enter valid email.");
      return;
    }
    console.log(email)
    // navigate('/verify-email', {state: {email}} )
    try {
      setBtnLoading(true);
      await forgotPassword(email);
      showAlert("Recovery link sent to your mail, Please check..", "success");
      navigate("/verify-email", { state: { email } })
    } catch (error) {
      showAlert(error.data.message, "error");
    } finally {
      setBtnLoading(false);
    }
  };

  return (
    <LandingPage woproducts>
      <ServiceBanner title="Forgot Password" regnPage/>
      <section className="regn_form pos-relative">
        <div className="client_regn">
          <h3 className="modal_heading mb-4">
            <span className="primary-color">Hello,</span> Please Enter your Email Address Below.
          </h3>
          <p>A Verification code will be sent to your specified Email id.</p>

          <Form>
            <InputField
              id="email"
              label="Email"
              type="email"
              value={formValue}
              handleChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="errorText">{emailError}</p>}
            <Button
              disabled={btnLoading || !email}
              className="primary_bg"
              onClick={sendOTP}
            >
            {btnLoading ? "Sending...." : "Send"}
          </Button>
          </Form>
        </div>
        <img className="dots_regn1" src="/assets/images/dots.png" />
        <img className="dots_regn2" src="/assets/images/dots.png" />
      </section>
    </LandingPage>
  );
}

export default ForgotPassword;
