import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import InputField from "../components/atoms/InputField";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import { verifyotp } from "../services/authentication";
import { showAlert } from "../utils/showAlert";

function VerifyEmail() {
  const [otp, setOtp] = useState("");
  const [btnLoading, setBtnLoading] = useState();
  const { state } = useLocation();
  const { email } = state;

  const navigate = useNavigate();

  const verify = async () => {

    try {
        setBtnLoading(true);
        const data = {
            email,
            otp: otp,
        };
      await verifyotp(data);
        showAlert("Email verification successfull.", "success");
        alert("Email verification successfull.", "success");
        navigate("/reset-password", { state: {email,otp} });
        console.log("dattt",email,otp)
    } catch (error) {
        console.log(error);
        showAlert(error.data.massage, "error");
    } finally {
        setBtnLoading(false);
    }
  };
  const resend = async () => {
      console.log("resend")
  }

  return (
    <LandingPage woproducts>
      <ServiceBanner title="Verify Email" regnPage />
      <section className="regn_form pos-relative">
        <div className="client_regn">
          <h3 className="modal_heading mb-4">
            <span className="primary-color">Hello,</span> Please verify your
            Email Address.
          </h3>
          <p>
            Please enter the verification code sent to&nbsp;{" "}
            <span className="primary-color">{email}</span>
          </p>

          <Form>
            <InputField
              id="otp"
              label="Verification code"
              value={{ otp }}
              handleChange={(e) => setOtp(e.target.value)}
            />
            <p>
              Didn't receive the code?&nbsp;{" "}
              <a
                className="primary-color"
                onClick={resend}
              >
                RESEND
              </a>
            </p>
            <Button
              disabled={btnLoading || !otp}
              className="primary_bg"
              onClick={verify}
            >
              {btnLoading ? "Confirming...." : "Confirm"}
            </Button>
          </Form>
        </div>
        <img className="dots_regn1" src="/assets/images/dots.png" />
        <img className="dots_regn2" src="/assets/images/dots.png" />
      </section>
    </LandingPage>
  );
}

export default VerifyEmail;
