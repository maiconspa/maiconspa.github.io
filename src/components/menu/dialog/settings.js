import React from 'react'
// import { connect } from 'react-redux'
// import {setLanguage} from 'redux-i18n'

// Components
import {Dialog} from '../../../components/dialog'

const SettingsDialog = (props) => {
    const {show, setShow} = props

    return <Dialog isOpen={show} handleClose={bool => setShow(bool)}>
        <p>Ops, você chegou cedo demais, esta área ainda não está pronta 😯</p>
        
        {/* <button onClick={() => setLanguage('pt')}>pt</button>
        <button onClick={() => setLanguage('en')}>en</button>
        <button onClick={() => setLanguage('es')}>es</button> */}
    </Dialog>
}

export default SettingsDialog