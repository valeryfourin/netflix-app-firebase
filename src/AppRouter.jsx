/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { login, logout, selectUser } from './app/UserSlice';
import LoginScreen from './screens/LoginScreen';
import { authUser } from './firebase';
import { authRoutes } from './routes';

import './App.css';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = authUser.onAuthStateChanged((userInfo) => {
      if (userInfo) {
        // logged in
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
    <>
      {!user ? (
        <LoginScreen />
      ) : (
        <Switch>
          {authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} component={Component} exact />
          ))}
        </Switch>
      )}
    </>
  );
}

export default App;
