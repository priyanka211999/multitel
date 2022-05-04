import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import InputField from "../components/atoms/InputField";
import ServiceBanner from "../components/atoms/ServiceBanner";
import LandingPage from "../components/LandingPage";
import LoginModal from "../components/LoginModal";
import { isValidEmail } from "../utils/validators";
import { useNavigate, useLocation } from "react-router-dom";
import { registerUser } from "../services/authentication";
import { showAlert } from "../utils/showAlert";
import { useSelector } from "react-redux";
import { FormModel } from "../Model/FormModel";
import { ROLE } from "../constants/authconstant";

export const regnFooter = React.createContext();

function ClientRegistration() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [checked, setChecked] = useState(false);
  const [gendar, setGendar] = useState("");
  const [btnLoading, setBbtnLoading] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const navigate = useNavigate();
  let { state } = useLocation();

  const formName = "signupForm";

  useEffect(() => {
    new FormModel(formName)._createForm({
      first_name: "",
      last_name: "",
      password: "",
      confirmPassword: "",
      email: "",
      user_name: "",
      role: "",
    });
  }, []);

  const formInput = useSelector((state) => state.forms[formName]) || {};
  // console.log('formInput',formInput)
  const commonProps = {
    value: formInput,
    formName,
  };

  const {
    first_name,
    last_name,
    password,
    confirmPassword,
    email,
    user_name,
    role,
  } = formInput;

  const buttonEnabled =
    first_name &&
    last_name &&
    user_name &&
    password &&
    email &&
    confirmPassword &&
    role;

  const signIn = async () => {
    setEmailError("");
    setConfirmPasswordError("");
    let hasError = false;
    if (!isValidEmail(email)) {
      hasError = true;
      setEmailError("Email is not valid. Please enter a valid email.");
    }

    if (password !== confirmPassword) {
      hasError = true;
      setConfirmPasswordError("Passwords not matching.");
    }

    if (hasError) return;

    // console.log(value)
    try {
      setBbtnLoading(true);
      await registerUser({
        first_name,
        last_name,
        user_name,
        gendar,
        email,
        password,
        role,
      });
      // showAlert("sign-up successfull.", "success");
      alert("Sign up successful! Please click on the verification link sent to your mail.")
      navigate("/home");
    } catch (error) {
      // showAlert("Signup Failed! Please try again.", "error");
      alert(error.data.massage)
      console.log(error.data)
    } finally {
      setBbtnLoading(false);
    }
  };

  return (
    <LandingPage woproducts>
      <ServiceBanner title="Client Registration" regnPage />
      <section className="regn_form pos-relative">
        <div className="client_regn">
          <h3 className="modal_heading mb-4">
            <span className="primary-color">Hello,</span> Please Register Below.
          </h3>

          <Form>
            <InputField id="first_name" label="First Name" mendetory {...commonProps} />
            <InputField
              id="last_name"
              label="Last Name"
              mendetory
              {...commonProps}
            />
            <InputField
              id="user_name"
              label="Username"
              mendetory
              {...commonProps}
            />
            <InputField
              id="email"
              type="email"
              label="Email Address"
              mendetory
              {...commonProps}
            />
            <InputField
              id="password"
              type="password"
              label="Password"
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

            {/* <InputField
              type="checkbox"
              label={
                <>
                  By clicking "Register", I agree to the{" "}
                  <a href="#">Terms and Condition</a> and{" "}
                  <a href="#">Privacy Policy</a>
                </>
              }
            /> */}

            <div className="row ">
              <p className="mb-1 col-sm-12">I want to:</p>
              <div
                className="col btn-group btn-group-toggle"
                data-toggle="buttons"
              >
                <label
                  className={`btn ${
                    role === ROLE.USER ? "btn-info" : "btn-light"
                  }  btn-sm mr-2`}
                >
                  <input
                    checked={role === ROLE.USER}
                    type="radio"
                    name="options"
                    id="option1"
                    onChange={() =>
                      new FormModel(formName)._update({ role: ROLE.USER })
                    }
                  />{" "}
                  USER
                </label>

                <label
                  className={`btn ${
                    role === ROLE.VENDOR ? "btn-info" : "btn-light"
                  }  btn-sm`}
                  onChange={() =>
                    new FormModel(formName)._update({ role: ROLE.VENDOR })
                  }
                >
                  <input
                    checked={role === ROLE.VENDOR}
                    type="radio"
                    name="options"
                    id="option2"
                  />{" "}
                  VENDOR
                </label>
              </div>
            </div>

            <br />

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                By clicking "Register", I agree to the{" "}
                <a href="#">Terms and Conditions</a> and{" "}
                <a href="#">Privacy Policy</a>
              </label>
            </div>

            {<p className="errorText">{confirmPasswordError}</p>}

            <div className="form-group small mb-1 mt-3">
              <div
                className="custom-control custom-checkbox d-flex align-items-center justify-content-between"
                style={{ paddingLeft: 0 }}
              >
                <Button
                  variant="primary"
                  className="primary_bg"
                  disabled={!buttonEnabled || !checked}
                  onClick={signIn}
                >
                  Register
                </Button>

                <p className="mt-3">
                  Already have an account?&nbsp;
                  <a
                    onClick={() => setShowLoginModal(true)}
                    className="text-primary fw-500"
                    style={{ textDecoration: "underline" }}
                  >
                    Login
                  </a>
                </p>
              </div>
            </div>
          </Form>
        </div>
        <img className="dots_regn1" src="/assets/images/dots.png" />
        <img className="dots_regn2" src="/assets/images/dots.png" />
      </section>
      {showLoginModal && (
        <LoginModal
          show={showLoginModal}
          handleClose={() => setShowLoginModal(false)}
        />
      )}
    </LandingPage>
  );
}

export default ClientRegistration;
