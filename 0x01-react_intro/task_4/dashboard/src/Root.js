// src/Root.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';

function Root() {
    return (
        <Router basename="/alx-react/0x01-react_intro/task_4/dashboard">
            <Switch>
            <Route path="/" component={App} />
            </Switch>
        </Router>
    );
}

export default Root;
