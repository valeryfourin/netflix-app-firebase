/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable react-perf/jsx-no-new-function-as-prop */
/* eslint-disable no-console */ /* eslint-disable prettier/prettier */
import React, { useRef } from 'react';

import { authUser } from '../firebase';

import '../styles/SigninScreen.css';

export default function SigninScreen() {
  const emailReference = useRef(null);
  const passwordReference = useRef(null);

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

  return (
    <div className="signin-screen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailReference} placeholder="Email" type="email" />
        <input ref={passwordReference} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className="signin-screen_gray">New to Netflix? </span>
          <span
            className="signin-screen__link"
            onClick={register}
          >
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}
