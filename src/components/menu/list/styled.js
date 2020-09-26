import styled from 'styled-components'

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

        a {
            display: block;
            margin: 10px 0 0;
            text-align: end;
        }
    }
`

export const Item = styled.li`
    
`