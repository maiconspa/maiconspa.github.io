import styled from 'styled-components'

export const Container = styled.button`
    background: ${({backgroundColor, secondary, theme, outlined}) => 
        {switch(backgroundColor) {
            case 'secondary':
                return theme.secondary
            case 'primary':
                return theme.primary
            default:
                if (outlined) {
                    return 'transparent'
                } else if (secondary) {
                    return theme.button.secondary.background
                } else if (backgroundColor) {
                    return backgroundColor
                } else {
                    return theme.button.primary.background
                }
            }
        }
    };

    color: ${({color, secondary, theme}) => color ?? secondary ? theme.button.secondary.text : theme.button.primary.text};
    font-size: ${({fontSize, secondary, theme}) => fontSize ?? secondary ? theme.button.secondary.fontSize : theme.button.primary.fontSize};
    border: ${({outlined, border, secondary, theme}) => {
        if (border) return border
        else if (secondary)
            return theme.button.secondary.border
        else return theme.button.primary.border
    }};

    border-radius: ${({borderRadius, secondary, theme}) => borderRadius ?? secondary ? theme.button.secondary.borderRadius : theme.button.primary.borderRadius};
    outline: ${({outline, secondary, theme}) => outline ?? secondary ? theme.button.secondary.outline : theme.button.primary.outline};
    transition: ${({secondary, theme}) => secondary ? (theme.button.secondary.transition ?? 'all 2s') : (theme.button.primary.transition ?? 'all 2s')};
    padding: ${({padding}) => padding ?? '8px 16px'};
    margin: ${({margin}) => margin ?? '0'};
    text-decoration: none;
    align-items: center;
    cursor: pointer;
    display: flex;

    :hover {
        background: ${({secondary, theme}) => secondary ? (theme.button.secondary.hover.background ?? theme.button.secondary.background) : (theme.button.primary.hover.background ?? theme.button.primary.background)};
        color: ${({secondary, theme}) => secondary ? (theme.button.secondary.hover.text ?? theme.button.secondary.text) : (theme.button.primary.hover.text ?? theme.button.primary.text)};

        >svg {
            color: ${({secondary, theme}) => secondary ? (theme.button.secondary.hover.text ?? theme.button.secondary.text) : (theme.button.primary.hover.text ?? theme.button.primary.text)};
        }
    }

    >svg {
        width: 14px;
        height: 14px;
        margin-right: 10px;
        color: ${({color, secondary, theme}) => color ?? secondary ? theme.button.secondary.text : theme.button.primary.text};
    }
`