import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

import Login from './Components/Pages/Login/index';
import Home from './Components/Pages/Home/index';
import { auntenticated } from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            auntenticated ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: '/', state: { from: props.location } }} />
                )
        }
    />
);

const Routes = () => (
    < BrowserRouter >
        <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute path="/home" component={Home} />
        </Switch>
    </BrowserRouter >
);

export default Routes;