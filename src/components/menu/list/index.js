import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {Container, Item} from './styled'

const List = props => {
    const { handleShow } = props
    const pathname = window.location.pathname
   
    function getAvailableMenus() {
        return [
            { title: 'Sobre', route: '/' },
            { title: 'Projetos', route: '/' },
            { title: 'Tecnologias', route: '/' },
            { title: 'Contato', route: '/' }
        ];
    }

    function getMenuItem() {
        return getAvailableMenus().map(m => <Link key={m.title} to={m.route} onClick={() => handleShow(false)}>
                <Item className={pathname === m.route ? 'active' : ''}><span>{m.title}</span></Item>
            </Link>
        )
    }

    return <Container show={props.show}>
        {getMenuItem()}
    </Container>
}


export default connect(state => ({
    lang: state
}))(List)