import React from "react";
import { Link } from "react-router-dom";
import "./SignUpForm.css";

export const SignUpForm = () => {
  return (
    <div className="wrapper-signup">
      <form>
        <h1>Sign Up</h1>
        <h3>Please fill in this form to create an account</h3>
        <div className="input-box">
          <input type="text" placeholder="First Name" required />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Last Name" required />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
        </div>
        <div className="input-box">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
        </div> 
        <div className="input-box">
          <input type="password" placeholder="Confirm Password" required />
        </div> 
        
        <div className="register-button">
          <button type="submit">Register</button>
        </div>
        
        <div className="login-link">
          <p>Already have an account? <Link to="/">Login</Link></p>
        </div>
      </form>
    </div>
  );
};
