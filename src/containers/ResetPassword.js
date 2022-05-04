import React, { useState,useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import InputField from "../components/atoms/InputField";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import { useLocation, useNavigate } from "react-router-dom";
import LoginModal from "../components/LoginModal";
import { isValidEmail } from "../utils/validators";
import { showAlert } from "../utils/showAlert";
import {resetPassword} from "../services/authentication"
import {FormModel} from "../Model/FormModel"
import {useSelector} from "react-redux"



function ResetPassword() {

  const [btnLoading, setBtnLoading] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const { state } = useLocation();
  const { email,otp } = state;
  const navigate = useNavigate();
  const formName = "resetForm"


  


  useEffect(() => {
    new FormModel(formName)._createForm({
      password: "",
      confirmPassword: "",
    });
  }, []);

  const formInput = useSelector((state) => state.forms[formName]) || {};

  const commonProps = {
    value: formInput,
    formName,
  };

  const { password, confirmPassword, } = formInput;
  const buttonEnabled = password && confirmPassword;


  const reset = async () => {
    setConfirmPasswordError("");
    if (password !== confirmPassword) {
      new FormModel(formName)._updateValidation({
        confirmPassword: "Password is not matching",
      });
      return;
    }
    console.log(password)
    try {
      setBtnLoading(true);
      await resetPassword({email,otp,password});
      // history.push("/auth/login");
      navigate("/home")
      showAlert("password Changed Sucessfully.", "success");
      alert("password Changed Sucessfully.", "success");
    } catch (error) {
      showAlert(error.data.message, "error");
      alert(error.data.message, "error");
    } finally {
      setBtnLoading(false);
    }
  };

  return (
    <LandingPage woproducts>
      <ServiceBanner title="Reset Password" regnPage/>
      <section className="regn_form pos-relative">
        <div className="client_regn">
          <h3 className="modal_heading mb-4">
            <span className="primary-color">Hello,</span> Please create a new password.
          </h3>

          <Form>
            <InputField
              id="password"
              type="password"
              label="New Password"
              mendetory
             {...commonProps}
            />
            <InputField
              id="confirmPassword"
              type="password"
              label="Confirm Password"
              mendetory
              {...commonProps}
            />
             {confirmPasswordError && <p className="errorText">{confirmPasswordError}</p>}
            <Button
              disabled={btnLoading || !buttonEnabled}
              className="primary_bg"
              onClick={reset}
            >
            {btnLoading ? "Resetting...." : "Reset Password"}
          </Button>
          </Form>
        </div>
        <img className="dots_regn1" src="/assets/images/dots.png" />
        <img className="dots_regn2" src="/assets/images/dots.png" />
      </section>
    </LandingPage>
  );
}

export default ResetPassword;
