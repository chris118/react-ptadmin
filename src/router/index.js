import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Home from '../pages/Layout/index';
import Login from '../pages/Login';
import Layout from '../pages/Layout';
import authHOC from '../components/AuthHOC'

export const routers = (
    <Switch>
        <Route exact path='/' component={authHOC(Layout)}/>
        <Route path='/home' component={authHOC(Home)}/>
        <Route path='/login' component={authHOC(Login)}/>
    </Switch>
);