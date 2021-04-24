import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';

import Loader from 'components/Loader/loader';

const Login = lazy(() => import('screens/Login/login'));
const Register = lazy(() => import('screens/Register/register'));
const Home = lazy(() => import('screens/Home/home'));
const Profile = lazy(() => import('screens/Profile/profile'));

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <PrivateRoute exact path='/home' component={Home} />
          <PrivateRoute exact path='/profile' component={Profile} />
          <PublicRoute exact path='/login' component={Login} />
          <PublicRoute exact path='/register' component={Register} />
          <Redirect to='/login' />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
