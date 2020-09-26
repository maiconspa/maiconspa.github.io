import React from 'react'
import {useTranslation} from 'react-i18next'
import {Link} from 'react-router-dom'

import {Container, Item} from './styled'

const List = props => {
   const pathname = window.location.pathname
   const {t} = useTranslation('menu')

    function getAvailableMenus() {
        return [
            { title: t('technologies'), icon: '', route: '/technologies' },
            { title: t('education'), icon: '', route: '/education' },
            { title: t('projects'), icon: '', route: '/projects' },
            { title: t('about'), icon: '', route: '/about' }
        ];
    }

    function getMenuItem() {
        return getAvailableMenus().map(m => <Link key={m.title} to={m.route} onClick={() => props.handleOpen(false)}>
                <Item className={pathname === m.route ? 'active' : ''}>{m.icon} <span>{m.title}</span></Item>
            </Link>
        )
    }

    return <Container show={props.show}>
        {getMenuItem()}
    </Container>
}

export default List