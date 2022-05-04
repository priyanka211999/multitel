import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import InputField from "../atoms/InputField";

function Login() {
    const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const disable = !username || !password;

  const navigate = useNavigate()

  return (
    <div id="login">
     
      <div className="container">
        <div
          id="login-row"
          className="row justify-content-center align-items-center"
        >
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
              <form id="login-form" className="form" action="" method="post">
                <h3 className="text-center text-info">Admin Login</h3>
                <InputField
                    id="username"
                    type="text"
                    label="Username"
                    mendetory
                    value={{ username }}
                    handleChange={(e) => setUsername(e.target.value)}
                />
                <InputField
                    id="password"
                    type="password"
                    label="Password"
                    mendetory
                    value={{ password }}
                    handleChange={(e) => setPassword(e.target.value)}
                />

                <div className="form-group">
                  {/* <label for="remember-me" className="text-info">
                    <span>Remember me</span> 
                    <span>
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                      />
                    </span>
                  </label> */}
                  <InputField type="checkbox" label="Remember me" />
                  {/* <input
                    type="submit"
                    name="submit"
                    className="btn btn-info btn-md"
                    value="submit"
                  /> */}
                  <Button
                    variant="primary"
                    disabled={disable}
                    className="primary_bg"
                    onClick={() => console.log(username, password)}
                >
                    Login
                </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
