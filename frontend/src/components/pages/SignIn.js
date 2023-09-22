import React from 'react';
import './SignIn.css';

export default function SignIn() {
  return (
    <div className='form-modal__container'>
      <div className='form-modal__wrapper'>
        <div className='sign-in'>
        </div>
        <div className='sign-in__container'>
          <h2>Sign In</h2>
          <form className='sign-in__form'>
            <label>Email</label> <br />
            <input type='text' placeholder='johndoe@gmail.com'></input><br />
            <label>Password</label> <br />
            <input type='password' placeholder='password'></input><br />
            <button type='submit' className='btn-sign'>Sign In</button>
          </form>

        </div>
      </div>
    </div>
  );
}
