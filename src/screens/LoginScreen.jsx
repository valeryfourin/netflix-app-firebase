import React, { useState } from 'react';

import SigninScreen from './SigninScreen';

import '../styles/LoginScreen.css';

export default function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="login-screen">
      <div className="login-screen__background">
        <img
          className="login-screen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="login screen background"
        />
        <button
          onClick={() => setSignIn(true)}
          className="login-screen__button"
          type="button"
        >
          Sign in
        </button>

        <div className="login-screen__gradient" />
      </div>
      <div className="login-screen__body">
        {signIn ? (
          <SigninScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more</h1>
            <h2>Watch anywhere</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="login-screen__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  type="button"
                  className="login-screen__getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
