import React from 'react'

import { ReactComponent as ContactArt } from '../../assets/arts/undraw_contact.svg'

import { ReactComponent as ArrowForward } from '../../assets/icons/arrow_forward.svg'
import { ReactComponent as Linkedin } from '../../assets/icons/linkedin.svg'
import { ReactComponent as Github } from '../../assets/icons/github.svg'
import { ReactComponent as Email } from '../../assets/icons/email.svg'

import { Container } from './styled'
const Home = () => <Container id='contact'>
    <ContactArt />
    <div>
        <div>
            <h1>Minhas redes</h1>
            <div>
                <a target='_blank' href='https://www.linkedin.com/in/maiconspa/'><Linkedin /></a>
                <a target='_blank' href='https://github.com/maiconspa/'><Github /></a>
                <a target='_blank' href='mailto:maiconsouzapa@gmail.com'><Email /></a>
            </div>
            <a target='_blank' href='https://drive.google.com/file/d/13rkUxOhB8M1pXj4pHj9q9LB_vyWhVWXU/view?usp=sharing'>
                Meu Currículo
                <ArrowForward />
            </a>
        </div>
    </div>
</Container>

export default Home