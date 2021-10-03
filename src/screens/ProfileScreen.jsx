import React, { useEffect } from 'react';
import { Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { selectUser } from '../app/UserSlice';
import NavBar from '../components/NavBar';
import { authUser } from '../firebase';
import { SIGNIN_ROUTE } from '../utils/consts';

import '../styles/Screen.css';

const logOut = () => {
  authUser.signOut();
};

export default function ProfileScreen() {
  const user = useSelector(selectUser);
  const history = useHistory();
  useEffect(() => {
    if (!user) {
      alert("You don't have access to this page");
      history.push(SIGNIN_ROUTE);
    }
  }, []);
  return (
    <div className="screen">
      <NavBar />
      <div className="screen__body">
        <h1>Edit Profile</h1>
        <div className="screen__info">
          <Image
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt="user image"
          />
          <div className="screen__details">
            <h2>{user.email}</h2>
            <div className="screen__plans">
              <h3>Plans</h3>
              <div className="screen__plan">
                <div className="screen__plan-text">
                  <p>Netflix Premium</p>
                  <p>4k+HDR</p>
                </div>
                <button
                  type="button"
                  className="action-button screen__button"
                  disabled
                >
                  Current Package
                </button>
              </div>
              <button
                onClick={logOut}
                type="button"
                className="action-button screen__button"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
