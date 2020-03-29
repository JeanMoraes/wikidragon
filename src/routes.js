import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './components/Login/';
import Home from './components/Home/';
import AddDragon from './components/AddDragon';
import SingleDragon from './components/SingleDragon';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/home" component={ Home } />
            <Route exact path="/add-dragon" component={ AddDragon } />
            <Route exact path="/dragon/:id" component={ SingleDragon } />
        </Switch>
    </BrowserRouter>
);

export default Routes;