import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* Paginas da aplicação*/
import Home from './pages/Home';
import Login from './pages/Login';

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/login" component={Login}/> 
            </Switch>
        </BrowserRouter>
    );
}