import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './components/app/App';
import SignIn from './components/signin/SignIn';
import Dashboard from './components/dashboard/Dashboard';
import reportWebVitals from './reportWebVitals';

const routes = (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/">
                    <App />
                </Route>
                <Route exact path="/signin">
                    <SignIn />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
