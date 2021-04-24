import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const isAuthenticated = () => Boolean(sessionStorage.getItem('token'));

export default function PublicRoute({ component: Component, exact, path }) {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) =>
        !isAuthenticated() ? <Component {...props} /> : <Redirect to='/home' />
      }
    />
  );
}
