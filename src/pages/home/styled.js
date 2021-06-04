import styled, { keyframes } from 'styled-components'

const toTop = keyframes`
    0%   {opacity: 0; margin-top: 100vw;}
    70%  {margin-top: -20px; }
    100% {opacity: 1; margin-top: 0;}
`

export const Container = styled.div`
    width: 100%;
    max-width: 100vw;
    height: 100vh;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'helloContent helloImage';
    animation: ${toTop} 2s ease-out;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        grid-template-areas: 'helloContent'
                             'helloImage';
    }

    >div {
        grid-area: helloContent;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        @media (max-width: 768px) {
            justify-content: center;
            align-items: flex-end;
        }

        >div {
            display: block;
            height: fit-content;
            padding-right: 20px;
            text-align: right;
            
            @media (max-width: 768px) {
                padding: 0;
            }

            >h1 {
                text-align: end;
                margin-bottom: 20px;
                padding: 0;
                color: ${({ theme }) => theme.primary};
                
                @media (max-width: 768px) {
                    text-align: center;
                    width: 100%;
                }
            }

            >p {
                width: 400px;
                margin-bottom: 20px;
                font-weight: bold;
                text-align: end;
                float: right;
                color: ${({ theme }) => theme.text};
                
                @media (max-width: 768px) {
                    text-align: center;
                    width: 100%;
                }
            }

        }

    }

    >svg {
        grid-area: helloImage;
        width: 50%;
        height: 100vh;
        padding: 0 0 0 20px;
        margin: 0;

        @media (max-width: 768px) {
            width: 50%;
            height: auto;
            padding: 0 20px 0 0;
            justify-self: center;
        }
    }
`

export const Alert = styled.span`
    width: fit-content;
    background-color: ${({theme}) => theme.alert};
    padding: 5px;
    border-radius: 10px;
    margin: 0;
    text-align: center;
    justify-content: center;
`