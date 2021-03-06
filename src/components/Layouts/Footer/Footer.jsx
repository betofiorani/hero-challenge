import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({autor}) => {
    return (
        <div className="footer">
            <p className="copyright">{`2021 - todos los derechos reservados a ${autor}`}</p>    
        </div>
    )
}

Footer.propTypes = {
    autor: PropTypes.string.isRequired,
}

export default Footer
