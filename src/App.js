import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import Products from './Products'
import Sale from './Sale'
import Nav from './Nav'
import Home from './Home'
import CreateProduct from './CreateProduct'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'

export default class App extends React.Component {
    render() {
        return (
            <div id='main'>
                <h1>Acme Products/Sales</h1>
                <Route render={({ location, history }) => <Nav location={location} />} />
                <hr />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/products' component={Products} />
                    <Route exact path='/sale' component={Sale} />
                    <Route exact path='/create' component={CreateProduct} />
                </Switch>
            </div>
        )
    }
}