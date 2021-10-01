/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { login, logout, selectUser } from './app/UserSlice';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import MylistScreen from './screens/MylistScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';
import { authUser } from './firebase';

import './App.css';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = authUser.onAuthStateChanged((userInfo) => {
      if (userInfo) {
        // logged in
        console.log(userInfo);
        dispatch(
          login({
            uid: userInfo.uid,
            email: userInfo.email,
          }),
        );
      } else {
        // logged out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/profile">
              <ProfileScreen />
            </Route>
            <Route exact path="/search">
              <SearchScreen />
            </Route>
            <Route exact path="/my-list">
              <MylistScreen />
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
