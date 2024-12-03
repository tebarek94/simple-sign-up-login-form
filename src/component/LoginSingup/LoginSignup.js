import React, { useState } from "react";
import "./LoginSignup.css";
import user_icon from "../Asest/user.png";
import email_icon from "../Asest/email.png";
import password_icon from "../Asest/password.png";

function LoginSignup() {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text"> {action}</div>
        <div className="underline"> </div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" width={20} />
            <input type="text" placeholder="Username" required />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" width={20} />
          <input type="email" placeholder="Email" required />
        </div>
        <div className="input">
          <img src={password_icon} alt="" width={20} />
          <input type="password" placeholder="Password" required />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Lost password? <span>Click here</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
