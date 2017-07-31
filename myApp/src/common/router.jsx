import React,{Component} from 'react'
import { Router, Route,IndexRoute,Redirect, hashHistory,browserHistory,IndexRedirect} from 'react-router'
import Main from '../components/main'
import Index from '../components/index'
import Order from '../components/order'
import Mine from '../components/mine'


const RouterConfig=(
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRedirect to="/index"/>
            <Route path='/index' component={Index}></Route>
            <Route path='/order' component={Order}></Route>
            <Route path='/mine' component={Mine}></Route>
        </Route>
    </Router>
);

export default RouterConfig;
