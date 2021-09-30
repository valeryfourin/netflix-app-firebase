import React from 'react';
import { Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { selectUser } from '../app/UserSlice';
import NavBar from '../components/NavBar';
import { authUser } from '../firebase';

import '../styles/ProfileScreen.css';

export default function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profile-screen">
      <NavBar />
      <div className="profile-screen__body">
        <h1>Edit Profile</h1>
        <div className="profile-screen__info">
          <Image
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt="user image"
          />
          <div className="profile-screen__details">
            <h2>{user.email}</h2>
            <div className="profile-screen__plans">
              <h3>Plans</h3>
              <div className="profile-screen__plan">
                <div className="profile-screen__plan-text">
                  <p>Netflix Premium</p>
                  <p>4k+HDR</p>
                </div>
                <button
                  onClick={() => authUser.signOut()}
                  type="button"
                  className="profile-screen__button"
                  disabled
                >
                  Current Package
                </button>
              </div>
              <button
                onClick={() => authUser.signOut()}
                type="button"
                className="profile-screen__button"
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
