import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';

export default () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    {/* <Route path="/login" render={()=> <LoginPage setToken={setToken}/>} />
        <Route path="/register" component={RegisterPage} /> */}
  </Switch>
);
