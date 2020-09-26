import React from 'react'
import {useTranslation} from 'react-i18next'

// Components
import {Dialog} from '../../../components/dialog'

// Theme
import {Theme} from '../../../assets/theme'

export default (props) => {
    const {show, setShow} = props

    return <Dialog isOpen={show} handleClose={bool => setShow(bool)}>
        <p>Configurações</p>
    </Dialog>
}