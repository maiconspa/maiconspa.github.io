import styled, {css, keyframes} from 'styled-components'

const expand = keyframes`
    from {opacity: 0; margin-top: -30px;}
    to {opacity: 1; margin-top: 10;}
`

export const Container = styled.ul`
    grid-area: list;
    list-style: none;
    display: flex;

    a {
        margin-left: 10px;

        :first-child {
            margin: 0;
        }
    }

    @media (max-width: 1010px) {
        padding: 10px 0 20px;
        display: ${({show}) => show ? 'block' : 'none'};
        justify-self: right;
        background: transparent;
        ${({show}) => show && css`
            animation: ${expand} .5s ease-out;
        `}
        a {
            display: block;
            margin: 10px 0 0;
            text-align: end;
        }
    }
`

export const Item = styled.li`
    
`


