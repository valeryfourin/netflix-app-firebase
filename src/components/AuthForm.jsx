/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable react-perf/jsx-no-new-function-as-prop */
/* eslint-disable no-console */ /* eslint-disable prettier/prettier */
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';

import { authUser } from '../firebase';

import '../styles/AuthForm.css';

export default function AuthForm({ redirectToRegComponent }) {
  const emailReference = useRef(null);
  const passwordReference = useRef(null);
  const [isRegComponent, setIsRegComponent] = useState(redirectToRegComponent);

  const register = (event) => {
    event.preventDefault();
    authUser
      .createUserWithEmailAndPassword(
        emailReference.current.value,
        passwordReference.current.value,
      )
      .then((authInfo) => {
        console.log(authInfo);
        return authInfo;
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (event) => {
    event.preventDefault();

    authUser
      .signInWithEmailAndPassword(
        emailReference.current.value,
        passwordReference.current.value,
      )
      .then((authInfo) => {
        console.log(authInfo);
        return authInfo;
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const auth = (event) => {
    if (isRegComponent) {
      register(event);
    } else {
      signIn(event);
    }
  }

  return (
    <div className="signin-screen">
      <form>
        <h1>{isRegComponent ? "Registration" : "Sign In"}</h1>
        <input ref={emailReference} placeholder="Email" type="email" />
        <input ref={passwordReference} placeholder="Password" type="password" />
        <button type="submit" onClick={auth}>
          {isRegComponent ? "Sign Up" : "Sign In"}
        </button>

        <h4>
          {isRegComponent ? (
            <>
              <span className="signin-screen_gray">Already have an account? </span>
              <span
                className="signin-screen__link"
                onClick={() => setIsRegComponent(false)}
              >
                Sign In.
              </span> 
            </>
            ) : (
              <>
                <span className="signin-screen_gray">New to Netflix? </span>
                <span
                  className="signin-screen__link"
                  onClick={() => setIsRegComponent(true)}
                >
                  Sign Up now.
                </span> 
              </>
            )}
        </h4>
      </form>
    </div>
  );
}

AuthForm.propTypes = {
  redirectToRegComponent: PropTypes.bool.isRequired,
};
