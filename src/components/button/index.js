import React from 'react'
import PropTypes from 'prop-types'
import {Container} from './styled'

export const Button = props => {
    return <Container {...props}>
        {props.children}
    </Container>
}

Button.propTypes = {
    text: PropTypes.string,
    styles: PropTypes.object,
    list: PropTypes.array
}