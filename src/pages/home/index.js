import React from 'react'

import { ReactComponent as HelloArt } from '../../assets/arts/undraw_hello.svg'

import {Container} from './styled'
const Home = () => <Container id='start'>
        <div>
            <div>
                <h1>Olá, eu sou<br/>Maicon Souza</h1>
                <p>20 anos de idade, desenvolvedor Front-End, 
                    estudante de Ciência da Computação, entusiasta de 
                    Data Science e tudo o que envolve a Tecnologia da Informação.</p>
            </div>
        </div>
        <HelloArt/>
</Container>

export default Home