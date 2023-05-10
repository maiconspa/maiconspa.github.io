import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 0;
    background: rgba(225, 218, 247, 0.07);
    backdrop-filter: ${props => props.blur ? 'blur(34px)' : 'none'} ;
`

export const BlobContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 0;

    svg {
        position: absolute;
        right: 0;
    }
`

export const Title = styled.h1`
    text-transform: uppercase;
`

export const Text = styled.p`
`