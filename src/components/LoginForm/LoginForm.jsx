import React from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';
import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";

export const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Login</h1>
            <div className="input-box-login">
                <input type="text" placeholder='Username' required />
                <FaUser className='icon'/>
            </div>
            <div className="input-box-login">
                <input type="password" placeholder='Password' required />
                <FaLock className='icon'/>
            </div>

            <div className="remember-forgot">
                <label><input type="checkbox" />Remember Me</label>
                <a href="#">Forgot Password</a>
            </div>
            
            <button type="submit">Login</button>

            <div className="register-link">
                <p>Don't have an account? <Link to="/signup">Register</Link></p>
            </div>
        </form>
    </div>
  )
}
