import React from 'react'
import { connect } from 'react-redux'
import { changeTheme } from '../../../actions'

// Components
import {Dialog} from '../../../components/dialog'

import {ThemeContainer} from './styled'
import Scrollbar from '../../../components/scrollbar'

// Theme
import {Theme} from '../../../assets/theme'

const AppearanceDialog = props => {
    const {show, setShow, setTheme} = props

    return <Dialog isOpen={show} handleClose={bool => setShow(bool)}>
        <p>Sim, temas!</p>
        <Scrollbar container={{width: '200px', height: '200px'}} autoHide={false}>
            {Object.keys(Theme).map(key =>
                <ThemeContainer key={key} onClick={() => setTheme(key)} currentTheme={Theme[key]}>
                    <nav />
                    <div>
                        <h1 style={{color: Theme[key].primary}}>maicon</h1>
                        <h1 style={{color: Theme[key].secondary}}>spa</h1>
                    </div>
                    <p>Um texto de teste</p>
                </ThemeContainer>
            )}
        </Scrollbar>
    </Dialog>
}

const mapDispatchToProps = dispatch => ({
    setTheme: (theme) => dispatch(changeTheme(theme))
})

export default connect(null, mapDispatchToProps)(AppearanceDialog)