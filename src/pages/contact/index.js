import React from 'react'

import { ReactComponent as ContactArt } from '../../assets/arts/undraw_contact.svg'

import { ReactComponent as Linkedin } from '../../assets/icons/linkedin.svg'
import { ReactComponent as Github } from '../../assets/icons/github.svg'
import { ReactComponent as Email } from '../../assets/icons/email.svg'

import { Container } from './styled'
const link = {
    cv: 'https://drive.google.com/file/d/13CY1p3JvQcK9Wglq43pajWhOkvE6BEg3/view?usp=sharing',
    linkedin: 'https://www.linkedin.com/in/maiconspa/',
    github: 'https://github.com/maiconspa/',
    email: 'mailto:maiconsouzapa@gmail.com'
}

const Home = () => <Container id='contact'>
    <ContactArt />
    <div>
        <div>
            <h1>Minhas redes</h1>
            <div>
                <a target='_blank' rel="noreferrer" alt="Linkedin icon" href={link.linkedin}><Linkedin /></a>
                <a target='_blank' rel="noreferrer" alt="GitHub icon" href={link.github}><Github /></a>
                <a target='_blank' rel="noreferrer" alt="Email icon" href={link.email}><Email /></a>
            </div>
        </div>
    </div>
</Container>

export default Home