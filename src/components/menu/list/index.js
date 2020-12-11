import React from 'react'
import {connect} from 'react-redux'
import {HashLink as Link} from 'react-router-dom'

import {Container, Item} from './styled'

const List = props => {
    const { handleShow } = props
    const pathname = window.location.pathname
   
    function getAvailableMenus() {
        return [
            { title: 'Sobre', route: '#start' },
            // { title: 'Projetos', route: '/' },
            // { title: 'Tecnologias', route: '/' },
            { title: 'Contato', route: '#contact' }
        ];
    }

    function getMenuItem() {
        return getAvailableMenus().map(m => <a key={m.title} href={m.route} onClick={() => handleShow(false)}>
                <Item className={pathname === m.route ? 'active' : ''}><span>{m.title}</span></Item>
            </a>
        )
    }

    return <Container show={props.show}>
        {getMenuItem()}
    </Container>
}


export default connect(state => ({
    lang: state
}))(List)