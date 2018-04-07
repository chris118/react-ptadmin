import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import authHOC from '../components/authHOC'

export const routers = (
    <Switch>
        <Route exact path='/' component={authHOC(Home)}/>
        <Route path='/home' component={authHOC(Home)}/>
        <Route path='/login' component={Login}/>
    </Switch>
);