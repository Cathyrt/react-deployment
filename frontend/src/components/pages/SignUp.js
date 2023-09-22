import React, { useState } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    // Add your email validation logic here
    // For example, you can use a regular expression to validate the email format
    if (!/^\S+@\S+\.\S+$/.test(inputEmail)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
    // Add your password validation logic here
    // For example, check if the password meets your criteria
    if (inputPassword.length < 6) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here
    // If signup is successful, set isSuccess to true
    // Otherwise, handle signup failure
    // Example: You can make an API request to a server to create a new user
    // and handle success/failure accordingly.
    // For simplicity, we'll set isSuccess to true immediately
    setIsSuccess(true);
  };

  return (
    <div className='form-modal__container'>
      <div className='form-modal__wrapper'>
        <div className='sign-up'></div>
        <div className='sign-up__container'>
          <h2>Sign Up</h2>
          {isSuccess ? (
            <div className='success-message'>
              Sign up successful! You can now <Link to='/sign-in'>Log In here.</Link>
            </div>
          ) : (
            <form className='sign-up__form' onSubmit={handleSubmit}>
              <label>Email</label> <br />
              <input
                type='text'
                placeholder='johndoe@gmail.com'
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && <div className='error-message'>{emailError}</div>}
              <br />
              <label>Password</label> <br />
              <input
                type='password'
                placeholder='password'
                value={password}
                onChange={handlePasswordChange}
              />
              {passwordError && <div className='error-message'>{passwordError}</div>}
              <br />
              <button type='submit' className='btn-sign'>
                Sign Up
              </button>
            </form>
          )}

          <div>
            <p className='have-account'>
              Have an account? <Link to='/sign-in'>Log In here </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
