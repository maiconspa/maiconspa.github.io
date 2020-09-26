import {createGlobalStyle} from 'styled-components'
import OxygenLight from '../assets/fonts/Oxygen-Light.ttf'
import OxygenRegular from '../assets/fonts/Oxygen-Regular.ttf'
import OxygenBold from '../assets/fonts/Oxygen-Bold.ttf'

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'Oxygen';
    src: url(${OxygenRegular});
}

@font-face {
    font-family: 'Oxygen';
    src: url(${OxygenLight});
    font-weight: 300;
}
@font-face {
    font-family: 'Oxygen';
    font-weight: bold;
    src: url(${OxygenBold});
}

*,*:after,*:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html, body, #root {
    width: 100%;
    height: 100%;
    font-size: 100%;
}

body {
    font: 16px 'Oxygen', sans-serif;
    background: ${({theme}) => theme.background};
}`

export default GlobalStyles