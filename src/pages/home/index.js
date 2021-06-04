import React from 'react'

import { ReactComponent as HelloArt } from '../../assets/arts/undraw_hello.svg'
import { Container, Alert } from './styled'

const Home = () => <Container id='start'>
    <div>
        <div>
            <h1>Olá, eu sou<br />Maicon Souza</h1>
            <p>
                Desenvolvedor Full Stack,
                estudante de Ciência da Computação, Data Science e Cloud.
            </p>
            <Alert>⚠️ Página em reforma, novidades em breve 👀</Alert>
        </div>
    </div>
    <HelloArt />
</Container>

export default Home