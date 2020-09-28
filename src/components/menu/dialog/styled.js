import styled from 'styled-components'

export const ThemeContainer = styled.div`
    width: auto;
    height: auto;
    border-radius: 8px;
    cursor: pointer;
    background: ${({currentTheme}) => currentTheme.background};
    border: 1px solid #000;
    display: block;
    padding: 10px;
    margin: 20px 0 20px;
    text-align: center;

    >nav {
        width: 100px;
        height: 10px;
        margin: 5px 5px 10px 5px;
        background: ${({currentTheme}) => currentTheme.navbar.background};
        border: 1px solid #000;
    }

    >div {
        display: flex;
        justify-content: center;

        >h1 {
            font-size: 20px;
        }
    }

    >p {
        font-size: 12px;
        color: ${({currentTheme}) => currentTheme.text};
    }
`