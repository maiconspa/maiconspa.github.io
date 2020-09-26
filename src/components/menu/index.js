import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg'
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg'

import List from './list'
import {Container, Blurrer} from './styled'

const Menu = () => {
    const [show, setShow] = useState(false)

    return <>
        <Container>
            <Link key='home' to='/'>MAICONSPA.</Link>
            <List show={show} handleShow={bool => setShow(bool)}/>
            
            <button className='settings' onClick={() => setShow(prev => !prev)}>
                <SettingsIcon />
            </button>
            
            <button onClick={() => setShow(prev => !prev)}>
                <MenuIcon />
            </button>
        </Container>
    </>
}

export default Menu