import { useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Routes from './config/Routes';
import User from './models/User';
import setAuthHeader from './util/setAuthHeader';
import { setToken } from './util/loggedIn';
require('./App.scss');

// TODO : Redirect on log in and sign up
// TODO : Create profile page
// TODO : View others profiles and their stories
// TODO : Display all saved stories
// TODO : Save stories to DB

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [user, setUser] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setisLoggedIn(true);
      setToken(setUser, localStorage.getItem('token'));
    } else {
      setisLoggedIn(false);
      setUser('');
    }
  }, []);

  const [login, { data: loginData }] = useMutation(User.loginMutation);

  const [signup, { data: signupData }] = useMutation(User.signupMutation);

  // Logout
  const logout = () => {
    setAuthHeader();
    localStorage.removeItem('token');
    setisLoggedIn(false);
    setUser('');
  };

  // Set Token on Login
  useEffect(() => {
    if (loginData) {
      if (loginData.login.token) {
        setAuthHeader(loginData.login.token);
        setisLoggedIn(true);
        setToken(setUser, loginData.login.token);
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
      <Header isLoggedIn={isLoggedIn} user={user} logout={logout} />
      <Routes login={login} signup={signup} user={user} />
    </div>
  );
}

export default App;
