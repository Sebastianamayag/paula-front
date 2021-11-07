import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { PrivateRoute } from './PrivateRoute'
import { AuthRouter } from "./AuthRouter";
import { PublicRoute } from "./PublicRoute";
import  LoggedRouter  from "./LoggedRouter";
export const Routes = () => {
  
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [session, setSession] = useState(false);
  useEffect(() => {
    const sesi = localStorage.getItem('session');
    if (sesi) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false)
    }
    setChecking(false);
    setSession(sesi);
    console.log(session);
  }, [ session,setChecking, setIsLoggedIn])


  if (checking) {
    return (
      <h1>Espere...</h1>
    )
  }
  return (
    <Router>
      <Switch>
        <PublicRoute
          path="/auth"
          component={AuthRouter}
          isAuthenticated={isLoggedIn}
        />
        <PrivateRoute
          exact
          isAuthenticated={isLoggedIn}
          path=""
          component={LoggedRouter}
        />
        <Redirect to="/auth/login" />
      </Switch>
    </Router>
  );
};
