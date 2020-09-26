import React from 'react'
import PropTypes from 'prop-types'
import {CustomScrollbar, Box, Thumb} from './styled.js'

const Scrollbar = props => {
    const {children, color, borderRadius, container, horizontal, vertical, autoHide} = props

    const viewStyle = ({style}) => (
        <Box
            className='box'
            style={{...style}}
            padding={container.padding}
            color={container.color ?? 'inherit'}
            background={container.background ?? 'inherit'}
            overflowY={vertical ? 'scroll' : 'hidden'}
            overflowX={horizontal ? 'scroll' : 'hidden'}/>
    )
 
    const renderThumbVertical = () => {
        if (vertical) {
            return <Thumb 
                    color={color} 
                    borderRadius={borderRadius} className="thumb-vertical"/>
        } else {
            return <div></div>
        }
    }

    const renderThumbHorizontal = () => {
        if (horizontal) {
            return <Thumb 
                    color={color} 
                    borderRadius={borderRadius} className="thumb-horizontal"/>
        } else {
            return <div></div>
        }
    }
    
    return <CustomScrollbar
        style={{width: container.width, height: container.height}}
        renderView={viewStyle}
        autoHide={autoHide}
        renderThumbVertical={renderThumbVertical}
        renderThumbHorizontal={renderThumbHorizontal}>
        {children}
    </CustomScrollbar>
}

Scrollbar.propTypes = {
    children: PropTypes.any,
    color: PropTypes.string,
    borderRadius: PropTypes.string,
    container: PropTypes.object.isRequired,
    horizontal: PropTypes.bool,
    vertical: PropTypes.bool,
    autoHide: PropTypes.bool
}

Scrollbar.defaultProps = {
    borderRadius: 'inherit',
    horizontal: true,
    vertical: true,
    autoHide: true,
    container: {
        width: '100%',
        height: '100%'
    }
}

export default Scrollbar