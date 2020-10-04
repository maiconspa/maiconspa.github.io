import styled from 'styled-components'
import Scrollbars from 'react-custom-scrollbars'

export const CustomScrollbar = styled(Scrollbars)`
    margin: 0!important;
`

export const Box = styled.div`
    padding: ${({padding, horizontal}) => padding ?? (horizontal ? '0 10px 10px' : '0 10px 0 0')};
    color: ${({color}) => color ?? 'inherit'};
    background: ${({background}) => background ?? 'inherit'};
    overflow-y: ${({vertical}) => vertical ? 'scroll' : 'hidden'};
    overflow-x: ${({horizontal}) => horizontal ? 'scroll' : 'hidden'};
`

export const Thumb = styled.div`
    right: 0;
    width: 5px;
    border-radius: ${props => props.borderRadius};
    background: ${({color, theme}) => color ?? theme.scroll};
    display: ${({horizontal}) => horizontal ? 'none' : 'flex'};
`