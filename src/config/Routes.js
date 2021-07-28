import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import LogInPage from '../pages/LogInPage/LogInPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';

const routes = ({ login, signup }) => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/login" render={() => <LogInPage login={login} />} />
    <Route exact path="/signup" render={() => <SignUpPage signup={signup} />} />
    {/* <Route path="/login" render={()=> <LoginPage setToken={setToken}/>} />
          <Route path="/register" component={RegisterPage} /> */}
  </Switch>
);

export default routes;
