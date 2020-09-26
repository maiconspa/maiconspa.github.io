import styled from 'styled-components'

export const Container = styled.nav`
    width: calc(100% - 20px);
    height: 40px;
    left: 10px;
    top: 10px;
    
    padding: 0 20px;
    
    border-radius: 10px;
    align-self: center;
    align-items: center;
    display: flex;
    justify-content: space-between;
    background-color: transparent;
    color: ${({theme}) => theme.navbar.text};
    position: fixed;
    background: ${({theme}) => theme.navbar.background};
    backdrop-filter: blur(5px);

    >svg {
        width: auto;
        max-height: 30px;
        fill: ${({theme}) => theme.navbar.text};

        @media (max-width: 1010px) {
            z-index: 999;
        }
    }

    >button {
        display: none;
        cursor: pointer;
        background: transparent;
        border: none;
        height: 54px;

        &.settings {
            display: flex;
        }

        >svg {
            height: 54px;
            padding: 0.95rem;
            color: ${({theme}) => theme.navbar.text};
        }

        @media (max-width: 1010px) {
            display: block;
            z-index: 998;

            &.settings {
                display: none;
            }
        }
    }

    a {
        text-decoration: none;
        color: ${({theme}) => theme.navbar.text};
        font-weight: bold;
    }
`