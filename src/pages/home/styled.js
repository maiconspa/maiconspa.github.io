import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    >div {
        display: block;

        >h1 {
            text-align: center;
            margin-bottom: 20px;
            color: ${({theme}) => theme.primary};
        }

        >p {
            width: 400px;
            max-width: 100vw;
            margin-bottom: 20px;
            text-align: center;
            color: ${({theme}) => theme.text};
        }

        >div {
            display: flex;
            text-align: center;
            justify-content: center;s

            >a {
                border: none;
                outline: none;
                background: none;
                cursor: pointer;
                display: block;
            }
            svg {
                width: 30px;
                height: 30px;
                fill: ${({theme}) => theme.text};
                margin-left: 20px;
            }
        }
    }
`