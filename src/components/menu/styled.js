import styled, {css, keyframes} from 'styled-components'

const slide = keyframes`
    from   {top: -40px;}
    to  {top: 10px;}
`

const expand = keyframes`
    from {opacity: 0; margin-top: -30px;}
    to {opacity: 1; margin-top: 10;}
`

export const Container = styled.nav`
    width: calc(100% - 20px);
    display: flex;
    height: 40px;
    left: 10px;
    top: 10px;
    padding: 5px 20px;
    border-radius: 10px;
    position: fixed;
    align-self: center;
    align-items: center;
    justify-content: space-between;
    color: ${({theme}) => theme.navbar.text};
    background: ${({theme}) => theme.navbar.background};
    backdrop-filter: blur(4px);
    transition: all .5s;
    z-index: 997;
    animation: ${slide} .5s ease-out;

    ${({show}) => show && css`
        display: grid;
        height: auto;
        padding: 5px 20px 10px;
        grid-template-columns: '1fr';
        grid-template-rows: 'auto auto auto';
        grid-template-areas:'logo . menuIcon'
                            '. . list'
                            '. .buttonList';
    
    `}

    >a {
        height: 30px;
    }

    a {
        grid-area: logo;
        text-decoration: none;
        color: ${({theme}) => theme.navbar.text};
        font-weight: bold;
        transition: all .3s;
        border-radius: 50%;

        :hover {
            transform: scale(0.9);
        }

        >svg {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            fill: ${({theme}) => theme.navbar.text};;
        }
    }

    >button {
        grid-area: menuIcon;
        display: none;
        cursor: pointer;
        background: transparent;
        border: none;
        outline: none;
        transition: all .3s;
        width: fit-content;
        justify-self: right;

        :hover {
            transform: scale(0.8);
        }

        >svg {
            width: 30px;
            color: ${({theme}) => theme.navbar.text};
        }

        @media (max-width: 1010px) {
            display: block;
            z-index: 998;
        }
    }
`

export const ButtonList = styled.div`
    grid-area: buttonList;
    display: flex;

    @media (max-width: 1010px) {
        display: none;

        ${({show}) => show && css`
            animation: ${expand} .5s ease-out;
            display: ${({show}) => show ? 'flex' : 'none'};
            padding: 10 0 0;
        `}
    }

    >button {
        display: flex;
        cursor: pointer;
        background: transparent;
        border: none;
        outline: none;
        transition: all .3s;

        :hover {
            transform: scale(0.8);
        }

        >svg {
            width: 30px;
            color: ${({theme}) => theme.navbar.text};
        }

        ${({show}) => show && css`
            margin: 0 0 0 20px;
        `}
    }
`