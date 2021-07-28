import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import LogInPage from '../pages/LogInPage/LogInPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';

const routes = ({ login, signup }) => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route
      exact
      path="/login"
      render={(matchProps) => <LogInPage {...matchProps} login={login} />}
    />
    <Route
      exact
      path="/signup"
      render={(matchProps) => <SignUpPage {...matchProps} signup={signup} />}
    />
    <Route
      exact
      path="/profile/:username"
      render={(matchProps) => <ProfilePage {...matchProps} />}
    />
  </Switch>
);

export default routes;
