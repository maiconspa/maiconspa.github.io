import React from 'react'

import { ReactComponent as Linkedin } from '../../assets/icons/linkedin.svg'
import { ReactComponent as Github } from '../../assets/icons/github.svg'
import { ReactComponent as Email } from '../../assets/icons/email.svg'

import {Container} from './styled'
const Home = () => <Container>
        <div>
            <h1>Olá<br/>Seja bem-vindo(a)</h1>
            <p>Este site ainda está em construção, sinta-se a vontade para explorar os recursos disponíveis</p>
            <div>
                <a target='_blank' href='https://www.linkedin.com/in/maiconspa/'><Linkedin/></a>
                <a target='_blank' href='https://github.com/maiconspa/'><Github/></a>
                <a target='_blank' href='mailto:maiconsouzapa@gmail.com'><Email/></a>
            </div>
        </div>
</Container>

export default Home