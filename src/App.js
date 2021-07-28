// import { gql, useQuery } from '@apollo/client';
import { useMutation, gql } from '@apollo/client';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Routes from './config/Routes';
import User from './models/User';
import setAuthHeader from './util/setAuthHeader';

require('./App.scss');

// TODO : Redirect on log in and sign up
// TODO : Create profile page
// TODO : View others profiles and their stories
// TODO : Display all saved stories
// TODO : Save stories to DB

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setisLoggedIn(true);
    } else {
      setisLoggedIn(false);
    }
  }, []);

  const [login, { data: loginData }] = useMutation(User.loginMutation);

  const [signup, { data: signupData }] = useMutation(User.signupMutation);

  // Logout
  const logout = () => {
    setAuthHeader();
    localStorage.removeItem('token');
    setisLoggedIn(false);
  };

  // Set Token on Login
  useEffect(() => {
    if (loginData) {
      if (loginData.login.token) {
        setAuthHeader(loginData.login.token);
        setisLoggedIn(true);
        localStorage.setItem('token', loginData.login.token);
      }
    }
  }, [loginData]);

  useEffect(() => {
    if (signupData) {
      console.log(signupData);
    }
  }, [signupData]);

  return (
    <div className="app">
      <Header isLoggedIn={isLoggedIn} logout={logout} />
      <Routes login={login} signup={signup} />
    </div>
  );
}

export default App;
