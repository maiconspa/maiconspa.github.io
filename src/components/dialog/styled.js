import styled, {css, keyframes} from 'styled-components'

const show = keyframes`
    from {opacity: 0;}
    to {opacity: 1}
`

export const Container = styled.div `
    display:flex;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: ${({theme}) => theme.dialog.blurredBackground};
    justify-content: center;
    align-items: center;
    z-index: 999;
    backdrop-filter: blur(3px);
    opacity: 1;

    ${({isOpen}) => isOpen && css`
        animation: ${show} .3s ease-out;
    `}

    p {
        color ${({theme}) => theme.text};
    }
`
export const DialogBox = styled.div ` 
    background: ${({theme}) => theme.dialog.background};
    padding: 32px;
    border-radius: 3px;
    width: ${({width}) => width ?? 'auto'};
    height: ${({height}) => height ?? 'auto'};
  
`

export const Close = styled.span`
    color: ${({theme}) => theme.dialog.title};
    float: right;
    font-size: 28px;
    font-weight: bold;
    :hover, :focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
`