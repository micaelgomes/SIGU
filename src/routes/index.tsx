import React from 'react';
import { Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SingIn';
import SignUp from '../pages/SingUp';
import Route from './Route';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/singup" exact component={SignUp} />
      <Route path="/dashboard" isPrivate component={Dashboard} />
    </Switch>
  );
};

export default Routes;
