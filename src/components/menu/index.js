import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/icons/logo.svg'
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg'
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg'
import { ReactComponent as Palette } from '../../assets/icons/palette.svg'

import List from './list'
import {Container, ButtonList} from './styled'

import AppearanceDialog from './dialog/appearance'
import SettingsDialog from './dialog/settings'

const Menu = () => {
    const [show, setShow] = useState(false)
    const [openAppearanceDialog, setOpenAppearanceDialog] = useState(false)
    const [openSettingsDialog, setOpenSettingsDialog] = useState(false)

    return <>
        <Container show={show}>
            <Link key='home' to='/'>
                <Logo />
            </Link>

            <List show={show} handleShow={bool => setShow(bool)}/>
            
            <ButtonList show={show}>
                <button onClick={() => (setOpenAppearanceDialog(true), setShow(false))}>
                    <Palette />
                </button>
                {/* <button onClick={() => (setOpenSettingsDialog(true), setShow(false))}>
                    <SettingsIcon />
                </button> */}
            </ButtonList>
            
            <button onClick={() => setShow(prev => !prev)}>
                <MenuIcon />
            </button>
        </Container>

        <AppearanceDialog show={openAppearanceDialog} setShow={setOpenAppearanceDialog}/>
        <SettingsDialog show={openSettingsDialog} setShow={setOpenSettingsDialog}/>
    </>
}

export default Menu