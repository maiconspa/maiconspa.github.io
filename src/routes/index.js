import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Menu from '../components/menu'

// Pages
import Main from '../pages'


const Routes = () => <BrowserRouter>
    <Menu/>
    <Switch>
        <Route path='*' component={() => <Main/>}/>
    </Switch>
</BrowserRouter>

export default Routes