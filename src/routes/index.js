import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Menu from '../components/menu'

// Pages
import NotFound from '../pages/notFound'
import Home from '../pages/home'
import Hype from '../pages/hype'


const Routes = () => {
    const pathname = window.location.pathname
    const menuPath = ['/', 'home']
    
    const isMenuPath = () => {
        return menuPath.filter(v => v === pathname || `/${v}` === pathname)[0]
    }
    
    return <BrowserRouter>
        {isMenuPath() && <Menu/>}
        <Switch>
            <Route exact path='/' component={() => <Home/>}/>
            <Route exact path='/hype' component={() => <Hype/>}/>
            <Route path='*' component={() => <NotFound/>}/>
        </Switch>
    </BrowserRouter>
}

export default Routes