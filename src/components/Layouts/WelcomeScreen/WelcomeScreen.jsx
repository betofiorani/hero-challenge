import React from 'react'
import PropTypes from 'prop-types'
import useVanta from '../../../hooks/useVanta'

const WelcomeScreen = ({ children, clases }) => {

    const { myRefDiv } = useVanta()

    return (
        <div className={clases} ref={myRefDiv}>
            {children}    
        </div>
    )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node
}

export default WelcomeScreen
