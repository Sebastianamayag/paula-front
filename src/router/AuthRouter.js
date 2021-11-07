import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ChangePassword } from '../views/ChangePassword';
import { Login } from '../views/Login';


export const AuthRouter = () => {
    return (
        <>
            <Switch>
                <Route exact path="/auth/login" component={Login} />
                <Route exact path="/auth/change/password" component={ChangePassword} />
                <Redirect to="/auth/login" />
            </Switch>
        </>
    )
}
