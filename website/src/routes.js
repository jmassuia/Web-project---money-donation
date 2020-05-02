import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* Paginas da aplicação*/
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration'

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/newONG" component={Registration}/> 
            </Switch>
        </BrowserRouter>
    );
}