import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import LogInPage from '../pages/LogInPage/LogInPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';

const routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/login" component={LogInPage} />
    <Route exact path="/signup" component={SignUpPage} />
    {/* <Route path="/login" render={()=> <LoginPage setToken={setToken}/>} />
          <Route path="/register" component={RegisterPage} /> */}
  </Switch>
);

export default routes;
