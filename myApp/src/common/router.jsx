import React,{Component} from 'react'
import { Router, Route,IndexRoute,Redirect, hashHistory,browserHistory,IndexRedirect} from 'react-router'
import Main from '../components/main'
import Hello from '../components/hello'
import Test from '../components/test'


const RouterConfig=(
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRedirect to="/hello"/>
            <Route path='/hello' component={Hello}></Route>
            <Route path='/test' component={Test}></Route>
        </Route>
    </Router>
);



export default RouterConfig;
